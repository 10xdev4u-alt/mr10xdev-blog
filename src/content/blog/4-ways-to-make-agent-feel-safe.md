---
title: "The 4 ways to make an agent feel safe"
description: "4 ways to make an agent feel safe: predictable, recoverable, observable, bounded. The small touches that signal safety. The line between 'scary AI' and 'trustworthy tool'."
date: 2026-02-25
tags: ["safety", "agents", "design"]
---

4 ways to make an agent feel safe: predictable, recoverable,
observable, bounded. The small touches that signal safety. The
line between "scary AI" and "trustworthy tool."

## Way 1: Predictable

A scary agent is unpredictable. A trustworthy agent is
predictable.

**Scary:** "The agent did something I didn't expect. I don't
know why. I can't reproduce it."
**Trustworthy:** "The agent does the same thing every time. I
can predict its behavior from its inputs."

The trustworthy agent is deterministic (within the LLM's
limits). The trustworthy agent is consistent. The
trustworthy agent's output is auditable.

## Way 2: Recoverable

A scary agent is irreversible. A trustworthy agent is
recoverable.

**Scary:** "The agent closed 100 issues. I can't undo it."
**Trustworthy:** "The agent proposed 100 actions. I approved
each one. I can unapprove each one."

The trustworthy agent's actions are reversible. The
trustworthy agent's actions are logged. The trustworthy
agent's actions can be undone.

## Way 3: Observable

A scary agent is a black box. A trustworthy agent is
observable.

**Scary:** "Trust me, the agent did the right thing."
**Trustworthy:** "Here's the trace. Here's the cost. Here's
the decision the agent made. Here's why."

The trustworthy agent shows its work. The trustworthy agent
is auditable. The trustworthy agent's observability is the
trust.

## Way 4: Bounded

A scary agent is unbounded. A trustworthy agent is bounded.

**Scary:** "The agent can do anything. It might do something
catastrophic."
**Trustworthy:** "The agent can only do what the manifest
allows. It can't exceed the permissions. It can't spend money
without approval."

The trustworthy agent has limits. The trustworthy agent's
limits are explicit. The trustworthy agent's limits are
enforced.

## The 4 together

The 4 ways are the safety. The safety is the trust. The
trust is the adoption.

| Way | What it ensures |
|---|---|
| Predictable | The user can predict the output |
| Recoverable | The user can undo the action |
| Observable | The user can see what happened |
| Bounded | The user can limit the scope |

The agent that has all 4 is safe. The agent that misses
any is risky. The choice is yours.

## The 80/20

80% of the value comes from:
- Predictable (the user can plan)
- Recoverable (the user can correct)

20% comes from:
- Observable (the user can debug)
- Bounded (the user can limit)

Focus on the 80% first. Add the 20% as you grow.

## The test

The agent feels safe if:
- A new user can predict its output from its inputs
- A new user can undo its actions
- A new user can see its decisions
- A new user can limit its scope

If any of these fails, the agent is scary. Fix the agent.

## The lesson

4 ways. 1 safety. 1 lesson: invest in the small touches.

The agent that invests in the small touches is the safe
agent. The agent that doesn't is the scary agent. The safe
agent is adopted. The scary agent is not.

The agent era is here. The safety is the design. The
design is the discipline. The discipline is the adoption.
