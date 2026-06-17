---
title: "The 3 ways to think about agent autonomy (in production)"
description: "3 ways to think about autonomy: when, what, and how. When to act, what to act on, and how much to act. The framework, the examples, the tradeoffs."
date: 2026-03-01
tags: ["agents", "autonomy", "production"]
---

3 ways to think about autonomy: when, what, and how. When to
act, what to act on, and how much to act. The framework, the
examples, the tradeoffs.

## When to act

The agent acts on triggers. The triggers are external events
(webhook, cron) or internal events (state change, threshold).

**External triggers:**
- Webhook (GitHub issue opened, Stripe payment received)
- Cron (daily, weekly, monthly)
- HTTP request (API call, manual trigger)

**Internal triggers:**
- State change (e.g., a counter hits a threshold)
- Condition met (e.g., a budget is exceeded)
- Time elapsed (e.g., a task has been pending for 1 hour)

**The tradeoff:**
- External triggers are reactive. The agent responds to
  events.
- Internal triggers are proactive. The agent acts on
  conditions.

The agent that combines both is the agent that's
both reactive and proactive.

## What to act on

The agent acts on the world. The actions are external (post
to GitHub, send email) or internal (update memory, change
state).

**External actions:**
- Post a comment
- Create a PR
- Send an email
- Modify a database
- Trigger a workflow

**Internal actions:**
- Update memory
- Change state
- Schedule a follow-up
- Notify the user

**The tradeoff:**
- External actions are visible. The user sees the result.
- Internal actions are invisible. The user doesn't see the
  result.

The agent that does both is the agent that's both visible
and invisible.

## How much to act

The agent acts with permission. The permissions are explicit
(read-only, write, admin) and contextual (always, sometimes,
never).

**Permission levels:**
- Read: read-only operations
- Write: write operations
- Admin: destructive operations

**Permission contexts:**
- Always: every action requires approval
- Sometimes: some actions require approval, others don't
- Never: no action requires approval (fully automated)

**The tradeoff:**
- More permissions = more capability = more risk
- Fewer permissions = less capability = less risk

The agent that matches the right permissions is the agent
that's capable and safe.

## The 3 together

The 3 are the autonomy. The autonomy is the design. The
design is the trade-off.

| When | External | Internal |
|---|---|---|
| Triggers | Webhook, cron | State, condition, time |
| Actions | Post, create, send | Update, change, schedule |
| Permissions | Read, write, admin | Always, sometimes, never |

The agent that's the right combination is the agent that's
the right design.

## The 80/20

80% of the value comes from:
- When: external triggers (the agent responds to events)
- What: external actions (the agent acts on the world)

20% comes from:
- Internal triggers (the agent acts on conditions)
- Internal actions (the agent updates state)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

3 ways. 1 autonomy. 1 lesson: think about all 3.

The agent that thinks about all 3 is the agent that's
designed well. The agent that thinks about 1 is the agent
that's designed poorly.

The agent era is here. The autonomy is the design. The
design is the discipline. The discipline is the safety.
