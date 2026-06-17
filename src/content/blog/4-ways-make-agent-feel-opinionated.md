---
title: "The 4 ways to make an agent feel opinionated (in production)"
description: "4 ways to make an agent feel opinionated: defaults, recommendations, examples, anti-patterns. The small touches that signal the agent has a point of view. The line between 'configurable' and 'opinionated'."
date: 2025-12-23
tags: ["opinionated", "agents", "design"]
---

4 ways to make an agent feel opinionated: defaults,
recommendations, examples, anti-patterns. The small touches
that signal the agent has a point of view. The line between
"configurable" and "opinionated."

## Touch 1: Defaults

The agent has defaults. The agent chooses for the user.
The user doesn't have to think.

**Bad:** the agent has 100 options. The user has to
choose. The user is overwhelmed.

**Good:** the agent has 100 options. The agent has a
default. The user can override. The user is happy.

The defaults are the difference between "the user has to
think" and "the user just uses it."

## Touch 2: Recommendations

The agent recommends. The agent says "I recommend X."
The agent has a point of view.

**Bad:** the agent is neutral. The agent doesn't
recommend. The user is on their own.

**Good:** the agent says "I recommend using Haiku for
simple tasks and Sonnet for complex tasks." The user has
guidance.

The recommendations are the difference between "the user
is on their own" and "the user has a guide."

## Touch 3: Examples

The agent has examples. The examples show the user how
to use the agent. The examples are the truth.

**Bad:** the agent has no examples. The user has to
figure it out. The user gives up.

**Good:** the agent has 5 examples. The user copies the
first one. The user is happy.

The examples are the difference between "the user has to
figure it out" and "the user just copies."

## Touch 4: Anti-patterns

The agent has anti-patterns. The agent says "don't do
X." The agent has a point of view.

**Bad:** the agent is silent on what not to do. The user
does the wrong thing. The user is frustrated.

**Good:** the agent says "don't run the agent in a loop
without a maxSteps limit." The user avoids the trap.

The anti-patterns are the difference between "the user
falls into the trap" and "the user avoids the trap."

## The 4 together

The 4 are the opinionated. The opinionated is the
guidance. The guidance is the value.

| Touch | What it ensures |
|---|---|
| Defaults | The user can just use it |
| Recommendations | The user has a guide |
| Examples | The user can copy |
| Anti-patterns | The user can avoid |

The agent that has all 4 is the opinionated agent. The
agent that has 1 is the neutral agent. The opinionated
agent is adopted. The neutral agent is not.

## The 80/20

80% of the value comes from:
- Defaults (the user can just use it)
- Examples (the user can copy)

20% comes from:
- Recommendations (the user has a guide)
- Anti-patterns (the user can avoid)

Focus on the 80% first. Add the 20% as you grow.

## The test

The agent feels opinionated if:
- A new user can use it without reading the docs
- A new user has guidance for common cases
- A new user can copy an example
- A new user can avoid common mistakes

If any of these fails, the agent feels neutral. Fix the
agent.

## The lesson

4 touches. 1 opinionated. 1 lesson: invest in the small
touches.

The agent that invests in the small touches is the
opinionated agent. The agent that doesn't is the neutral
agent. The opinionated agent is adopted. The neutral
agent is not.

The agent era is here. The opinionated is the design. The
design is the discipline. The discipline is the value.
