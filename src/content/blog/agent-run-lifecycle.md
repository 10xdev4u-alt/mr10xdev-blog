---
title: "The agent run lifecycle: from trigger to result"
description: "What actually happens when an agent runs. The 7 steps from a GitHub event to a posted comment. The token flow, the tool flow, the error flow. Diagrams and code."
date: "2026-05-07"
tags: ["agent", "runtime", "architecture", "lifecycle"]
---

What actually happens when an agent runs. The 7 steps from a GitHub
event to a posted comment. The token flow, the tool flow, the error
flow. Diagrams and code.

## The flow at a glance

```
[GitHub webhook]
       │
       ▼
[1. Signature verify]
       │
       ▼
[2. Event normalize]
       │
       ▼
[3. Agent match]
       │
       ▼
[4. Context build]  (manifest + memory + event + tools)
       │
       ▼
[5. Agent loop]  (LLM call → tool call → LLM call → ...)
       │
       ▼
[6. Side effects]  (post comment, open PR, etc.)
       │
       ▼
[7. Memory update]  (episodic log, semantic index)
```

7 steps. Let's walk through each.

## Step 1: Signature verify

GitHub sends a webhook with a signature in `X-Hub-Signature-256`.
The server verifies the signature against a shared secret.

```ts
// src/server/webhook-signature.ts
export function verifyWebhookSignature(
  payload: string,
  signature: string | undefined,
  secret: string,
): boolean {
  if (!signature) return false;
  const expected = 'sha256=' + createHmac('sha256', secret).update(payload).digest('hex');
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
```

If the signature doesn't match, the request is rejected with 401.
No agent runs. No LLM call. No cost.

## Step 2: Event normalize

GitHub sends the raw event payload. The server normalizes it to
the `NormalizedEvent` shape:

```ts
{
  name: 'issues.opened',
  action: 'opened',
  payload: { /* raw GitHub payload */ },
  deliveryId: 'd-12345',
  installationId: 67890,
}
```

The event name is `event.action` (e.g., `issues.opened`). The
deliveryId is the unique identifier for this webhook delivery
(used for idempotency). The installationId identifies the GitHub
App installation.

## Step 3: Agent match

The server has a `ManifestRegistry` of all agents. For each event,
it finds the agents that subscribe to that event:

```ts
const matches = matchManifests(
  registry.list(),
  event.name,  // e.g., 'issues.opened'
);
```

The matcher is exact-match by default, with priority by trigger
specificity (more triggers = higher priority) and alphabetical
tiebreaker.

If no agent matches, the server returns 200 with `matched: 0`. The
event is dropped.

If 1+ agents match, the server runs each in sequence.

## Step 4: Context build

For each matched agent, the server builds a `RunContext`:

```ts
{
  manifest: <the agent's manifest>,
  event: <the normalized event>,
  provider: <the LLM provider for the agent's model>,
  tools: <the tool registry, populated with the manifest's tools>,
  memory: <the agent's memory, fresh from disk>,
  repo: <the {owner, name} of the repo>,
  runId: <unique id for this run>,
  dryRun: false,
  logger: <the logger>,
}
```

The provider is selected from the manifest's `model.provider`
field. The tools are built from the manifest's `tools` list. The
memory is the agent's persistent store (in-memory, git, or
SQLite).

## Step 5: Agent loop

The core loop:

```ts
while (steps < maxSteps && !aborted) {
  const response = await provider.chat(messages, options);
  usage.inputTokens += response.usage.inputTokens;
  usage.outputTokens += response.usage.outputTokens;
  
  if (response.toolCalls.length === 0) {
    finalText = response.content;
    break; // LLM is done
  }
  
  for (const tc of response.toolCalls) {
    const result = await executeTool(tc);
    messages.push(/* tool result */);
  }
  
  steps++;
}
```

The agent calls the LLM. The LLM either:
- Returns text only → done
- Returns tool calls → execute them, add results to messages, loop

The loop is bounded by `maxSteps`, `maxToolCalls`, `maxTotalTokens`,
`timeoutMs`, and `AbortSignal`.

## Step 6: Side effects

The side effects are the actual work the agent does:
- `github.post_comment` → posts a comment
- `github.add_labels` → adds labels
- `github.create_pr` → opens a PR
- `memory.write` → updates memory
- etc.

Each side effect is a tool call. The tool call is the side effect.
The LLM orchestrates; the tool executes.

If a side effect fails, the agent handles the error. The next
LLM call sees the error and can adjust.

## Step 7: Memory update

After the run, the agent's memory is updated:
- **Episodic memory:** a new entry is added with the run's outcome
- **Semantic memory:** the run's relevant content is embedded and
  indexed
- **Working memory:** any state the agent wanted to keep is
  stored

The next time the agent runs, it can recall what happened in
previous runs. The memory compounds.

## The token flow

Each LLM call uses:
- **Input tokens:** system prompt + memory + conversation history +
  tool definitions + tool results
- **Output tokens:** the LLM's response (text + tool calls)

The total cost is `(input / 1M * inputPrice) + (output / 1M * outputPrice)`.

The runner tracks the cumulative usage across all LLM calls in
the run. The result includes the final `usage` object.

## The tool flow

Each tool call is:
1. Parsed from the LLM response
2. Validated against the tool's input schema (Zod)
3. Executed with the parsed input
4. The result is added to the messages as a "user" turn
5. The next LLM call sees the result

Tools that return errors are still added to the messages. The
error message tells the LLM what went wrong. The LLM can then
adjust.

## The error flow

Errors can happen at:
- **Signature verification:** 401 returned, no run
- **Event normalize:** invalid JSON, 400 returned
- **Provider call:** retry with backoff, then fail
- **Tool execution:** error returned to the LLM, loop continues
- **Memory read/write:** error logged, run continues with empty memory
- **Approval:** if no callback, run is blocked

The runner is resilient. One tool failing doesn't kill the run.
The LLM can recover.

## The full lifecycle

```
t=0ms   Webhook arrives
t=2ms   Signature verified
t=5ms   Event normalized
t=10ms  Agent matched
t=20ms  Context built (memory loaded)
t=50ms  First LLM call (1.5K input, 200 output)
t=200ms LLM returns tool call (search_issues)
t=300ms Tool executes (Octokit call)
t=400ms Second LLM call (2K input, 100 output)
t=600ms LLM returns text only
t=650ms Run complete
t=700ms Memory updated
t=750ms Response sent to GitHub
```

Total: 750ms. The user sees the result in under a second.

## The lesson

The agent run lifecycle is 7 steps. Each step is small. Each
step is testable. The composition is what makes it powerful.

When debugging, isolate the step. "Why didn't the agent post the
comment?" → check the tool execution. "Why didn't the LLM call
the tool?" → check the prompt + memory. "Why didn't the agent
match the event?" → check the manifest.

The lifecycle is a checklist. Run through it when something's
wrong.
