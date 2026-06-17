---
title: "The 5 ways to think about agent rollback (in production)"
description: "5 ways to think about rollback: revert, disable, fallback, ignore, quarantine. Each handles a bad agent differently. The tradeoffs, the patterns, the lesson."
date: 2026-02-12
tags: ["rollback", "agents", "production"]
---

5 ways to think about rollback: revert, disable, fallback,
ignore, quarantine. Each handles a bad agent differently. The
tradeoffs, the patterns, the lesson.

## Strategy 1: Revert

The agent's last action is undone. The action is reversed.
The state is restored.

**Examples:**
- The agent closed an issue → reopen the issue
- The agent posted a comment → delete the comment
- The agent created a PR → close the PR

**When to use:** the action is reversible. The action has a
clear "undo". The undo is fast.

**Pros:** fast, complete, the state is restored.

**Cons:** the agent's memory is still corrupted. The agent
will do the same thing again.

## Strategy 2: Disable

The agent is turned off. The agent's triggers are disabled.
The agent doesn't run.

**Examples:**
- The triage agent is broken → disable triage triggers
- The doc agent is hallucinating → disable doc agent
- The release agent is misbehaving → disable release agent

**When to use:** the agent is broken. The agent is causing
damage. The agent needs to stop.

**Pros:** the agent stops. The damage stops.

**Cons:** the value stops. The user is impacted.

## Strategy 3: Fallback

The agent is replaced with a backup. The backup is simpler.
The backup is safer.

**Examples:**
- The complex triage agent → simple keyword-based triage
- The LLM-based doc agent → template-based doc agent
- The smart release agent → manual release process

**When to use:** the agent is broken. The agent needs a
replacement. The replacement is available.

**Pros:** the value continues. The damage stops.

**Cons:** the value is reduced. The user is impacted (in
quality).

## Strategy 4: Ignore

The agent's bad action is ignored. The action is not undone.
The action is not propagated. The state is corrupted but
the corruption is contained.

**Examples:**
- The agent posted a wrong comment → leave the comment, but
  don't notify the user
- The agent labeled an issue wrong → leave the label, but
  the next agent run will re-label
- The agent created a duplicate PR → leave the PR, but
  don't link it

**When to use:** the action is irreversible. The action is
small. The action is not critical.

**Pros:** fast, simple, no rollback logic.

**Cons:** the state is corrupted. The user is impacted (in
trust).

## Strategy 5: Quarantine

The agent's actions are held for review. The actions are
not applied. The user reviews and approves.

**Examples:**
- The agent proposes 10 label changes → user reviews and
  approves each one
- The agent drafts a release → user reviews and clicks
  "publish"
- The agent creates a PR → user reviews and merges

**When to use:** the agent is high-risk. The agent is new.
The user is not yet confident.

**Pros:** the user is in control. The user is safe. The
agent is learning.

**Cons:** the value is reduced (manual review). The user has
to spend time.

## The 5 together

The 5 are the rollback. The rollback is the safety. The
safety is the trust.

| Strategy | Speed | Coverage | Use when |
|---|---|---|---|
| Revert | Fast | Action only | Action is reversible |
| Disable | Instant | Agent | Agent is broken |
| Fallback | Fast | Agent | Agent needs a replacement |
| Ignore | Fast | Action | Action is small |
| Quarantine | Slow | Action | Agent is new |

The agent that uses the right strategy is the safe agent.
The agent that uses the wrong strategy is the risky agent.

## The 80/20

80% of the value comes from:
- Disable (the agent stops)
- Revert (the action is undone)

20% comes from:
- Fallback (the value continues)
- Ignore (the action is contained)
- Quarantine (the user is in control)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the action reversible? (revert)
- Is the agent broken? (disable)
- Is the value critical? (fallback)
- Is the action small? (ignore)
- Is the agent new? (quarantine)

The right answer is the right strategy at the right cost.

## The lesson

5 strategies. 1 rollback. 1 lesson: pick the right one.

The agent that picks the right strategy is the safe agent.
The agent that picks the wrong strategy is the risky agent.

The agent era is here. The rollback is the design. The
design is the choice. The choice is the discipline.
