---
title: "The 3 ways to think about agent features (in production)"
description: "3 ways to think about features: must-have, nice-to-have, won't-have. Each is a different priority. The framework, the examples, the lesson."
date: 2026-01-10
tags: ["features", "agents", "product"]
---

3 ways to think about features: must-have, nice-to-have,
won't-have. Each is a different priority. The framework,
the examples, the lesson.

## Feature 1: Must-have

The feature is essential. The agent doesn't work without
it. The user can't use the agent without it.

**Examples:**
- A manifest (the agent can't run without a manifest)
- A model (the agent can't think without a model)
- A tool (the agent can't act without a tool)

**When to use:** the feature is the foundation. The
feature is the contract. The feature is the truth.

**Pros:**
- Essential (the user can't live without it)
- Core (the user expects it)
- Universal (every agent has it)

**Cons:**
- Cost (the feature takes time)
- Risk (the feature is the foundation)
- Coupling (the feature is tied to the agent)

## Feature 2: Nice-to-have

The feature is useful. The agent works without it. The
user wants it but doesn't need it.

**Examples:**
- Memory (the agent can work without memory)
- Observability (the user can use the agent without traces)
- Caching (the agent can work without caching)

**When to use:** the feature adds value. The user wants
it. The user is willing to wait.

**Pros:**
- Value (the feature makes the agent better)
- Differentiator (the feature sets the agent apart)
- Optional (the user can opt in)

**Cons:**
- Cost (the feature takes time)
- Complexity (the feature adds complexity)
- Maintenance (the feature needs to be maintained)

## Feature 3: Won't-have

The feature is not on the roadmap. The user asked for it.
The maintainer says no.

**Examples:**
- A custom LLM (the user wants their own model)
- A custom UI (the user wants a web UI)
- A custom integration (the user wants a Slack bot)

**When to use:** the feature is out of scope. The feature
is not the focus. The user is asking for too much.

**Pros:**
- Focus (the agent is focused)
- Quality (the maintainer can do the core well)
- Discipline (the maintainer says no)

**Cons:**
- Friction (the user is frustrated)
- Competition (the user goes to a competitor)
- Regret (the user might be right)

## The 3 together

The 3 are the features. The features are the priorities.
The priorities are the focus.

| Feature | Priority | When to build |
|---|---|---|
| Must-have | P0 | Always |
| Nice-to-have | P1 | If time |
| Won't-have | P2 | Never |

The priority that matches the user is the right priority.

## The 80/20

80% of the value comes from:
- Must-have (the agent works)
- Nice-to-have (the agent is good)

20% comes from:
- Won't-have (the maintainer says no)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each feature, ask:
- Does the agent work without it? (must-have if no)
- Does the user want it? (nice-to-have if yes)
- Is it out of scope? (won't-have if yes)

The right answer is the right priority at the right cost.

## The lesson

3 features. 1 priority. 1 lesson: focus on the 80%.

The maintainer that focuses on the 80% is the focused
maintainer. The maintainer that doesn't is the scattered
maintainer. The focused maintainer succeeds. The scattered
maintainer fails.

The agent era is here. The focus is the design. The
design is the choice. The choice is the discipline.
