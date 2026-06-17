---
title: "The 3 ways to think about agent types (in production)"
description: "3 ways to think about agent types: reactive, proactive, hybrid. Each is a different type with different tradeoffs. The framework, the examples, the lesson."
date: 2025-12-06
tags: ["types", "agents", "production"]
---

3 ways to think about agent types: reactive, proactive,
hybrid. Each is a different type with different tradeoffs.
The framework, the examples, the lesson.

## Type 1: Reactive

The agent is reactive. The agent responds. The agent is
triggered by events.

**Examples:**
- "Label this issue" — triggered by issues.opened
- "Review this PR" — triggered by pull_request.opened
- "Post a comment" — triggered by issue_comment.created

**When to use:** the user wants on-demand. The user is
reactive. The agent is fast.

**Pros:**
- Fast (the agent is on-demand)
- Reactive (the agent responds to events)
- Standard (the agent uses the GitHub event system)

**Cons:**
- Limited (the agent only acts on events)
- Dependent (the agent depends on events)
- Cold (the agent doesn't initiate)

## Type 2: Proactive

The agent is proactive. The agent initiates. The agent
is triggered by time.

**Examples:**
- "Check for stale issues" — triggered by schedule.daily
- "Draft release notes" — triggered by schedule.weekly
- "Summarize the week" — triggered by schedule.weekly

**When to use:** the user wants regular. The user is
proactive. The agent is comprehensive.

**Pros:**
- Proactive (the agent initiates)
- Predictable (the agent runs on a schedule)
- Comprehensive (the agent covers the whole)

**Cons:**
- Wasteful (the agent runs even when not needed)
- Late (the agent might miss the right time)
- Dependent (the agent depends on the schedule)

## Type 3: Hybrid

The agent is hybrid. The agent is both reactive and
proactive. The agent is the truth.

**Examples:**
- "Label this issue (reactive) AND check for stale
  issues (proactive)"
- "Review this PR (reactive) AND draft release notes
  (proactive)"

**When to use:** the user wants both. The user is
comprehensive. The agent is general.

**Pros:**
- Comprehensive (the agent is both)
- Flexible (the agent is flexible)
- Powerful (the agent is powerful)

**Cons:**
- Complex (the agent is complex to build)
- Cost (the agent costs more)
- Risk (the agent has more failure modes)

## The 3 together

The 3 are the types. The types are the design. The design
is the value.

| Type | Triggers | Best for |
|---|---|---|
| Reactive | Events | On-demand |
| Proactive | Time | Regular |
| Hybrid | Both | Comprehensive |

The type that matches the need is the right type.

## The 80/20

80% of the value comes from:
- Reactive (the user is on-demand)
- Proactive (the user is regular)

20% comes from:
- Hybrid (the user is comprehensive)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the user on-demand? (reactive)
- Is the user regular? (proactive)
- Is the user comprehensive? (hybrid)

The right answer is the right type at the right cost.

## The lesson

3 types. 1 type model. 1 lesson: pick the right one.

The type that matches the need is the right type. The
type that doesn't match is the wrong type.

The agent era is here. The type is the design. The
design is the choice. The choice is the discipline.
