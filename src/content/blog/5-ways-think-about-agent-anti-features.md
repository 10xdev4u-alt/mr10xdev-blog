---
title: "The 5 ways to think about agent anti-features (in production)"
description: "5 ways to think about anti-features: missing, hidden, deprecated, removed, never. Each is a different anti-feature. The framework, the examples, the lesson."
date: 2025-11-25
tags: ["anti-features", "agents", "production"]
---

5 ways to think about anti-features: missing, hidden,
deprecated, removed, never. Each is a different
anti-feature. The framework, the examples, the lesson.

## Anti-feature 1: Missing

The feature is missing. The user can't use it. The
feature is not in the agent.

**Examples:**
- "The agent can't create PRs (yet)"
- "The agent can't search the web (yet)"
- "The agent can't deploy (yet)"

**When to use:** the feature is not built. The user
wants it. The maintainer is planning.

**Pros:**
- Clear (the user knows it's missing)
- Planned (the maintainer can plan)
- Honest (the agent is honest)

**Cons:**
- Friction (the user has friction)
- Limit (the agent is limited)
- Risk (the user might leave)

## Anti-feature 2: Hidden

The feature is hidden. The user doesn't know it exists.
The feature is a secret.

**Examples:**
- "The agent has a `verbose` mode, but it's not in the
  docs"
- "The agent has a `cache` option, but it's hidden in the
  config"

**When to use:** the feature is experimental. The
maintainer wants to test. The user is advanced.

**Pros:**
- Testable (the feature can be tested)
- Flexible (the maintainer can iterate)
- Hidden (the feature is hidden)

**Cons:**
- Discoverable (the feature is not discoverable)
- Documented (the feature is not documented)
- Risk (the feature can be removed)

## Anti-feature 3: Deprecated

The feature is deprecated. The feature still works but
will be removed. The feature is on its way out.

**Examples:**
- "The `verbose` mode is deprecated, use `log_level`"
- "The `cache` option is deprecated, use `cache_ttl`"

**When to use:** the feature is being replaced. The
user has time to migrate. The maintainer is sunsetting.

**Pros:**
- Clear (the user knows it's deprecated)
- Migration (the user has time to migrate)
- Sunset (the maintainer can sunset)

**Cons:**
- Maintenance (the maintainer maintains two)
- Documentation (the documentation is two)
- Risk (the user might not migrate)

## Anti-feature 4: Removed

The feature is removed. The feature doesn't work. The
feature is gone.

**Examples:**
- "The `verbose` mode is removed in v2.0.0"
- "The `cache` option is removed in v2.0.0"

**When to use:** the feature is no longer needed. The
user has migrated. The maintainer has sunset.

**Pros:**
- Clean (the codebase is clean)
- Focus (the agent is focused)
- Clear (the user knows it's removed)

**Cons:**
- Breaking (the change is breaking)
- Friction (the user has friction)
- Risk (the user might not migrate)

## Anti-feature 5: Never

The feature is never. The feature will never exist. The
feature is not on the roadmap.

**Examples:**
- "We will never add a web UI to the CLI"
- "We will never support Windows XP"

**When to use:** the feature is out of scope. The user
is asking for too much. The maintainer is focused.

**Pros:**
- Focused (the agent is focused)
- Quality (the maintainer can focus on the core)
- Discipline (the maintainer has discipline)

**Cons:**
- Friction (the user is frustrated)
- Competition (the user goes to a competitor)
- Regret (the user might be right)

## The 5 together

The 5 are the anti-features. The anti-features are the
limits. The limits are the value.

| Anti-feature | What it signals | When to use |
|---|---|---|
| Missing | Not built | Planning |
| Hidden | Experimental | Testing |
| Deprecated | Being replaced | Sunsetting |
| Removed | Gone | Cleanup |
| Never | Out of scope | Focus |

The anti-feature that matches the case is the right
anti-feature.

## The 80/20

80% of the value comes from:
- Missing (the user knows it's not built)
- Deprecated (the user has time to migrate)

20% comes from:
- Hidden (the maintainer is testing)
- Removed (the codebase is clean)
- Never (the maintainer is focused)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each feature, ask:
- Is the feature not built? (missing)
- Is the feature experimental? (hidden)
- Is the feature being replaced? (deprecated)
- Is the feature gone? (removed)
- Is the feature out of scope? (never)

The right answer is the right anti-feature at the right
time.

## The lesson

5 anti-features. 1 anti-feature model. 1 lesson: design
for the right one.

The anti-feature that matches the case is the right
anti-feature. The anti-feature that doesn't match is the
wrong anti-feature.

The agent era is here. The anti-feature is the design.
The design is the choice. The choice is the discipline.
