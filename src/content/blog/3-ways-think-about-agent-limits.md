---
title: "The 3 ways to think about agent limits (in production)"
description: "3 ways to think about agent limits: time, cost, scope. Each is a different boundary. The framework, the examples, the lesson."
date: 2026-02-11
tags: ["limits", "agents", "production"]
---

3 ways to think about agent limits: time, cost, scope. Each
is a different boundary. The framework, the examples, the
lesson.

## Limit 1: Time

The agent has a max time to run. The agent stops when the
time is up. The agent's time is bounded.

**Examples:**
- "The triage agent runs for max 60 seconds"
- "The doc agent runs for max 5 minutes"
- "The release agent runs for max 30 minutes"

**The math:**
- 1 run / 60s = 1 run per minute
- 1 run / 5m = 0.2 runs per minute
- 1 run / 30m = 0.033 runs per minute

**The tradeoff:**
- More time = more capability = more cost
- Less time = less capability = less cost
- 60s is a good default for most use cases

## Limit 2: Cost

The agent has a max cost to run. The agent stops when the
cost is up. The agent's cost is bounded.

**Examples:**
- "The triage agent costs max $0.10"
- "The doc agent costs max $1.00"
- "The release agent costs max $5.00"

**The math:**
- 1 run / $0.10 = 10 runs per dollar
- 1 run / $1.00 = 1 run per dollar
- 1 run / $5.00 = 0.2 runs per dollar

**The tradeoff:**
- More cost = more capability = more value
- Less cost = less capability = less value
- $0.10 is a good default for most use cases

## Limit 3: Scope

The agent has a max scope to act. The agent stops when the
scope is up. The agent's scope is bounded.

**Examples:**
- "The triage agent labels max 10 issues"
- "The doc agent updates max 5 files"
- "The release agent creates max 1 PR"

**The math:**
- 1 run / 10 issues = 0.1 issues per run
- 1 run / 5 files = 0.2 files per run
- 1 run / 1 PR = 1 PR per run

**The tradeoff:**
- More scope = more capability = more value
- Less scope = less capability = more predictable
- 10 is a good default for most use cases

## The 3 together

The 3 are the limits. The limits are the safety. The safety
is the trust.

| Limit | What it bounds | Default | Cost |
|---|---|---|---|
| Time | Duration | 60s | Cheap to track |
| Cost | Money | $0.10 | Easy to track |
| Scope | Actions | 10 | Easy to track |

The agent that has all 3 is the safe agent. The agent that
has 1 is the risky agent. The agent that has 0 is the
dangerous agent.

## The 80/20

80% of the value comes from:
- Time (the agent doesn't hang)
- Cost (the user doesn't get a bill shock)

20% comes from:
- Scope (the agent doesn't go wild)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent time-sensitive? (time)
- Is the agent cost-sensitive? (cost)
- Is the agent scope-sensitive? (scope)

The right answer is the right limit at the right value.

## The lesson

3 limits. 1 safety. 1 lesson: use all 3.

The agent that uses all 3 is the safe agent. The agent that
uses 1 is the risky agent. The agent that uses 0 is the
dangerous agent.

The agent era is here. The limits are the design. The
design is the discipline. The discipline is the safety.
