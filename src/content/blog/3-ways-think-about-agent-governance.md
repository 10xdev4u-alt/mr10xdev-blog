---
title: "The 3 ways to think about agent governance (in production)"
description: "3 ways to think about governance: who, what, and when. The ownership, the scope, the timing. The framework, the examples, the lesson."
date: 2026-02-04
tags: ["governance", "agents", "production"]
---

3 ways to think about governance: who, what, and when. The
ownership, the scope, the timing. The framework, the
examples, the lesson.

## Governance 1: Who

Who owns the agent? Who can change it? Who can run it? Who
can override it?

**Examples:**
- The maintainers own the agent
- The maintainers can change the manifest
- The maintainers can run the agent
- The maintainers can override the agent's actions

**When to use:** the agent is shared. The agent is risky.
The agent is critical.

**The math:**
- 1 owner = simple, fast, but a single point of failure
- 2-3 owners = balanced, fast, with backup
- 4+ owners = slow, consensus-driven, but resilient

**The tradeoff:**
- More owners = more safety = less speed
- Fewer owners = more speed = less safety
- 2-3 owners is the sweet spot

## Governance 2: What

What can the agent do? What can it not do? What requires
approval? What is fully automated?

**Examples:**
- The agent can read: never require approval
- The agent can write: require approval
- The agent can close issues: require approval
- The agent can merge PRs: require approval (if at all)

**When to use:** the agent has side effects. The agent is
risky. The user wants to be in the loop.

**The math:**
- 0% approval = fast, but risky
- 50% approval = balanced
- 100% approval = safe, but slow

**The tradeoff:**
- More approval = more safety = less speed
- Less approval = more speed = less safety
- 50% approval is the sweet spot for most use cases

## Governance 3: When

When does the agent run? When does it not run? When does it
pause? When does it resume?

**Examples:**
- The agent runs on events (webhook, schedule)
- The agent pauses during incidents
- The agent pauses during maintenance windows
- The agent resumes when the maintainer approves

**When to use:** the agent is critical. The agent is
complex. The user wants control.

**The math:**
- Always on = fast, but risky
- Business hours = balanced
- Always off = safe, but useless

**The tradeoff:**
- More uptime = more value = more risk
- Less uptime = less value = less risk
- Business hours is the sweet spot for most use cases

## The 3 together

The 3 are the governance. The governance is the trust. The
trust is the adoption.

| Governance | What it ensures | Default |
|---|---|---|
| Who | Ownership | 2-3 maintainers |
| What | Scope | 50% approval |
| When | Timing | Business hours |

The agent that has all 3 is the governed agent. The agent
that has 1 is the ungoverned agent. The governed agent is
trusted. The ungoverned agent is not.

## The 80/20

80% of the value comes from:
- Who (the agent has owners)
- What (the agent has scope)

20% comes from:
- When (the agent has timing)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent shared? (who)
- Is the agent risky? (what)
- Is the agent critical? (when)

The right answer is the right governance at the right cost.

## The lesson

3 governances. 1 trust. 1 lesson: design for all 3.

The agent that designs for all 3 is the governed agent. The
agent that designs for 1 is the ungoverned agent. The
governed agent is trusted. The ungoverned agent is not.

The agent era is here. The governance is the design. The
design is the choice. The choice is the discipline.
