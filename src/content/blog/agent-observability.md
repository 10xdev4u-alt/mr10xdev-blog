---
title: "The agent observability problem"
description: "When an agent runs in production, what do you wish you could see? The trace, the cost, the tool calls, the failures. Why observability is the next big agent primitive and what's still missing."
date: 2026-05-24
tags: ["ai", "agents", "observability"]
---

When an agent runs in production, you need to answer questions like:
- What did the agent do?
- Why did it do that?
- How much did it cost?
- Where did it fail?
- What would have happened with a different prompt?

The state of the art in agent observability is fragmented. Let me
survey the problem and the partial solutions.

## What you want to see

For every agent run, you want:
- **The trigger.** What event caused the run?
- **The input.** What was the system prompt + user input?
- **Every LLM call.** The full conversation, including all
  intermediate steps.
- **Every tool call.** The tool name, input, output, latency.
- **The final output.** What did the agent produce?
- **The cost.** Tokens used, USD spent.
- **The duration.** Wall-clock and per-step.
- **The errors.** What failed and why.
- **The retries.** What was retried and when.
- **The cache hits.** What came from cache.

The data is rich. The question is how to surface it.

## The state of the art

### 1. Langfuse

The best open-source option. LLM-specific tracing. Built for
production. Langfuse scores well on:
- Capture (records every call)
- Storage (Postgres + S3)
- Query (filter by run, model, time, user)
- Cost tracking (per-model pricing)
- Latency analysis (p50, p99)

Langfuse is what aether-proxy uses. It's the right tool for the
job.

### 2. LangSmith

LangChain's tracing. Vendor-locked to LangChain. If you're using
LangChain, this is fine. If not, look at Langfuse.

### 3. Helicone

Open-source LLM observability. Lighter than Langfuse. Good for
smaller projects.

### 4. Arize Phoenix

ML-focused observability. Built for eval, drift detection, and
embedding analysis. Overkill for chat agents.

### 5. Honeycomb / Datadog

General-purpose observability. Can be used for LLM traces but the
UI is generic.

## What's missing

### 1. Agent-specific UIs

None of the above have a UI built for agents. They have generic
trace UIs. The agent-specific question is:
- "What did this agent do?"
- "Why did it choose that tool?"
- "What would it have done with a different tool?"

The answer requires understanding the agent's loop. The trace UI
shows the calls but not the why.

### 2. Cost forecasting

"How much will this agent cost at scale?" requires running the
agent many times and extrapolating. No tool does this.

### 3. Prompt regression testing

"If I change the system prompt, will the agent get better or
worse?" requires a test suite of inputs and expected outputs. No
tool does this out of the box.

### 4. Diff views

"What did this run do differently from the last run?" requires
diffing traces. Generic UIs don't do this.

### 5. Self-debugging

"When the agent fails, can it debug itself?" requires the agent
to have access to its own traces. Some frameworks (Husk) expose
this via the ObserverBus. Most don't.

## How Husk handles it

Husk's `ObserverBus` lets you subscribe to runtime events:

```ts
import { ObserverBus, runAgent } from '@princetheprogrammerbtw/husk';

const bus = new ObserverBus();
bus.add((event) => {
  // Send to Datadog, Honeycomb, Langfuse, your own DB, ...
  myLoggingPipeline.send(event);
});

const result = await runAgent(rc, { observers: bus });
```

The events fired:
- `run_start` — when the agent starts
- `step_start` — before each LLM call
- `step_end` — after each LLM call (with usage and cost)
- `tool_call_start` — before each tool call
- `tool_call_end` — after each tool call (with result)
- `run_end` — when the agent finishes (with full result)

You write the sink. We provide the events. Composable.

## The future

The next 2 years will see:
- **Agent-specific UIs.** Built around the agent's loop, not
  around traces.
- **Cost forecasting.** "Run this agent 1000 times, here's the
  expected cost."
- **Prompt regression testing.** Built into the agent framework.
- **Self-debugging agents.** Agents that read their own traces
  and try to fix their own failures.
- **Multi-agent observability.** Trace multiple agents in the
  same view.

The agent observability market is wide open. Langfuse is the
leader today. Whoever builds the agent-specific UI will win
tomorrow.

## What to do

- **Use Langfuse** (or equivalent) for production observability.
  Don't roll your own.
- **Subscribe to your framework's events** (Husk's ObserverBus,
  LangChain's callbacks, etc.). The framework knows what's
  happening; your observability tool doesn't.
- **Track cost per run.** Not just tokens. USD.
- **Track latency per step.** Not just total.
- **Build a dashboard.** The agent's behavior is a product.
  Treat it like one.

The agent observability problem is unsolved. The pieces exist.
The integration is the opportunity.
