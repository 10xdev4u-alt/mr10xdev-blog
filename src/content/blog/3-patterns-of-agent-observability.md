---
title: "The 3 patterns of agent observability"
description: "3 patterns of agent observability: logs, metrics, traces. Each tells a different story about what the agent is doing. The framework, the examples, the tradeoffs."
date: 2026-02-22
tags: ["observability", "agents", "production"]
---

3 patterns of agent observability: logs, metrics, traces. Each
tells a different story about what the agent is doing. The
framework, the examples, the tradeoffs.

## Pattern 1: Logs

The agent writes log lines. The log lines are timestamped,
structured, queryable.

**Examples:**
- `[2026-06-17T10:00:00Z] agent=my-agent run=r1 step=1 tool=github.add_labels input={"issue":42,"labels":["bug"]}`
- `[2026-06-17T10:00:01Z] agent=my-agent run=r1 step=1 tool=github.add_labels output={"ok":true}`

**When to use:** the user wants to know what happened. The
user wants to debug. The user wants to audit.

**The storage:** a file, a database, a log aggregator
(Datadog, Splunk, ELK).

**The query:** `grep "agent=my-agent" | head -100` or a
real query language (Lucene, SQL).

**The cost:** every log line is a write. The cost scales
with verbosity. The verbosity is the value.

## Pattern 2: Metrics

The agent exposes metrics. The metrics are counters,
gauges, histograms.

**Examples:**
- `agent_runs_total{agent="my-agent",status="ok"} 42`
- `agent_run_duration_seconds{agent="my-agent"} 0.5 0.7 0.9`
- `agent_tool_calls_total{tool="github.add_labels"} 100`

**When to use:** the user wants to know how often. The user
wants to know how fast. The user wants to know the
distribution.

**The storage:** a time-series database (Prometheus,
InfluxDB, Datadog).

**The query:** `rate(agent_runs_total[5m])` or a real
metrics query (PromQL).

**The cost:** every metric is a sample. The cost scales
with cardinality. The cardinality is the value.

## Pattern 3: Traces

The agent exposes traces. The traces are spans. The spans
are nested. The spans are linked.

**Examples:**
- `span(name="agent.run", parent=root, duration=2.3s, attributes={agent: "my-agent", run: "r1"})`
- `span(name="tool.github.add_labels", parent=agent.run, duration=0.1s, attributes={labels: ["bug"]})`
- `span(name="llm.call", parent=agent.run, duration=1.9s, attributes={model: "claude-sonnet", input_tokens: 1000})`

**When to use:** the user wants to know why. The user wants
to know the call graph. The user wants to know the latency
breakdown.

**The storage:** a tracing backend (Jaeger, Zipkin, Tempo,
Datadog APM).

**The query:** `trace.find(span.name="tool.github.add_labels" duration>1s)` or a real trace query.

**The cost:** every span is a record. The cost scales with
depth. The depth is the value.

## The 3 together

The 3 are the observability. The observability is the
debug-ability. The debug-ability is the value.

| Pattern | What it answers | Storage | Cost |
|---|---|---|---|
| Logs | What happened? | Files, databases | Per log line |
| Metrics | How often? How fast? | Time-series DB | Per metric |
| Traces | Why? Where's the latency? | Tracing backend | Per span |

The agent that has all 3 is observable. The agent that has
1 is partially observable. The agent that has 0 is
invisible.

## The 80/20

80% of the value comes from:
- Logs (the user can debug)
- Metrics (the user can alert)

20% comes from:
- Traces (the user can analyze)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Do I need to know what happened? (logs)
- Do I need to know how often? (metrics)
- Do I need to know why? (traces)

The right answer is the right cost at the right insight.

## The lesson

3 patterns. 1 observability. 1 lesson: pick the right
combination.

The agent that picks the right combination is observable
at the right cost. The agent that picks the wrong
combination is unobservable or unaffordable.

The agent era is here. The observability is the design. The
design is the choice. The choice is the discipline.
