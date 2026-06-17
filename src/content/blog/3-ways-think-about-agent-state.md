---
title: "The 3 ways to think about agent state (in production)"
description: "3 ways to think about state: stateless, in-memory, persistent. Each is a different state model with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-13
tags: ["state", "agents", "production"]
---

3 ways to think about state: stateless, in-memory,
persistent. Each is a different state model with different
tradeoffs. The framework, the examples, the lesson.

## State 1: Stateless

The agent has no state. The agent doesn't remember. The
agent is a function: input → output.

**Examples:**
- "Given this issue, label it" — no state
- "Given this PR, review it" — no state
- "Given this commit, summarize it" — no state

**When to use:** the task is one-shot. The user doesn't
need persistence. The agent is fast.

**Pros:**
- Simple (no state to manage)
- Fast (no state to read/write)
- Reliable (no state to corrupt)

**Cons:**
- Limited (no memory between runs)
- Repetitive (the user has to repeat context)
- Cold (the agent doesn't know the user)

## State 2: In-memory

The agent has state in memory. The agent remembers
during the run. The agent forgets after.

**Examples:**
- "Track the conversation in this session" — in-memory
- "Remember the user's last question" — in-memory
- "Build a plan step by step" — in-memory

**When to use:** the task is multi-step. The user needs
context. The agent is in a session.

**Pros:**
- Stateful (the agent can build context)
- Fast (the agent reads from RAM)
- Simple (no persistence to manage)

**Cons:**
- Volatile (the state is lost on restart)
- Limited (the state doesn't survive)
- Memory-bound (the state is bounded by RAM)

## State 3: Persistent

The agent has state in storage. The agent remembers
across runs. The agent is durable.

**Examples:**
- "Remember the user's preferences" — persistent
- "Track the agent's history" — persistent
- "Build a knowledge base" — persistent

**When to use:** the agent needs to remember. The user
comes back. The agent is long-lived.

**Pros:**
- Durable (the state survives restart)
- Long-lived (the agent can build over time)
- Personalized (the agent can know the user)

**Cons:**
- Complex (the state needs to be managed)
- Slow (the state needs to be read/written)
- Cost (the state needs storage)

## The 3 together

The 3 are the state. The state is the memory. The memory
is the value.

| State | Lifespan | Cost | Best for |
|---|---|---|---|
| Stateless | None | None | One-shot |
| In-memory | Run | Low | Sessions |
| Persistent | Forever | High | Long-lived |

The state that matches the use case is the right state.

## The 80/20

80% of the value comes from:
- In-memory (the agent has context)
- Persistent (the agent has memory)

20% comes from:
- Stateless (the agent is simple)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the task one-shot? (stateless)
- Is the task multi-step? (in-memory)
- Is the agent long-lived? (persistent)

The right answer is the right state at the right cost.

## The lesson

3 states. 1 state model. 1 lesson: pick the right one.

The state that matches the use case is the right state.
The state that doesn't match is the wrong state.

The agent era is here. The state is the design. The
design is the choice. The choice is the discipline.
