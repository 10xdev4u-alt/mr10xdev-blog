---
title: "The 3 ways to think about agent composition (in production)"
description: "3 ways to think about composition: sequential, parallel, nested. Each is a different composition pattern. The framework, the examples, the lesson."
date: 2025-11-30
tags: ["composition", "agents", "production"]
---

3 ways to think about composition: sequential, parallel,
nested. Each is a different composition pattern. The
framework, the examples, the lesson.

## Pattern 1: Sequential

The agents run one after another. The first agent's
output is the second agent's input. The agents are
chained.

**Examples:**
- The triage agent labels → the assignment agent assigns
- The doc agent drafts → the review agent reviews
- The release agent drafts → the publish agent publishes

**When to use:** the workflow is sequential. The agents
are dependent. The user wants simple.

**Pros:**
- Simple (the composition is simple)
- Testable (each agent is testable)
- Standard (the composition is standard)

**Cons:**
- Slow (the composition is sequential)
- Brittle (one agent can fail the chain)
- Coupled (the agents are tightly coupled)

## Pattern 2: Parallel

The agents run at the same time. The agents are
independent. The outputs are merged.

**Examples:**
- The triage agent + the doc agent + the release agent
  run at the same time
- The 3 agents produce 3 outputs
- The outputs are merged

**When to use:** the workflow is parallel. The agents
are independent. The user wants speed.

**Pros:**
- Fast (the composition is parallel)
- Independent (the agents are independent)
- Scalable (the composition scales)

**Cons:**
- Complex (the composition is complex)
- Cost (the composition is expensive)
- Race conditions (the agents can have race conditions)

## Pattern 3: Nested

The agents are nested. The outer agent calls the inner
agent. The inner agent is a tool.

**Examples:**
- The triage agent calls the doc agent as a tool
- The doc agent calls the release agent as a tool
- The release agent is a tool, not an agent

**When to use:** the workflow is nested. The inner agent
is a sub-task. The user wants composability.

**Pros:**
- Composable (the composition is composable)
- Reusable (the inner agent is reusable)
- Powerful (the composition is powerful)

**Cons:**
- Complex (the composition is complex)
- Latency (the nesting adds latency)
- Debugging (the composition is hard to debug)

## The 3 together

The 3 are the patterns. The patterns are the composition.
The composition is the value.

| Pattern | Speed | Complexity | Best for |
|---|---|---|---|
| Sequential | Slow | Low | Dependent |
| Parallel | Fast | Medium | Independent |
| Nested | Medium | High | Sub-tasks |

The pattern that matches the need is the right pattern.

## The 80/20

80% of the value comes from:
- Sequential (the composition is simple)
- Parallel (the composition is fast)

20% comes from:
- Nested (the composition is composable)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each workflow, ask:
- Is the workflow dependent? (sequential)
- Is the workflow independent? (parallel)
- Is the workflow nested? (nested)

The right answer is the right pattern at the right
complexity.

## The lesson

3 patterns. 1 composition. 1 lesson: pick the right one.

The pattern that matches the need is the right pattern.
The pattern that doesn't match is the wrong pattern.

The agent era is here. The composition is the design.
The design is the choice. The choice is the discipline.
