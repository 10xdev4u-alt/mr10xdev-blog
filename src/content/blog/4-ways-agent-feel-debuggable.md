---
title: "The 4 ways to make an agent feel debuggable"
description: "4 ways to make an agent feel debuggable: logs, traces, replays, snapshots. Each gives a different view into what the agent is doing. The framework, the examples, the lesson."
date: 2026-02-17
tags: ["debugging", "agents", "production"]
---

4 ways to make an agent feel debuggable: logs, traces,
replays, snapshots. Each gives a different view into what the
agent is doing. The framework, the examples, the lesson.

## Way 1: Logs

The agent writes structured logs. The logs are timestamped.
The logs include the inputs, outputs, and decisions.

**Examples:**
```
[2026-06-17T10:00:00Z] agent=triage run=r1 step=1 input="issue=42"
[2026-06-17T10:00:01Z] agent=triage run=r1 step=1 tool=github.add_labels input={"labels":["bug"]}
[2026-06-17T10:00:02Z] agent=triage run=r1 step=1 tool=github.add_labels output={"ok":true}
[2026-06-17T10:00:03Z] agent=triage run=r1 step=2 output="labeled as bug"
```

**When to use:** the user wants to know what happened. The
user wants to search. The user wants to grep.

**The storage:** a file, a database, a log aggregator.

**The query:** `grep "agent=triage" | head -100`.

## Way 2: Traces

The agent emits spans. The spans are nested. The spans are
linked.

**Examples:**
- `span(name="agent.run", duration=2.3s)`
- `span(name="tool.github.add_labels", duration=0.1s, parent=agent.run)`
- `span(name="llm.call", duration=1.9s, parent=agent.run, attributes={input_tokens: 1000})`

**When to use:** the user wants to know why. The user wants
to know the call graph. The user wants to know the latency
breakdown.

**The storage:** a tracing backend (Jaeger, Zipkin, Tempo).

**The query:** `trace.find(span.name="tool.github.add_labels" duration>1s)`.

## Way 3: Replays

The agent saves the full input. The user can replay the
input. The agent runs the same input. The user sees the same
output.

**Examples:**
- Save: `{event: "...", memory: "...", tools: [...]}` to a file
- Replay: read the file, run the agent, see the output

**When to use:** the user wants to reproduce a bug. The user
wants to test a fix. The user wants to compare runs.

**The storage:** a file (JSONL), a database.

**The query:** `replay.load("r1")`.

## Way 4: Snapshots

The agent saves the full state at each step. The user can
inspect the state. The user can roll back to a snapshot.

**Examples:**
- Step 1: `{messages: [...], memory: {...}, tools: [...]}`
- Step 2: `{messages: [...], memory: {...}, tools: [...]}`
- Step 3: `{messages: [...], memory: {...}, tools: [...]}`

**When to use:** the user wants to inspect the state. The
user wants to roll back. The user wants to fork.

**The storage:** a file, a database.

**The query:** `snapshot.load("r1", step=2)`.

## The 4 together

The 4 are the debuggability. The debuggability is the
trust. The trust is the value.

| Way | What it answers | Storage | Cost |
|---|---|---|---|
| Logs | What happened? | Files | Per log line |
| Traces | Why? Where? | Tracing backend | Per span |
| Replays | Can I reproduce? | Files | Per run |
| Snapshots | Can I inspect? | Files | Per step |

The agent that has all 4 is the agent that's debuggable. The
agent that has 1 is the agent that frustrates the developer.

## The 80/20

80% of the value comes from:
- Logs (the user can search)
- Replays (the user can reproduce)

20% comes from:
- Traces (the user can analyze)
- Snapshots (the user can inspect)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

4 ways. 1 debuggability. 1 lesson: invest in the small
touches.

The agent that invests in the small touches is the
debuggable agent. The agent that doesn't is the mystery
agent. The debuggable agent is fixed. The mystery agent is
not.

The agent era is here. The debuggability is the design. The
design is the discipline. The discipline is the trust.
