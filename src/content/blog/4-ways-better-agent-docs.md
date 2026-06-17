---
title: "The 4 ways to make an agent documentation better"
description: "4 ways to make an agent's docs better: examples-first, copy-pastable, copy-runnable, copy-modifiable. The 4 levels of documentation that scale from beginner to expert."
date: 2026-02-23
tags: ["documentation", "agents", "best-practices"]
---

4 ways to make an agent's docs better: examples-first,
copy-pastable, copy-runnable, copy-modifiable. The 4 levels
of documentation that scale from beginner to expert.

## Level 1: Examples-first

The doc starts with an example. The user sees the result
first. The user understands what they're getting.

**Bad:** the doc starts with the API. The user doesn't know
what they're getting. The user gives up.

**Good:**
```yaml
---
name: my-triage
triggers:
  - issues.opened
---
# My triage agent
```

The example is the first thing. The user sees it. The user
understands it. The user copies it.

## Level 2: Copy-pastable

The example is valid. The user can copy it. The user can
paste it. It works.

**Bad:** the example is "simplified for clarity" and
doesn't work. The user pastes it. It fails. The user is
frustrated.

**Good:** the example is real. The example is tested. The
example works on the first paste. The user is happy.

The "tested" is the key. The example is in the test suite.
The example is run on every commit. The example is always
up to date.

## Level 3: Copy-runnable

The example runs. The user copies it. The user runs it. The
agent does the thing. The user sees the result.

**Bad:** the example requires 5 setup steps. The user gives
up.

**Good:** the example is one command. The example runs on
the first try. The user sees the result. The user is hooked.

The "one command" is the goal. The one command runs the
agent. The one command shows the output. The one command
proves the example works.

## Level 4: Copy-modifiable

The example is a starting point. The user copies it. The
user modifies it. The agent does the user's thing.

**Bad:** the example is rigid. The user can't change it.
The user gives up.

**Good:** the example has clear "change this" markers. The
example is well-commented. The example is easy to fork. The
user feels ownership.

The "easy to fork" is the goal. The user can rename. The
user can re-configure. The user can re-purpose. The user
is invested.

## The 4 levels together

The 4 levels are the documentation. The documentation is
the adoption.

| Level | What it ensures | Who it serves |
|---|---|---|
| 1: Examples-first | The user sees the result | Beginners |
| 2: Copy-pastable | The user can copy and paste | New users |
| 3: Copy-runnable | The user can run the example | All users |
| 4: Copy-modifiable | The user can change the example | Power users |

The doc that has all 4 is the doc that scales. The doc that
has 1 is the doc that loses users.

## The 80/20

80% of the value comes from:
- Examples-first (the user sees)
- Copy-runnable (the user runs)

20% comes from:
- Copy-pastable (the user copies)
- Copy-modifiable (the user modifies)

Focus on the 80% first. Add the 20% as you grow.

## The test

The doc is good if:
- A new user can see what they're getting in 30 seconds
- A new user can copy and paste in 1 minute
- A new user can run in 5 minutes
- A new user can modify in 15 minutes

If any of these takes longer, the doc is bad. Fix the doc.

## The lesson

4 levels. 1 documentation. 1 lesson: invest in the small
touches.

The agent that invests in the small touches is the
documented agent. The agent that doesn't is the undocumented
agent. The documented agent is adopted. The undocumented
agent is not.

The agent era is here. The docs are the design. The design
is the discipline. The discipline is the adoption.
