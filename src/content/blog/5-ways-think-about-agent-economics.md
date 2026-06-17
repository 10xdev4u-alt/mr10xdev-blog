---
title: "The 5 ways to think about an agent's economics"
description: "5 ways to think about an agent's economics: cost, revenue, margin, scale, moat. The math, the framework, the examples. The economics is the business."
date: 2026-02-20
tags: ["agents", "economics", "business"]
---

5 ways to think about an agent's economics: cost, revenue,
margin, scale, moat. The math, the framework, the examples.
The economics is the business.

## Cost

The cost is what you pay to run the agent. The cost is per
run. The cost is the variable cost.

**Components:**
- LLM tokens (input + output)
- Tool API calls (GitHub, Slack, etc.)
- Infrastructure (compute, storage, network)

**Example:**
- 1 agent run = 10K input tokens + 2K output tokens
- Anthropic Claude Sonnet: $3/M input + $15/M output
- 1 run cost = 10K * $3/M + 2K * $15/M = $0.03 + $0.03 = $0.06

**The math:**
- 100 runs/day * $0.06 = $6/day
- 3000 runs/month * $0.06 = $180/month

The cost is the variable. The variable scales with usage.

## Revenue

The revenue is what the user pays. The revenue is per run,
per month, or per seat.

**Pricing models:**
- Per run: $0.10 per agent invocation
- Per month: $99/month for unlimited runs
- Per seat: $29/month per user
- Per outcome: $1 per successful triage

**Example:**
- 100 runs/day * $0.10 = $10/day
- 3000 runs/month * $0.10 = $300/month

The revenue is the income. The income scales with usage.

## Margin

The margin is the difference between revenue and cost. The
margin is the profit.

**Example:**
- Revenue: $300/month
- Cost: $180/month
- Margin: $120/month (40%)

**The math:**
- 40% margin = $120/month
- 60% margin = $180/month
- 80% margin = $240/month

The margin is the profit. The profit is the value. The
value is the business.

## Scale

The scale is the ability to grow without growing costs. The
scale is the leverage.

**Levers:**
- Cache the LLM responses (100x cheaper)
- Batch the tool calls (10x cheaper)
- Use a smaller model (3x cheaper)

**Example:**
- 100 runs/day * $0.06 = $6/day
- 1000 runs/day * $0.06 = $60/day (no scale)
- 1000 runs/day * $0.01 (with caching) = $10/day (10x scale)

The scale is the leverage. The leverage is the future. The
future is the moat.

## Moat

The moat is what stops competitors. The moat is the data,
the network, the brand, the lock-in.

**Moats for agents:**
- **Data:** the agent has seen more runs than the
  competitor. The agent is better.
- **Network:** the agent integrates with more tools. The
  agent is more useful.
- **Brand:** the agent is the de facto standard. The agent
  is the default.
- **Lock-in:** the agent's memory is in the user's repo. The
  user can't switch.

The moat is the long-term. The long-term is the business.
The business is the future.

## The 5 together

The 5 are the economics. The economics is the business.

| Lever | What it measures | How to improve |
|---|---|---|
| Cost | Variable cost per run | Cache, batch, smaller model |
| Revenue | Income per run | Price, upsell, more users |
| Margin | Profit margin | Reduce cost, increase price |
| Scale | Cost per run as usage grows | Cache, batch, leverage |
| Moat | What stops competitors | Data, network, brand, lock-in |

The agent that optimizes all 5 is the agent that scales.
The agent that optimizes 1 is the agent that plateaus.

## The 80/20

80% of the value comes from:
- Cost (the variable is right)
- Revenue (the income is right)

20% comes from:
- Margin (the profit is right)
- Scale (the growth is right)
- Moat (the future is right)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

5 levers. 1 economics. 1 lesson: optimize all 5.

The agent that optimizes all 5 is the agent that scales.
The agent that optimizes 1 is the agent that plateaus.

The agent era is here. The economics is the design. The
design is the discipline. The discipline is the future.
