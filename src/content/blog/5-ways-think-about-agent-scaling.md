---
title: "The 5 ways to think about agent scaling (in production)"
description: "5 ways to think about scaling: horizontal, vertical, diagonal, elastic, manual. Each is a different scaling strategy. The framework, the examples, the lesson."
date: 2025-12-16
tags: ["scaling", "agents", "production"]
---

5 ways to think about scaling: horizontal, vertical,
diagonal, elastic, manual. Each is a different scaling
strategy. The framework, the examples, the lesson.

## Strategy 1: Horizontal

The agent is scaled horizontally. More agents are added.
The agents are the same.

**Examples:**
- 1 agent → 10 agents (10x more capacity)
- 10 agents → 100 agents (10x more capacity)
- 100 agents → 1000 agents (10x more capacity)

**When to use:** the workload is parallel. The agents are
independent. The user wants scale.

**Pros:**
- Simple (the scaling is just add more)
- Standard (the scaling is standard)
- Cheap (the scaling is cheap per agent)

**Cons:**
- Coordination (the agents have to coordinate)
- Cost (the scaling is 10x cost)
- Latency (the scaling is more agents = more network)

## Strategy 2: Vertical

The agent is scaled vertically. The agent is more
powerful. The agent is the same.

**Examples:**
- 1 vCPU → 4 vCPU (4x more capacity)
- 4 GB RAM → 16 GB RAM (4x more capacity)
- 1 GPU → 4 GPU (4x more capacity)

**When to use:** the workload is single. The agent is
bottlenecked. The user wants to scale up.

**Pros:**
- Simple (the scaling is just upgrade)
- Standard (the scaling is standard)
- Fast (the scaling is fast)

**Cons:**
- Cost (the scaling is more cost per agent)
- Limited (the scaling is limited by hardware)
- Coupled (the scaling is tied to the hardware)

## Strategy 3: Diagonal

The agent is scaled diagonally. The agent is more
powerful. The agents are more.

**Examples:**
- 1 agent × 1 vCPU → 10 agents × 4 vCPU (40x more
  capacity)
- The agent is upgraded (vertical)
- The agents are added (horizontal)

**When to use:** the workload is mixed. The agent is
bottlenecked. The user wants both.

**Pros:**
- Powerful (the scaling is the most powerful)
- Flexible (the scaling is flexible)
- Comprehensive (the scaling is comprehensive)

**Cons:**
- Complex (the scaling is complex)
- Cost (the scaling is the most expensive)
- Coupled (the scaling is coupled to both)

## Strategy 4: Elastic

The agent is scaled elastically. The agent scales with
the load. The agent is dynamic.

**Examples:**
- 1 agent at night → 10 agents during the day
- 10 agents on weekdays → 1 agent on weekends
- 100 agents during incidents → 10 agents normally

**When to use:** the workload is variable. The user
wants to save cost. The user is data-driven.

**Pros:**
- Cost (the scaling saves cost)
- Dynamic (the scaling is dynamic)
- Smart (the scaling is smart)

**Cons:**
- Complex (the scaling is complex to set up)
- Risk (the scaling can be wrong)
- Coupled (the scaling is tied to the metrics)

## Strategy 5: Manual

The agent is scaled manually. The user scales. The user
is the trigger.

**Examples:**
- "Add 10 agents when the queue is long"
- "Remove 5 agents when the queue is empty"
- "Restart the agent when the agent is broken"

**When to use:** the workload is predictable. The user
is in control. The user is small.

**Pros:**
- Simple (the scaling is just a button)
- Controlled (the scaling is controlled)
- Standard (the scaling is the standard)

**Cons:**
- Slow (the scaling is slow to respond)
- Cost (the scaling can be wasteful)
- Coupled (the scaling is tied to the user)

## The 5 together

The 5 are the strategies. The strategies are the scaling.
The scaling is the future.

| Strategy | Speed | Cost | Best for |
|---|---|---|---|
| Horizontal | Fast | Linear | Parallel |
| Vertical | Fast | Step | Single |
| Diagonal | Fast | High | Mixed |
| Elastic | Smart | Optimal | Variable |
| Manual | Slow | Variable | Small |

The strategy that matches the need is the right strategy.

## The 80/20

80% of the value comes from:
- Horizontal (the scaling is simple)
- Vertical (the scaling is fast)

20% comes from:
- Diagonal (the scaling is mixed)
- Elastic (the scaling is smart)
- Manual (the scaling is controlled)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the workload parallel? (horizontal)
- Is the workload single? (vertical)
- Is the workload mixed? (diagonal)
- Is the workload variable? (elastic)
- Is the workload predictable? (manual)

The right answer is the right strategy at the right cost.

## The lesson

5 strategies. 1 scaling. 1 lesson: pick the right one.

The strategy that matches the need is the right strategy.
The strategy that doesn't match is the wrong strategy.

The agent era is here. The scaling is the design. The
design is the choice. The choice is the discipline.
