---
title: "The 3 ways to think about agent cost"
description: "3 ways to think about cost: per run, per user, per outcome. The math, the tradeoffs, the optimization. The cost is the most underappreciated design constraint."
date: 2026-03-06
tags: ["agents", "cost", "business"]
---

3 ways to think about cost: per run, per user, per outcome.
The math, the tradeoffs, the optimization. The cost is the
most underappreciated design constraint.

## Way 1: Per run

The cost of a single run. The math: input tokens × input price
+ output tokens × output price.

**Example:** A triage agent uses 6K input + 500 output tokens.
At Claude Sonnet 4.5 pricing ($3 input / $15 output per MTok):
- Input: 6K × $3/MTok = $0.018
- Output: 500 × $15/MTok = $0.0075
- **Total: $0.025 per run**

**The tradeoff:** per-run cost is the most precise measure.
But it's hard to predict. Some runs use more tokens than
others.

**When to use:** measuring the cost of a specific agent. The
cost is per-run. The user pays per-run.

**Optimization:**
- Use a cheaper model (Haiku 4: 8-10x cheaper)
- Cache the system prompt (10x cheaper for repeated calls)
- Truncate the event payload (2-3x cheaper for big inputs)
- Use a cascade (cheap first, expensive on hard cases)

## Way 2: Per user

The cost per user per month. The math: per-run cost × runs per
user per month.

**Example:** A triage agent with 100 users, each running 10
times per day, 30 days per month:
- Per run: $0.025
- Per user per day: $0.25
- Per user per month: $7.50
- **Total: 100 × $7.50 = $750/month**

**The tradeoff:** per-user cost is the most actionable
measure. The user can plan for it. The cost is predictable.

**When to use:** pricing the agent. The cost is per-user. The
user pays per-user. The agent is metered.

**Optimization:**
- Reduce runs per user (batch operations, debounce triggers)
- Reduce per-run cost (use cheaper models, cache)
- Reduce active users (deprecate unused features)

## Way 3: Per outcome

The cost per successful outcome. The math: total cost / number
of successful outcomes.

**Example:** A triage agent with 1000 runs per month, 80%
accuracy, 800 successful outcomes:
- Total cost: $25/month (1000 × $0.025)
- Successful outcomes: 800
- **Cost per outcome: $0.031**

**The tradeoff:** per-outcome cost is the most meaningful
measure. The cost is the value. The value is the outcome.

**When to use:** measuring the value. The cost is per-value.
The value is the outcome.

**Optimization:**
- Improve accuracy (fewer wasted runs)
- Improve the model (better outcomes on the first try)
- Improve the workflow (fewer steps per outcome)

## The 3 together

The 3 are not exclusive. The 3 are different views of the
same cost.

| View | When to use | What it tells you |
|---|---|---|
| Per run | Engineering | The cost of a single run |
| Per user | Product | The cost of a user per month |
| Per outcome | Business | The cost of a successful outcome |

The agent that's cost-efficient on all 3 is the agent
that's sustainable.

## The 80/20

80% of the cost comes from:
- The LLM tokens (per run)
- The infrastructure (per user)

20% comes from:
- The support (per outcome)

The 80% is the technical cost. The 20% is the human cost.

The 80% is what the engineer optimizes. The 20% is what the
business optimizes.

## The lesson

3 ways. 1 cost. 1 lesson: think about cost in all 3.

The agent that thinks about cost in 3 ways is the agent
that's priced right. The agent that thinks about cost in 1
way is the agent that's surprised by the bill.

The agent era is here. The cost is the design. The design
is the discipline. The discipline is the sustainability.
