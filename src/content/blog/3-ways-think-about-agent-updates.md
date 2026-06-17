---
title: "The 3 ways to think about agent updates (in production)"
description: "3 ways to think about updates: rolling, blue-green, canary. Each is a different update strategy. The framework, the examples, the lesson."
date: 2026-01-08
tags: ["updates", "agents", "production"]
---

3 ways to think about updates: rolling, blue-green, canary.
Each is a different update strategy. The framework, the
examples, the lesson.

## Strategy 1: Rolling

The agent is updated one at a time. The agent is updated
incrementally. The agent is updated gradually.

**Examples:**
- 1% of users see the new agent
- 10% of users see the new agent
- 50% of users see the new agent
- 100% of users see the new agent

**When to use:** the user has many users. The user wants
to update gradually. The user wants to monitor.

**Pros:**
- Safe (the user can stop if there's a problem)
- Gradual (the user can monitor each step)
- Standard (the user uses the standard pattern)

**Cons:**
- Slow (the user has to wait for each step)
- Complex (the user has to manage the rollout)
- Inconsistent (the user has two versions running)

## Strategy 2: Blue-green

The agent is updated in a parallel environment. The agent
is switched instantly. The agent is replaced.

**Examples:**
- The new agent runs in parallel
- The traffic is switched to the new agent
- The old agent is kept for rollback

**When to use:** the user wants zero downtime. The user
wants instant rollback. The user has the resources.

**Pros:**
- Safe (the user can rollback instantly)
- Fast (the user can switch in seconds)
- Real (the user runs the new agent in real)

**Cons:**
- Cost (the user runs two versions)
- Complexity (the user has to manage the parallel)
- Data (the user has to sync the data)

## Strategy 3: Canary

The agent is updated to a small subset. The agent is
tested. The agent is then rolled out.

**Examples:**
- 1% of users see the new agent
- The new agent is monitored for 1 hour
- If the new agent is good, roll out to 100%
- If the new agent is bad, rollback

**When to use:** the user is risky. The user wants to
validate. The user has the time.

**Pros:**
- Safe (the canary is a small subset)
- Real (the canary is in the real world)
- Validated (the canary is monitored)

**Cons:**
- Slow (the canary takes time to validate)
- Complex (the canary requires monitoring)
- Inconsistent (the canary is a different version)

## The 3 together

The 3 are the update. The update is the change. The change
is the value.

| Strategy | Speed | Safety | Best for |
|---|---|---|---|
| Rolling | Slow | Medium | Many users |
| Blue-green | Fast | High | Zero downtime |
| Canary | Slow | High | Risky changes |

The strategy that matches the need is the right strategy.

## The 80/20

80% of the value comes from:
- Rolling (the user is gradual)
- Blue-green (the user is safe)

20% comes from:
- Canary (the user is risky)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each update, ask:
- Is the update risky? (canary)
- Is the update critical? (blue-green)
- Is the update standard? (rolling)

The right answer is the right strategy at the right cost.

## The lesson

3 strategies. 1 update. 1 lesson: pick the right one.

The strategy that matches the need is the right strategy.
The strategy that doesn't match is the wrong strategy.

The agent era is here. The update is the design. The
design is the choice. The choice is the discipline.
