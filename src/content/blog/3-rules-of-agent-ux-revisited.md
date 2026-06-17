---
title: "The 3 rules of agent UX (revisited)"
description: "The 3 rules of agent UX, revisited 6 months later. Show your work, be recoverable, earn trust. What worked, what didn't, what I learned. The updated mental model."
date: 2026-03-30
tags: ["ux", "agents", "retrospective"]
---

The 3 rules of agent UX, revisited 6 months later. Show your
work, be recoverable, earn trust. What worked, what didn't,
what I learned. The updated mental model.

## The original 3 rules

In the original post, I said:
1. **Show your work.** The agent explains what it's doing and why.
2. **Be recoverable.** Every action can be undone.
3. **Earn trust.** The agent admits mistakes, asks when unsure.

These are still the right rules. 6 months of running real
agents has confirmed them.

But the rules are incomplete. Let me add 3 more based on what
I've learned.

## The new 3 rules

### Rule 4: Be predictable

The agent does the same thing every time. The user can predict
the output from the input.

The old rule was "earn trust." Trust requires predictability.
If the agent does something different every time, the user
can't trust it.

**Examples:**
- **Predictable:** "I labeled this issue as `bug` because the
  title contains the word 'crash' and the body mentions a stack
  trace."
- **Unpredictable:** "I labeled this issue as `bug` because..."

The first is specific. The user can verify. The user can
predict. The second is vague. The user can't verify. The user
can't predict.

The fix: explicit reasoning. Every output has a clear "why."
The user can audit the "why." The user can predict the next
"why."

### Rule 5: Be fast

The agent responds quickly. The user doesn't wait.

The old rule didn't mention speed. Speed is implicit in
"recoverable" (the user can correct if the agent is wrong)
but speed is its own dimension.

**Examples:**
- **Fast:** 2 seconds p95
- **Slow:** 30 seconds p95

The first is the user can iterate. The user can try things. The
user can experiment. The second is the user gives up. The user
moves to a faster tool.

The fix: measure latency. Optimize the slow parts. Use
cascading (cheap model first, expensive on hard cases). Use
streaming (the user sees progress).

### Rule 6: Be quiet

The agent doesn't spam the user. The agent comments only when
it has something to say.

The old rule didn't mention noise. Noise is a real problem. An
agent that comments on every issue, even when it has nothing
useful to add, is annoying.

**Examples:**
- **Quiet:** "I labeled this issue as `bug`. No comment needed."
- **Loud:** "I labeled this issue as `bug`. Here's a 200-word
  comment explaining what I did and why and what the user should
  do next."

The first is the user gets the value (the label) without the
noise (the comment). The second is the user gets the value
AND the noise. The user is annoyed.

The fix: only comment when the comment is useful. Default to
silence. Let the user opt in to verbose mode.

## The 6 together

The 6 rules compose. The 6 are the floor. The floor is what
makes the agent usable.

| Rule | What it ensures |
|---|---|
| Show your work | Transparency |
| Be recoverable | Safety |
| Earn trust | Honesty |
| Be predictable | Consistency |
| Be fast | Usability |
| Be quiet | Respect |

The agent that follows all 6 is durable. The agent that misses
any is fragile.

## What worked

### Worked: Show your work

Every agent I built includes reasoning in its comments. The
user can audit. The user can correct. The user trusts.

### Worked: Be recoverable

Every agent's actions are logged. The user can delete the
comment, close the issue, revert the PR. The user is safe.

### Worked: Be predictable

Every agent's behavior is consistent. The user can predict the
output from the input. The user can automate around the agent.

## What didn't work

### Didn't work: Be quiet (at first)

My first agent was too quiet. It labeled issues but never
commented. The user thought the agent was broken. The user
filed bug reports.

The fix: default to "one short comment when there's something
to say." Not zero comments. Not many comments. One short
comment, when it adds value.

### Didn't work: Be fast (at first)

My first agent took 30 seconds. The user thought the agent was
broken. The user filed bug reports.

The fix: target 2-5 seconds. Use cascading. Use streaming. The
user sees progress, doesn't wait, doesn't think it's broken.

## The meta-lesson

The 3 rules I started with are the right foundation. The 3 I
added are the right refinements. The 6 together are the right
mental model.

The agent that follows the 6 is durable. The agent that misses
any is fragile. The compound effect is real.

The agent era is here. The UX is the design. The design is the
discipline. The discipline is what makes the agent last.
