---
title: "The 5 ways to think about agent deployment (in production)"
description: "5 ways to think about deployment: dev, staging, prod, canary, blue-green. Each is a different environment with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-21
tags: ["deployment", "agents", "production"]
---

5 ways to think about deployment: dev, staging, prod,
canary, blue-green. Each is a different environment with
different tradeoffs. The framework, the examples, the
lesson.

## Env 1: Dev

The agent runs on the developer's machine. The agent is
in development. The agent is being built.

**Examples:**
- `gitagent dev` runs the agent locally
- The agent reads from a test repo
- The agent posts to a test GitHub

**When to use:** the developer is building. The developer
wants to test. The developer wants fast iteration.

**Pros:**
- Fast (the developer iterates in seconds)
- Private (the developer is the only user)
- Cheap (the developer uses their own resources)

**Cons:**
- Inconsistent (the developer's environment differs from
  prod)
- Limited (the developer can only test a small subset)
- Risky (the developer might commit broken code)

## Env 2: Staging

The agent runs in a staging environment. The agent is in
testing. The agent is being verified.

**Examples:**
- The agent runs on a test repo
- The agent posts to a test GitHub
- The agent uses a test LLM API

**When to use:** the developer is testing. The team wants
to verify. The user wants to see.

**Pros:**
- Realistic (the staging env is similar to prod)
- Safe (the staging env doesn't affect prod)
- Testable (the team can run E2E tests)

**Cons:**
- Cost (the staging env costs money)
- Drift (the staging env drifts from prod)
- Slow (the staging env is slower than dev)

## Env 3: Prod

The agent runs in production. The agent is in use. The
agent is the product.

**Examples:**
- The agent runs on the real repo
- The agent posts to the real GitHub
- The agent uses the real LLM API

**When to use:** the agent is ready. The user is using it.
The agent is the product.

**Pros:**
- Real (the agent runs in the real world)
- Fast (the agent has no staging overhead)
- Profitable (the agent makes money)

**Cons:**
- Risky (the agent can break things)
- Hard to debug (the agent runs in the real world)
- Costly (the agent's mistakes are costly)

## Env 4: Canary

The agent runs on a small subset of traffic. The agent is
in trial. The agent is being validated.

**Examples:**
- 1% of users see the new agent
- 10% of issues are triaged by the new agent
- The new agent is compared to the old agent

**When to use:** the agent is new. The team wants to
validate. The user is at risk.

**Pros:**
- Safe (the canary is a small subset)
- Real (the canary is in the real world)
- Comparable (the canary is compared to the baseline)

**Cons:**
- Complex (the canary requires traffic splitting)
- Slow (the canary takes time to validate)
- Cost (the canary runs two versions)

## Env 5: Blue-green

The agent runs on a parallel environment. The agent is
swapped in. The agent is the new version.

**Examples:**
- The new agent runs in a parallel env
- The traffic is switched when the new agent is ready
- The old agent is kept for rollback

**When to use:** the agent is new. The team wants zero
downtime. The user can't have downtime.

**Pros:**
- Safe (the rollback is instant)
- Real (the blue-green is in the real world)
- Fast (the switch is instant)

**Cons:**
- Cost (the blue-green runs two versions)
- Complexity (the blue-green requires traffic switching)
- Risk (the blue-green has data sync issues)

## The 5 environments together

The 5 are the deployment. The deployment is the journey.
The journey is the value.

| Env | Risk | Speed | Best for |
|---|---|---|---|
| Dev | Low | Fast | Building |
| Staging | Low | Medium | Testing |
| Prod | High | Fast | Real users |
| Canary | Medium | Slow | Validating |
| Blue-green | Low | Instant | Zero-downtime |

The env that matches the need is the right env.

## The 80/20

80% of the value comes from:
- Dev (the developer iterates)
- Prod (the user uses)

20% comes from:
- Staging (the team verifies)
- Canary (the team validates)
- Blue-green (the team rolls back)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent new? (dev, staging)
- Is the agent ready? (prod)
- Is the agent risky? (canary, blue-green)

The right answer is the right env at the right cost.

## The lesson

5 environments. 1 deployment. 1 lesson: pick the right
one.

The env that matches the need is the right env. The env
that doesn't match is the wrong env.

The agent era is here. The deployment is the design. The
design is the choice. The choice is the discipline.
