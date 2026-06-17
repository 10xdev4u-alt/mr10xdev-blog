---
title: "The 4 ways to think about agent pricing (in production)"
description: "4 ways to think about pricing: per-run, per-month, per-seat, per-outcome. Each is a different model with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-30
tags: ["pricing", "agents", "business"]
---

4 ways to think about pricing: per-run, per-month, per-seat,
per-outcome. Each is a different model with different
tradeoffs. The framework, the examples, the lesson.

## Model 1: Per-run

The user pays for each agent run. The user pays for each
invocation.

**Examples:**
- $0.10 per agent run
- $0.50 per agent run
- $1.00 per agent run

**When to use:** the value is per-run. The user can predict
the cost. The cost is small.

**Pros:**
- Fair (the user pays for what they use)
- Aligned (the vendor is incentivized to make runs cheap)
- Predictable (the user knows the cost per run)

**Cons:**
- Volatile (revenue scales with usage)
- Hard to budget (the user doesn't know usage)
- Micropayments (small payments have overhead)

## Model 2: Per-month

The user pays a fixed fee per month. The user gets
unlimited runs.

**Examples:**
- $9/month for unlimited runs
- $29/month for unlimited runs
- $99/month for unlimited runs

**When to use:** the user has high usage. The vendor wants
predictable revenue.

**Pros:**
- Predictable (the user knows the cost)
- Aligned (the vendor wants the user to use more)
- Simple (no per-run accounting)

**Cons:**
- Unfair (the light user pays the same as the heavy user)
- Misaligned (the vendor wants the user to use less)
- Sticky (the user can't downsize easily)

## Model 3: Per-seat

The user pays per user / per team member. The agent is
shared across the team.

**Examples:**
- $5/seat/month
- $15/seat/month
- $50/seat/month

**When to use:** the agent is for teams. The value is
collaborative. The team has a budget.

**Pros:**
- Predictable (the user knows the cost per seat)
- Aligned (the vendor wants more seats)
- Sticky (the team is the customer)

**Cons:**
- Hard to start (the user needs a team)
- Misaligned (the vendor wants more seats, not more usage)
- Unfair (the inactive seat pays the same)

## Model 4: Per-outcome

The user pays per successful outcome. The user pays for
the value, not the work.

**Examples:**
- $0.50 per issue triaged
- $1.00 per PR reviewed
- $5.00 per release drafted

**When to use:** the value is the outcome. The user can
measure the outcome. The outcome is the truth.

**Pros:**
- Aligned (the user pays for the value)
- Fair (the user pays for what they get)
- Justified (the cost is the value)

**Cons:**
- Hard to measure (the outcome is fuzzy)
- Hard to budget (the user doesn't know the count)
- Adversarial (the vendor wants to count more)

## The 4 models together

The 4 are the pricing. The pricing is the revenue. The
revenue is the business.

| Model | Predictability | Fairness | Best for |
|---|---|---|---|
| Per-run | Low | High | Variable usage |
| Per-month | High | Low | Heavy usage |
| Per-seat | High | Low | Teams |
| Per-outcome | Low | High | Clear value |

The model that matches the use case is the right model.

## The 80/20

80% of the value comes from:
- Per-month (the user knows the cost)
- Per-seat (the team is the customer)

20% comes from:
- Per-run (the light user is fair)
- Per-outcome (the value is the truth)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the usage variable? (per-run)
- Is the usage heavy? (per-month)
- Is the user a team? (per-seat)
- Is the value clear? (per-outcome)

The right answer is the right model at the right scale.

## The lesson

4 models. 1 pricing. 1 lesson: pick the right one.

The model that matches the use case is the right model.
The model that doesn't match is the wrong model.

The agent era is here. The pricing is the design. The
design is the choice. The choice is the discipline.
