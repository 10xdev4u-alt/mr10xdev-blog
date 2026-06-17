---
title: "The 5 reasons agents fail (and how to prevent them)"
description: "Agents fail for 5 reasons: bad prompts, bad data, bad tools, bad models, bad infra. The causes, the symptoms, the fixes. The 30% rule: 30% of the time the model is wrong, 70% the system around it is wrong."
date: 2026-04-12
tags: ["agents", "failure", "debugging"]
---

Agents fail for 5 reasons: bad prompts, bad data, bad tools, bad
models, bad infra. The causes, the symptoms, the fixes. The 30%
rule: 30% of the time the model is wrong, 70% the system around
it is wrong.

## Reason 1: Bad prompt

The prompt is unclear, vague, or contradictory. The LLM guesses
wrong. The output is wrong.

**Symptom:** the agent's output is inconsistent. The same input
produces different outputs (because the LLM is guessing).

**Example:**
```markdown
You are an agent. You help with things.
```

This prompt is useless. The LLM has no idea what to do. The
output is whatever the LLM felt like.

**Fix:** be specific. Use the 5-section manifest. Every prompt
has a clear purpose, a specific toolset, tight limits, safe
approvals.

```markdown
You are an issue triager. When a new issue is opened:
1. Read the title and body.
2. Search for similar past issues.
3. Apply one label: bug, feature, question, or duplicate.
4. If duplicate, post a comment and close.
5. If bug and no repro, ask for one.

Be concise. One short comment per issue.
```

This prompt is specific. The LLM knows what to do. The output
is consistent.

## Reason 2: Bad data

The agent's input data is wrong. The LLM reasons about the
wrong data. The output is wrong.

**Symptom:** the agent's output is consistently wrong on certain
inputs (but right on others).

**Example:** the agent gets the user's name from the issue
author field, but the field is sometimes null or wrong. The
agent calls the user by the wrong name.

**Fix:** validate the input. Handle null/wrong values. Don't
trust external data.

```ts
const author = issue.user?.login ?? 'there';
// Don't: const author = issue.user.login;  // can be null
```

The fix is the same for every input: validate, handle null,
fallback to a default.

## Reason 3: Bad tools

The tool returns wrong data. The LLM trusts the tool. The
output is wrong.

**Symptom:** the agent's output is wrong only when a specific
tool is called.

**Example:** the `github.search_issues` tool returns the wrong
issues (maybe it doesn't filter by repo correctly). The agent
trusts the tool. The agent labels the issue wrong.

**Fix:** test the tools. Validate the output. Sanity check the
results.

```ts
const res = await client.search.issuesAndPullRequests({ q: query });
if (res.data.total_count === 0) {
  return { ok: true, output: { items: [], totalCount: 0 } };
}
// Sanity check: the items should be in the right repo
const wrongRepo = res.data.items.filter((i) => i.repository_url !== expectedRepo);
if (wrongRepo.length > 0) {
  ctx.logger.warn('search_issues returned items from other repos', { wrongRepo });
}
return { ok: true, output: { items: res.data.items, totalCount: res.data.total_count } };
```

The fix: every tool should validate its output. Every tool
should warn when something looks off.

## Reason 4: Bad model

The model is the bottleneck. The prompt is good, the data is
good, the tools are good, but the model just can't do the task.

**Symptom:** the agent's output is wrong on hard tasks, right
on easy tasks.

**Example:** the agent can classify simple issues (bug vs
feature) but fails on nuanced issues (ambiguous feature
request that's also a bug).

**Fix:** use a better model. Or break the task into smaller
pieces. Or use a cascade (cheap model first, expensive model
on hard cases).

```yaml
model:
  provider: anthropic
  name: claude-sonnet-4-5  # for most tasks
  # Use claude-haiku-4 for simple classification
```

Or:
```ts
// Cascade: cheap first, expensive on uncertainty
const initial = await haiku.classify(issue);
if (initial.confidence > 0.9) return initial.label;
return await sonnet.classify(issue, { context: initial });
```

The fix: use the right model for the task. Don't use one model
for everything.

## Reason 5: Bad infra

The infrastructure is the bottleneck. The prompt is good, the
data is good, the tools are good, the model is good, but the
infra is slow, unreliable, or expensive.

**Symptom:** the agent's runs are slow, the runs fail randomly,
the cost is high.

**Example:** the agent calls the LLM API directly from the
agent loop, which adds 500ms of network overhead per call. The
agent takes 5 seconds for a task that should take 1 second.

**Fix:** measure the infra. Find the bottleneck. Optimize.

```ts
// Add tracing to find the slow part
const trace = tracer.startSpan('agent.step');
const response = await provider.chat(messages, options);
trace.end();
```

The fix: observability. You can't optimize what you can't
measure.

## The 30% rule

30% of the time, the model is wrong. 70% of the time, the
system around the model is wrong.

- The prompt is unclear (40% of system issues)
- The data is wrong (20%)
- The tool is wrong (15%)
- The model is wrong (15%)
- The infra is wrong (10%)

When the agent fails, check the system first. Check the model
last. The system is more likely to be the cause.

## The debugging flow

1. **Reproduce.** Get the exact input that produced the wrong
   output.
2. **Trace.** See the agent's reasoning, the tool calls, the
   data.
3. **Check the prompt.** Is it clear? Is it specific?
4. **Check the data.** Is the input what the LLM sees?
5. **Check the tools.** Are the tools returning what they
   claim?
6. **Check the model.** Is the model capable of this task?
7. **Check the infra.** Are there timeouts, rate limits, or
   other infra issues?

The flow is: system first, model last. The system is more
likely to be the cause.

## The prevention

The 5 failures are preventable:

- **Bad prompt:** write better prompts. Use the 5-section
  manifest. Test with eval suites.
- **Bad data:** validate inputs. Handle nulls. Sanity check
  outputs.
- **Bad tools:** test the tools. Add output validation. Add
  error handling.
- **Bad model:** use the right model. Cascade. Break down hard
  tasks.
- **Bad infra:** measure. Optimize. Add observability.

The prevention is in the design. The design is in the manifest.
The manifest is the contract. The contract is the foundation.

## The lesson

5 reasons agents fail. 30% rule. Debugging flow.

The agent that follows the 5 prevention rules is robust. The
agent that doesn't is a toy. The choice is yours.

The agent era is here. The failures are known. The fixes are
known. Apply them.
