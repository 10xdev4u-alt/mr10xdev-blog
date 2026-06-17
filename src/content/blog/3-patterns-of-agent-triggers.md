---
title: "The 3 patterns of agent triggers (in production)"
description: "3 patterns of agent triggers: event, schedule, manual. Each is a different trigger with different use cases. The framework, the examples, the lesson."
date: 2026-01-23
tags: ["triggers", "agents", "production"]
---

3 patterns of agent triggers: event, schedule, manual. Each
is a different trigger with different use cases. The
framework, the examples, the lesson.

## Pattern 1: Event

The agent runs when something happens. The agent is
reactive. The agent responds to changes.

**Examples:**
- `issues.opened` — the agent runs when an issue is opened
- `pull_request.opened` — the agent runs when a PR is opened
- `issue_comment.created` — the agent runs when a comment is
  created
- `workflow_run.completed` — the agent runs when a CI run
  completes

**When to use:** the agent responds to changes. The agent
is reactive. The user wants instant action.

**Pros:**
- Instant (the agent runs when the event happens)
- Reactive (the agent responds to changes)
- Standard (the agent uses the GitHub event system)

**Cons:**
- Coupled (the agent is tied to the event source)
- Fragile (the agent can miss events)
- Complex (the agent has to handle the event format)

## Pattern 2: Schedule

The agent runs on a timer. The agent is proactive. The
agent runs even when nothing happens.

**Examples:**
- `schedule.daily` — the agent runs once a day
- `schedule.weekly` — the agent runs once a week
- `schedule.monthly` — the agent runs once a month

**When to use:** the agent is proactive. The agent needs
to do something regularly. The user wants regular action.

**Pros:**
- Proactive (the agent runs even when nothing happens)
- Predictable (the agent runs on a schedule)
- Standard (the agent uses a cron-like system)

**Cons:**
- Wasteful (the agent runs even when not needed)
- Late (the agent might miss the right time)
- Coupled (the agent is tied to the schedule)

## Pattern 3: Manual

The agent runs when the user asks. The agent is on-demand.
The agent runs only when the user wants.

**Examples:**
- `manual` — the agent runs when the user invokes it
- `/triage` — the user types `/triage` in a comment
- `gitagent run triage` — the user runs a CLI command

**When to use:** the agent is on-demand. The user wants
control. The agent is for specific tasks.

**Pros:**
- Controlled (the user decides when)
- On-demand (the agent runs only when needed)
- Flexible (the user can run any agent any time)

**Cons:**
- Slow (the user has to invoke the agent)
- Coupled (the agent is tied to the user's action)
- Inconsistent (the user might forget to invoke)

## The 3 together

The 3 are the triggers. The triggers are the activation.
The activation is the value.

| Pattern | Speed | Proactive | Best for |
|---|---|---|---|
| Event | Instant | No | Reactive |
| Schedule | Delayed | Yes | Proactive |
| Manual | On-demand | No | On-demand |

The trigger that matches the use case is the right
trigger.

## The 80/20

80% of the value comes from:
- Event (the agent is reactive)
- Manual (the agent is on-demand)

20% comes from:
- Schedule (the agent is proactive)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Does the agent respond to changes? (event)
- Does the agent need to run regularly? (schedule)
- Does the user need to invoke the agent? (manual)

The right answer is the right trigger at the right cost.

## The lesson

3 patterns. 1 trigger. 1 lesson: pick the right one.

The trigger that matches the use case is the right
trigger. The trigger that doesn't match is the wrong
trigger.

The agent era is here. The trigger is the design. The
design is the choice. The choice is the discipline.
