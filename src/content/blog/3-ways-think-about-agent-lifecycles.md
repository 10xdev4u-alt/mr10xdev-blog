---
title: "The 3 ways to think about agent lifecycles (in production)"
description: "3 ways to think about lifecycles: develop, deploy, retire. Each is a different phase. The framework, the examples, the lesson."
date: 2025-12-21
tags: ["lifecycle", "agents", "production"]
---

3 ways to think about lifecycles: develop, deploy, retire.
Each is a different phase. The framework, the examples, the
lesson.

## Phase 1: Develop

The agent is being developed. The agent is being tested.
The agent is being iterated.

**Examples:**
- "v0.1.0 — initial agent"
- "v0.2.0 — added the label tool"
- "v0.3.0 — added the comment tool"

**When to use:** the agent is new. The user is testing.
The maintainer is iterating.

**Pros:**
- Fast (the developer iterates fast)
- Safe (the developer is in dev)
- Standard (the developer uses git)

**Cons:**
- Risky (the agent is in dev)
- Limited (the agent is not in prod)
- Coupled (the agent is tied to the dev env)

## Phase 2: Deploy

The agent is deployed. The agent is in production. The
agent is the product.

**Examples:**
- "v1.0.0 — first release"
- "v1.1.0 — added a new tool"
- "v2.0.0 — breaking change"

**When to use:** the agent is ready. The user is using
it. The agent is the product.

**Pros:**
- Real (the agent is in prod)
- Fast (the agent is in the user's hand)
- Profitable (the agent makes money)

**Cons:**
- Risky (the agent can break)
- Hard to debug (the agent is in the wild)
- Cost (the agent's mistakes are costly)

## Phase 3: Retire

The agent is retired. The agent is deprecated. The agent
is no longer supported.

**Examples:**
- "v3.0.0 — deprecated, use the new agent"
- "v3.1.0 — final release"
- "v3.2.0 — sunset"

**When to use:** the agent is outdated. The user has
moved on. The maintainer wants to focus.

**Pros:**
- Focused (the maintainer can focus)
- Clean (the codebase is clean)
- Clear (the user knows what's supported)

**Cons:**
- Friction (the user has to migrate)
- Lost (the agent's value is lost)
- Risk (the user might not migrate)

## The 3 together

The 3 are the phases. The phases are the lifecycle. The
lifecycle is the journey.

| Phase | Focus | Risk |
|---|---|---|
| Develop | Iterate | Low |
| Deploy | Ship | Medium |
| Retire | Sunset | High |

The phase that matches the need is the right phase.

## The 80/20

80% of the value comes from:
- Develop (the agent is iterated)
- Deploy (the agent is shipped)

20% comes from:
- Retire (the agent is sunset)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent new? (develop)
- Is the agent ready? (deploy)
- Is the agent outdated? (retire)

The right answer is the right phase at the right cost.

## The lesson

3 phases. 1 lifecycle. 1 lesson: design for all 3.

The lifecycle that designs for all 3 is the complete
lifecycle. The lifecycle that designs for 1 is the
incomplete lifecycle. The complete lifecycle is mature.
The incomplete lifecycle is not.

The agent era is here. The lifecycle is the design. The
design is the choice. The choice is the discipline.
