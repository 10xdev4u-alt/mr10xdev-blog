---
title: "The 4 ways to make an agent feel alive (in production)"
description: "4 ways to make an agent feel alive: reactive, proactive, learning, growing. The principles that make agents feel like a presence. The line between 'script' and 'agent'."
date: 2026-01-07
tags: ["alive", "agents", "design"]
---

4 ways to make an agent feel alive: reactive, proactive,
learning, growing. The principles that make agents feel
like a presence. The line between "script" and "agent."

## Principle 1: Reactive

The agent responds to events. The agent is on-demand. The
agent is triggered.

**Examples:**
- The agent labels an issue when it's opened
- The agent comments on a PR when it's opened
- The agent posts a status when CI completes

**When to use:** the user wants instant action. The user
is reactive. The user wants the agent to be there.

**Pros:**
- Instant (the agent is on-demand)
- Reactive (the agent responds to events)
- Standard (the agent uses the GitHub event system)

**Cons:**
- Dependent (the agent depends on events)
- Limited (the agent only acts on events)
- Cold (the agent doesn't initiate)

## Principle 2: Proactive

The agent runs on a schedule. The agent initiates. The
agent is the trigger.

**Examples:**
- The agent runs every day to check for stale issues
- The agent runs every week to draft release notes
- The agent runs every month to summarize the project

**When to use:** the user wants regular action. The user
is proactive. The user wants the agent to be there.

**Pros:**
- Proactive (the agent initiates)
- Predictable (the agent runs on a schedule)
- Standard (the agent uses a cron-like system)

**Cons:**
- Wasteful (the agent runs even when not needed)
- Late (the agent might miss the right time)
- Dependent (the agent depends on the schedule)

## Principle 3: Learning

The agent learns from feedback. The agent improves. The
agent grows.

**Examples:**
- The agent remembers the user's preferences
- The agent learns from the user's corrections
- The agent improves over time

**When to use:** the user is engaged. The user gives
feedback. The user wants the agent to grow.

**Pros:**
- Adaptive (the agent improves)
- Personalized (the agent knows the user)
- Growing (the agent gets better)

**Cons:**
- Effort (the user has to give feedback)
- Risk (the agent can learn wrong things)
- Cost (the learning takes compute)

## Principle 4: Growing

The agent's capabilities grow over time. The agent learns
new tools. The agent becomes more useful.

**Examples:**
- The agent adds a new tool when needed
- The agent handles new cases
- The agent becomes a generalist

**When to use:** the user is long-lived. The user has new
needs. The user wants the agent to grow.

**Pros:**
- Valuable (the agent gets more useful)
- Long-lived (the agent stays relevant)
- Generalist (the agent handles many cases)

**Cons:**
- Cost (the agent takes time to grow)
- Complexity (the agent becomes complex)
- Risk (the agent can grow wrong)

## The 4 together

The 4 are the alive. The alive is the presence. The
presence is the value.

| Principle | What it ensures |
|---|---|
| Reactive | The agent is there |
| Proactive | The agent is here |
| Learning | The agent is growing |
| Growing | The agent is becoming |

The agent that has all 4 is the alive agent. The agent
that has 1 is the script. The alive agent is adopted. The
script is not.

## The 80/20

80% of the value comes from:
- Reactive (the agent is on-demand)
- Proactive (the agent is here)

20% comes from:
- Learning (the agent is growing)
- Growing (the agent is becoming)

Focus on the 80% first. Add the 20% as you grow.

## The test

The agent feels alive if:
- A user can trigger it
- It runs on its own
- It learns from feedback
- It grows over time

If any of these fails, the agent feels like a script. Fix
the agent.

## The lesson

4 principles. 1 alive. 1 lesson: invest in all 4.

The agent that invests in all 4 is the alive agent. The
agent that invests in 1 is the script. The alive agent is
adopted. The script is not.

The agent era is here. The alive is the design. The
design is the discipline. The discipline is the value.
