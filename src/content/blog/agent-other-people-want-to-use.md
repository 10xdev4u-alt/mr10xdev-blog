---
title: "How to write an agent that other people want to use"
description: "The 5 things that make an agent shareable. Clear purpose, sharp focus, great defaults, real examples, real users. The difference between a personal script and a community tool."
date: 2026-03-25
tags: ["agents", "open-source", "best-practices"]
---

The 5 things that make an agent shareable. Clear purpose, sharp
focus, great defaults, real examples, real users. The difference
between a personal script and a community tool.

## Thing 1: Clear purpose

The agent does 1 thing. The 1 thing is obvious from the README.

```markdown
# Triage

> Triage new issues by labeling, asking for repro, and closing obvious duplicates.
```

Not:
```markdown
# Triage

> An AI agent for managing your GitHub issues.
```

The first is specific. The user knows if they need it. The
second is vague. The user has to read more.

## Thing 2: Sharp focus

The agent has 3-7 tools. The tools are the minimum.

```yaml
tools:
  - github.post_comment
  - github.add_labels
  - github.search_issues
  - github.close_issue
```

Not:
```yaml
tools:
  - github.post_comment
  - github.add_labels
  - github.remove_label
  - github.search_issues
  - github.close_issue
  - github.reopen_issue
  - github.assign
  - github.list_issues
  - github.create_pr
  # ... 20 more tools
```

The first is focused. The agent does 1 thing well. The second
is a Swiss Army knife. The agent does everything poorly.

## Thing 3: Great defaults

The manifest has good defaults out of the box. The user doesn't
have to configure anything.

```yaml
model:
  provider: anthropic
  name: claude-sonnet-4-5
  temperature: 0.2
limits:
  maxSteps: 6
  timeoutMs: 60000
```

Not:
```yaml
model:
  provider: <user must choose>
  name: <user must choose>
  temperature: <user must choose>
limits:
  maxSteps: <user must choose>
  timeoutMs: <user must choose>
```

The first works out of the box. The user gets value in 30
seconds. The second requires configuration. The user gives up.

## Thing 4: Real examples

The repo has 3+ examples. Each example is a complete, runnable
agent. The user can copy-paste and adapt.

```
examples/
├── basic-triage.md    # Simple bug vs feature classifier
├── with-memory.md     # Triage that remembers past decisions
└── with-streaming.md  # Triage that streams the response
```

Not:
```
examples/
└── (empty)
```

The first gives the user a starting point. The user can
adapt. The second leaves the user to figure it out. The user
gives up.

## Thing 5: Real users

The agent has 3+ users before it's "shareable." The users
tested it. The users use it. The users tell other users.

You don't have a shareable agent until you have 3 users. The 3
users validate the use case. The 3 users find the bugs. The 3
users write the first issues.

Before 3 users, the agent is a personal tool. After 3 users,
the agent is a community tool.

## The 5 together

The 5 things compose. The 5 are the floor. The floor is what
makes an agent shareable.

| Thing | What it ensures |
|---|---|
| Clear purpose | User can tell if they need it |
| Sharp focus | User can predict what it does |
| Great defaults | User can use it in 30 seconds |
| Real examples | User can adapt to their use case |
| Real users | User trusts other users have tried it |

The agent with all 5 is shareable. The agent missing any is a
personal script.

## The 80/20

80% of the value comes from:
- Clear purpose
- Great defaults

20% comes from:
- Sharp focus
- Real examples
- Real users

Focus on the 80% first. Add the 20% as you grow.

## The meta-lesson

Most agents are personal scripts. The personal script does
the thing. The personal script is used by 1 person (you). The
personal script dies when you stop maintaining it.

The shareable agent is different. The shareable agent has
users. The shareable agent has a community. The shareable
agent has a future. The shareable agent is a product.

The difference between a personal script and a shareable
agent is the 5 things. The 5 things are the difference between
a hobby and a tool. The choice is yours.

The agent era is here. The shareable agents are the future.
The future is now. Build for it.
