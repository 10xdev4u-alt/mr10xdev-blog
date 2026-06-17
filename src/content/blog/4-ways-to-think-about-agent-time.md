---
title: "The 4 ways to think about agent time"
description: "4 ways to think about agent time: latency, throughput, cost, durability. Each has different metrics, different optimization strategies, different tradeoffs. The framework."
date: 2026-03-04
tags: ["agents", "performance", "time"]
---

4 ways to think about agent time: latency, throughput, cost,
durability. Each has different metrics, different optimization
strategies, different tradeoffs. The framework.

## Way 1: Latency

The time from trigger to response. The user waits for the
agent to finish.

**Metric:** p50, p95, p99 latency in seconds.

**Typical values:**
- Simple agent: 2-5 seconds p95
- Medium agent: 5-15 seconds p95
- Complex agent: 15-60 seconds p95

**Optimization:**
- Use a faster model (Haiku instead of Sonnet: 3-5x faster)
- Use streaming (the user sees the first token in <500ms)
- Parallelize tool calls (when possible)
- Cache the system prompt (saves the prefix cost)
- Use prompt caching (cache repeated prefixes)

**The tradeoff:** faster models are usually less accurate.
Streaming is a UX win but doesn't reduce total time. The
tradeoff is between speed and quality.

## Way 2: Throughput

The number of runs per unit time. The system handles N
requests per minute.

**Metric:** runs per minute, runs per hour, concurrent runs.

**Typical values:**
- Single agent: 1-10 runs per minute
- Scaled: 100-1000 runs per minute
- Highly scaled: 10K+ runs per minute

**Optimization:**
- Use serverless (auto-scales)
- Use queues (batch the work)
- Parallelize the orchestration
- Cache the LLM responses
- Use a smaller model for high-volume

**The tradeoff:** higher throughput usually requires more
infrastructure. The cost scales with the volume. The
tradeoff is between scale and cost.

## Way 3: Cost per run

The cost of a single run. Already covered in the "3 ways to
think about cost" post.

**Metric:** cost in USD per run, per user per month, per
outcome.

**Optimization:**
- Use a cheaper model
- Cache the system prompt
- Truncate the inputs
- Use a cascade

**The tradeoff:** cheaper models are usually less accurate.
The tradeoff is between cost and quality.

## Way 4: Durability

The time the agent can run before failing. The agent
survives long enough to do the work.

**Metric:** mean time between failures (MTBF), uptime %, time
to recovery (TTR).

**Typical values:**
- Single agent: 99% uptime, 1 hour MTBF
- Production: 99.9% uptime, 8 hours MTBF
- Mission-critical: 99.99% uptime, 24 hours MTBF

**Optimization:**
- Use durable infrastructure (daemon, not cron)
- Add retries with backoff (handles transient failures)
- Add circuit breakers (handles persistent failures)
- Add health checks (detects failures)
- Add observability (remediates failures faster)

**The tradeoff:** higher durability usually requires more
infrastructure. The cost scales with the SLA. The tradeoff
is between durability and cost.

## The 4 together

The 4 are different views of the same time. The agent that's
fast, cheap, and reliable on all 4 is the agent that's
sustainable.

| View | Metric | Tradeoff |
|---|---|---|
| Latency | seconds | Speed vs quality |
| Throughput | runs/min | Scale vs cost |
| Cost | USD | Cost vs quality |
| Durability | uptime | Durability vs cost |

The agent that optimizes all 4 is the agent that's
production-ready. The agent that optimizes 1 is the agent
that's a demo.

## The 80/20

80% of the time, the bottleneck is in:
- The LLM calls (latency, cost)
- The infrastructure (throughput, durability)

20% is in:
- The tool calls (latency)
- The memory (cost, latency)

For the 80%, use a faster model + better infrastructure. For
the 20%, optimize the tools and the memory.

## The test

The agent is fast, cheap, and reliable if:
- p95 latency < 5 seconds (latency)
- 100+ runs per minute (throughput)
- < $0.05 per run (cost)
- 99.9% uptime (durability)

If any of these is missing, the agent is a demo. Fix the
agent.

## The lesson

4 ways. 1 time. 1 lesson: optimize all 4.

The agent that optimizes latency, throughput, cost, and
durability is the agent that wins. The agent that optimizes
1 is the agent that loses.

The agent era is here. The time is the design. The design
is the discipline. The discipline is the sustainability.
