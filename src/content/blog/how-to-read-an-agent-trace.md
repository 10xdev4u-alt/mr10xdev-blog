---
title: "How to read an agent trace"
description: "When an agent fails (and it will), the trace is the only way to know why. The 7 sections of a good trace, the tools, the patterns, the meta-lesson. Save hours of debugging."
date: 2026-03-28
tags: ["debugging", "agents", "observability"]
---

When an agent fails (and it will), the trace is the only way to
know why. The 7 sections of a good trace, the tools, the
patterns, the meta-lesson. Save hours of debugging.

## The 7 sections of a trace

A good agent trace has 7 sections. Each section answers a
specific question.

### 1. The trigger

**What was the event that started the run?**

```
trigger: issues.opened
delivery: d-12345
timestamp: 2026-06-15T10:30:00Z
```

Without the trigger, you don't know what the agent was trying
to do. The trigger is the context.

### 2. The manifest

**What was the agent's configuration?**

```
agent: triage
model: claude-sonnet-4-5
temperature: 0.2
tools: [github.post_comment, github.add_labels, ...]
limits: { maxSteps: 6, timeoutMs: 60000 }
```

Without the manifest, you don't know what the agent could do.
The manifest is the agent's capability.

### 3. The context

**What was the agent's input?**

```
event.payload: { issue: { number: 42, title: 'bug', body: '...' } }
memory: { ... }  // what the agent already knew
```

The context is the LLM's input. Without the context, you can't
reproduce the run.

### 4. The LLM calls

**Every LLM call the agent made, with input and output.**

```
step 1: chat(messages=[...], options={...})
  response: { content: 'Let me search for similar issues.', toolCalls: [...] }
step 2: chat(messages=[..., toolResult], options={...})
  response: { content: 'I see similar issue #15.', toolCalls: [...] }
...
```

Each LLM call is a step. The steps are the agent's reasoning.
The reasoning is the agent's behavior.

### 5. The tool calls

**Every tool call the agent made, with input and output.**

```
tool: github.search_issues
input: { query: 'auth crash' }
output: { items: [{ number: 15, title: 'auth crash' }] }
duration: 320ms
```

The tool calls are the agent's actions. The actions are the
agent's effects.

### 6. The errors

**Every error the agent encountered, with the context.**

```
error: github.close_issue
  status: 403
  message: "Resource not accessible by integration"
  recovered: false
  retry: no
```

The errors are the agent's failures. The failures are the
agent's limits.

### 7. The result

**What the agent produced, in the end.**

```
finalText: "Issue labeled as 'bug'. Comment posted."
toolExecutions: 3
usage: { inputTokens: 4200, outputTokens: 350, costUsd: 0.021 }
steps: 4
stopReason: completed
duration: 2.4s
```

The result is the agent's output. The output is the agent's
value.

## The tools

For tracing, you need:
- **Trace viewer** (Langfuse, OTel, custom) — see the full
  trace
- **Log aggregator** (Datadog, Honeycomb, your own) — search
  across runs
- **Run records** (file, database) — persist the trace for
  later analysis

The first is essential. The second is nice-to-have. The third
is required for compliance.

## The patterns

When reading a trace, look for these patterns:

### Pattern 1: The "everything looks fine" trace

The trace shows normal behavior. The LLM is reasoning. The
tools are returning data. The result is correct.

In this case, the user's complaint is a false positive. The
agent did the right thing. The user misunderstood.

### Pattern 2: The "tool returned garbage" trace

The trace shows the LLM reasoning correctly but the tool
returning wrong data. The LLM trusted the tool. The output
was wrong.

In this case, the tool is the bug. Fix the tool, not the agent.

### Pattern 3: The "LLM didn't see the data" trace

The trace shows the tool returning correct data but the LLM not
using it. The LLM ignored the data. The output was wrong.

In this case, the prompt is the bug. The data is in the
context, but the prompt didn't direct the LLM to use it. Fix
the prompt.

### Pattern 4: The "LLM didn't call the tool" trace

The trace shows the LLM reasoning but not calling the right
tool. The LLM should have called `search_issues` but didn't.
The output was wrong.

In this case, the tool description is the bug. The LLM didn't
know to call the tool. Fix the tool description.

### Pattern 5: The "LLM looped" trace

The trace shows the LLM calling the same tool 20 times. The
output is the same. The agent timed out.

In this case, the prompt is the bug. The LLM is stuck. Fix
the prompt or add `maxToolCalls`.

### Pattern 6: The "rate limit" trace

The trace shows the LLM calling the API and getting 429. The
agent failed. The user's complaint is about a downstream effect.

In this case, the runtime is the bug. Add rate limit handling.
Add retries with backoff.

## The 80/20

80% of the time, the bug is in:
- The prompt (the LLM didn't know what to do)
- The data (the LLM didn't have what it needed)
- The tool (the tool returned wrong data)

20% of the time, the bug is in:
- The model (the model can't do the task)
- The infra (the API is slow, the network is flaky)

Look at the 80% first. The 80% is the most likely.

## The mental model

When reading a trace, use this mental model:

```
Input → LLM → Tools → Output
   ↓       ↓      ↓      ↓
 Trace  Prompt  Data  Result
```

For each "↓" arrow, ask: is the input/output correct? If not,
that's where the bug is.

The 4 arrows are the 4 places a bug can live. 80% of the time,
the bug is in the prompt or the data. 15% of the time, it's in
the tool. 5% of the time, it's in the model.

## The lesson

7 sections. 6 patterns. 1 mental model.

The trace is the source of truth. The truth is the only way
to know why. The why is the only way to fix.

The agent that has a good trace is debuggable. The agent that
doesn't is a black box. The choice is yours.

The agent era is here. The trace is the foundation. Build it
well.
