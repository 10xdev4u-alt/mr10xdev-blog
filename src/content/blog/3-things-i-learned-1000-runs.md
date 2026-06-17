---
title: "The 3 things I learned from running 1000 agent runs"
description: "3 things I learned from running 1000 agent runs. The surprises, the lessons, the truth. The hard truths from the trenches."
date: 2025-12-18
tags: ["lessons", "agents", "production"]
---

3 things I learned from running 1000 agent runs. The
surprises, the lessons, the truth. The hard truths from
the trenches.

## Thing 1: The cost adds up fast

The first run is $0.01. The 10th is $0.10. The 100th is
$1. The 1000th is $10. The cost is exponential.

**What I expected:** "The cost will be small. The LLM is
cheap."

**What it was:** "The cost is $10 per 1000 runs. The
agent runs 100 times a day. The cost is $1000 per year."

The cost adds up fast. The cost is the constraint. The
constraint is the design.

**The lesson:** budget for the cost. The cost is the
constraint.

## Thing 2: The latency adds up faster

The first run is 1s. The 10th is 1s. The 100th is 1s.
The latency is consistent. The user is happy.

But: the agent retries on failure. The 1s becomes 3s. The
3s becomes 10s. The latency adds up.

**What I expected:** "The latency will be 1s. The agent
is fast."

**What it was:** "The latency is 1s for 90% of runs. The
10% that retry are 3s. The 1% that loop are 10s. The p99
is 10s."

The latency adds up. The p99 is the truth. The truth is
the design.

**The lesson:** measure p99. The p99 is the user
experience.

## Thing 3: The failure modes are repetitive

The 1st failure is a rate limit. The 2nd is a rate limit.
The 100th is a rate limit. The failures are the same.

**What I expected:** "The failures will be diverse. The
agent will fail in many ways."

**What it was:** "The failures are repetitive. 80% are
rate limits. 10% are timeouts. 10% are hallucinations."

The failure modes are repetitive. The repetition is the
pattern. The pattern is the design.

**The lesson:** optimize for the common case. The common
case is 80% of the value.

## The 3 together

The 3 are the truth. The truth is the design. The design
is the discipline.

| Thing | What it taught me |
|---|---|
| Cost adds up fast | Budget for the cost |
| Latency adds up faster | Measure p99 |
| Failure modes are repetitive | Optimize for the common case |

The lessons are the hard truths. The hard truths are the
lessons. The lessons are the discipline.

## The 80/20

80% of the value comes from:
- Cost adds up fast (budget for the cost)
- Failure modes are repetitive (optimize for the common)

20% comes from:
- Latency adds up faster (measure p99)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

3 things. 1 production. 1 lesson: measure the truth.

The agent builder that measures the truth is the agent
builder that succeeds. The agent builder that doesn't is
the agent builder that fails.

The agent era is here. The truth is the design. The
design is the discipline. The discipline is the success.
