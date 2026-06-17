---
title: "The 4 ways to think about agent metrics (in production)"
description: "4 ways to think about metrics: usage, quality, performance, cost. Each is a different lens on the agent's behavior. The framework, the examples, the lesson."
date: 2026-02-05
tags: ["metrics", "agents", "production"]
---

4 ways to think about metrics: usage, quality, performance,
cost. Each is a different lens on the agent's behavior. The
framework, the examples, the lesson.

## Metric 1: Usage

How often is the agent used? How many runs? How many users?
How many events?

**Examples:**
- `agent_runs_total{agent="triage"} 1234`
- `agent_users_total{agent="triage"} 56`
- `agent_events_total{event="issues.opened"} 789`

**When to use:** the user wants to know adoption. The user
wants to know reach. The user wants to know growth.

**The math:**
- 1000 runs/day = 30K runs/month
- 56 users = 5% of the 1000 user base

**The cost:** low. Counters are cheap.

## Metric 2: Quality

How often is the agent correct? How often does it fail? How
often does the user override?

**Examples:**
- `agent_success_rate{agent="triage"} 0.95`
- `agent_user_override_rate{agent="triage"} 0.05`
- `agent_human_review_rate{agent="release"} 0.10`

**When to use:** the user wants to know trust. The user
wants to know accuracy. The user wants to know reliability.

**The math:**
- 95% success = 5% failure
- 5% override = 5% user intervention

**The cost:** medium. Need to track outcomes.

## Metric 3: Performance

How fast is the agent? How much latency? How much
throughput?

**Examples:**
- `agent_run_duration_seconds{quantile="0.5"} 1.2`
- `agent_run_duration_seconds{quantile="0.95"} 3.5`
- `agent_run_duration_seconds{quantile="0.99"} 10.0`

**When to use:** the user wants to know speed. The user
wants to know latency. The user wants to know throughput.

**The math:**
- p50 = 1.2s (typical)
- p95 = 3.5s (most cases)
- p99 = 10s (worst case)

**The cost:** low. Histograms are cheap.

## Metric 4: Cost

How much does the agent cost? How much per run? How much per
user?

**Examples:**
- `agent_run_cost_usd{agent="triage"} 0.06`
- `agent_total_cost_usd{agent="triage"} 100`
- `agent_cost_per_user_usd{agent="triage"} 1.78`

**When to use:** the user wants to know economics. The user
wants to know margin. The user wants to know scalability.

**The math:**
- $0.06 per run
- 1000 runs/day = $60/day
- 56 users = $1.07 per user per day

**The cost:** low. Counters are cheap.

## The 4 metrics together

The 4 are the metrics. The metrics are the visibility. The
visibility is the value.

| Metric | What it answers | Cost | Importance |
|---|---|---|---|
| Usage | How often? | Low | Growth |
| Quality | How accurate? | Medium | Trust |
| Performance | How fast? | Low | UX |
| Cost | How much? | Low | Economics |

The agent that has all 4 is the visible agent. The agent
that has 1 is the invisible agent. The visible agent is
improved. The invisible agent is not.

## The 80/20

80% of the value comes from:
- Quality (the user trusts the agent)
- Cost (the agent is economic)

20% comes from:
- Usage (the agent is adopted)
- Performance (the agent is fast)

Focus on the 80% first. Add the 20% as you grow.

## The dashboard

A good dashboard has:
- 3 usage metrics (runs, users, events)
- 3 quality metrics (success, override, review)
- 3 performance metrics (p50, p95, p99)
- 3 cost metrics (per-run, total, per-user)

The dashboard is 12 metrics. The user sees it in 30
seconds. The user knows the agent is healthy.

## The lesson

4 metrics. 1 visibility. 1 lesson: track all 4.

The agent that tracks all 4 is the visible agent. The agent
that tracks 1 is the invisible agent. The visible agent is
improved. The invisible agent is not.

The agent era is here. The metrics are the design. The
design is the discipline. The discipline is the visibility.
