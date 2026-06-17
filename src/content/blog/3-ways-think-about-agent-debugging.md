---
title: "The 3 ways to think about agent debugging (in production)"
description: "3 ways to think about debugging: traces, logs, replays. Each is a different debugging tool. The framework, the examples, the lesson."
date: 2025-12-03
tags: ["debugging", "agents", "production"]
---

3 ways to think about debugging: traces, logs, replays.
Each is a different debugging tool. The framework, the
examples, the lesson.

## Tool 1: Traces

The trace is the timeline. The trace is the events. The
trace is the truth.

**Examples:**
- `run_start` at 10:00:00
- `step_start` at 10:00:01
- `tool_call_start` at 10:00:02
- `tool_call_end` at 10:00:03
- `run_end` at 10:00:04

**When to use:** the user wants to know the timeline. The
user wants to know what happened. The user is debugging.

**Pros:**
- Detailed (the trace is detailed)
- Timeline (the trace is a timeline)
- Visual (the trace can be visualized)

**Cons:**
- Storage (the trace is large)
- Privacy (the trace can include PII)
- Complex (the trace is hard to analyze)

## Tool 2: Logs

The logs are the messages. The logs are the output. The
logs are the truth.

**Examples:**
- `[2026-06-17T10:00:00Z] agent=triage run=r1 step=1 input=...`
- `[2026-06-17T10:00:01Z] agent=triage run=r1 step=1 tool=...`
- `[2026-06-17T10:00:02Z] agent=triage run=r1 step=1 output=...`

**When to use:** the user wants to know the messages. The
user wants to know the output. The user is debugging.

**Pros:**
- Searchable (the logs are searchable)
- Standard (the logs are universal)
- Cheap (the logs are cheap)

**Cons:**
- Verbose (the logs are verbose)
- Unstructured (the logs can be unstructured)
- Limited (the logs are limited to messages)

## Tool 3: Replays

The replay is the redo. The replay is the rerun. The
replay is the truth.

**Examples:**
- "Replay run r1 with the same input"
- "Replay run r1 with a different model"
- "Replay run r1 with a different prompt"

**When to use:** the user wants to reproduce. The user
wants to test a fix. The user is debugging.

**Pros:**
- Reproducible (the replay is reproducible)
- Testable (the replay is testable)
- Comparable (the replay is comparable)

**Cons:**
- Storage (the replay needs the input to be saved)
- Time (the replay takes time)
- Cost (the replay costs money)

## The 3 together

The 3 are the tools. The tools are the debugging. The
debugging is the fix.

| Tool | What it shows | Best for |
|---|---|---|
| Traces | The timeline | What happened |
| Logs | The messages | What was said |
| Replays | The redo | Can I reproduce |

The tool that matches the need is the right tool.

## The 80/20

80% of the value comes from:
- Logs (the user can search)
- Traces (the user can see)

20% comes from:
- Replays (the user can reproduce)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each bug, ask:
- Is the bug a timeline? (traces)
- Is the bug a message? (logs)
- Is the bug a reproduction? (replays)

The right answer is the right tool at the right cost.

## The lesson

3 tools. 1 debugging. 1 lesson: use all 3.

The debugging that uses all 3 is the complete debugging.
The debugging that uses 1 is the partial debugging. The
complete debugging is fixed. The partial debugging is not.

The agent era is here. The debugging is the design. The
design is the choice. The choice is the discipline.
