---
title: "The 3 ways to think about agent routing (in production)"
description: "3 ways to think about routing: event-based, content-based, load-based. Each is a different routing strategy. The framework, the examples, the lesson."
date: 2026-01-05
tags: ["routing", "agents", "production"]
---

3 ways to think about routing: event-based, content-based,
load-based. Each is a different routing strategy. The
framework, the examples, the lesson.

## Routing 1: Event-based

The agent is routed based on the event. The event is the
trigger. The event is the truth.

**Examples:**
- `issues.opened` → the triage agent
- `pull_request.opened` → the code review agent
- `schedule.weekly` → the release drafter agent

**When to use:** the agent is specialized. The event is
clear. The routing is simple.

**Pros:**
- Simple (the event is the truth)
- Standard (the routing is in the manifest)
- Tested (the routing is testable)

**Cons:**
- Limited (the event is one dimension)
- Rigid (the routing is hard-coded)
- Coupled (the routing is tied to the event)

## Routing 2: Content-based

The agent is routed based on the content. The content is
the trigger. The content is the truth.

**Examples:**
- "If the issue contains 'crash', route to the bug agent"
- "If the PR is large, route to the senior reviewer"
- "If the comment is from a maintainer, route to the
  expert agent"

**When to use:** the agent is specialized. The content is
the truth. The routing is dynamic.

**Pros:**
- Dynamic (the routing is based on content)
- Smart (the routing is content-aware)
- Flexible (the routing is configurable)

**Cons:**
- Complex (the routing rules are complex)
- Cost (the routing takes compute)
- Risk (the routing can be wrong)

## Routing 3: Load-based

The agent is routed based on the load. The load is the
trigger. The load is the truth.

**Examples:**
- "If the queue is empty, route to the fast agent"
- "If the queue is long, route to the slow agent"
- "If the agent is overloaded, route to the fallback"

**When to use:** the agent has many users. The load is
high. The routing is for scale.

**Pros:**
- Scalable (the routing is for scale)
- Balanced (the routing balances the load)
- Resilient (the routing is for resilience)

**Cons:**
- Complex (the routing is based on metrics)
- Coupled (the routing is tied to the load)
- Cost (the routing takes metrics)

## The 3 together

The 3 are the routing. The routing is the dispatch. The
dispatch is the value.

| Routing | When to use | Cost |
|---|---|---|
| Event-based | The event is the truth | Low |
| Content-based | The content is the truth | Medium |
| Load-based | The load is the truth | High |

The routing that matches the need is the right routing.

## The 80/20

80% of the value comes from:
- Event-based (the event is the truth)
- Content-based (the content is the truth)

20% comes from:
- Load-based (the load is the truth)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the event clear? (event-based)
- Is the content specific? (content-based)
- Is the load high? (load-based)

The right answer is the right routing at the right cost.

## The lesson

3 routings. 1 routing model. 1 lesson: pick the right
one.

The routing that matches the need is the right routing.
The routing that doesn't match is the wrong routing.

The agent era is here. The routing is the design. The
design is the choice. The choice is the discipline.
