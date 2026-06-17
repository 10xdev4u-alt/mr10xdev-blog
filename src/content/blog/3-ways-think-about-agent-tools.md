---
title: "The 3 ways to think about agent tools (in production)"
description: "3 ways to think about tools: built-in, custom, third-party. Each is a different tool source. The framework, the examples, the lesson."
date: 2025-12-12
tags: ["tools", "agents", "production"]
---

3 ways to think about tools: built-in, custom, third-party.
Each is a different tool source. The framework, the
examples, the lesson.

## Source 1: Built-in

The tools are built into the framework. The tools are the
default. The tools are the truth.

**Examples:**
- `github.post_comment` (built into gitagent)
- `github.add_labels` (built into gitagent)
- `memory.read` (built into gitagent)
- `memory.write` (built into gitagent)

**When to use:** the user is standard. The user wants the
default. The user is in the framework.

**Pros:**
- Standard (the tools are the standard)
- Tested (the tools are tested)
- Free (the tools are free)

**Cons:**
- Limited (the tools are limited to the framework)
- Coupled (the tools are tied to the framework)
- Generic (the tools are generic)

## Source 2: Custom

The tools are written by the user. The tools are custom.
The tools are the truth.

**Examples:**
- A `slack` tool (custom for the team)
- A `database` tool (custom for the project)
- A `metrics` tool (custom for the org)

**When to use:** the user has unique needs. The user wants
to extend. The user is committed.

**Pros:**
- Custom (the tools are custom)
- Powerful (the tools are powerful)
- Specific (the tools are specific)

**Cons:**
- Cost (the tools cost time to write)
- Maintenance (the tools must be maintained)
- Risk (the tools can be wrong)

## Source 3: Third-party

The tools are from the community. The tools are shared.
The tools are the truth.

**Examples:**
- A `slack` tool (from the community)
- A `database` tool (from the community)
- A `metrics` tool (from the community)

**When to use:** the user wants to share. The user wants
to leverage. The user is in the ecosystem.

**Pros:**
- Reusable (the tools are reusable)
- Free (the tools are free)
- Tested (the tools are tested by the community)

**Cons:**
- Limited (the tools are limited to what's available)
- Risk (the tools can be unmaintained)
- Coupled (the tools are coupled to the third party)

## The 3 together

The 3 are the sources. The sources are the flexibility.
The flexibility is the value.

| Source | Customization | Cost | Best for |
|---|---|---|---|
| Built-in | Low | Free | Standard |
| Custom | High | High | Unique |
| Third-party | Medium | Free | Shared |

The source that matches the need is the right source.

## The 80/20

80% of the value comes from:
- Built-in (the tools are standard)
- Custom (the tools are unique)

20% comes from:
- Third-party (the tools are shared)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each tool, ask:
- Is the tool standard? (built-in)
- Is the tool unique? (custom)
- Is the tool shared? (third-party)

The right answer is the right source at the right cost.

## The lesson

3 sources. 1 tools. 1 lesson: pick the right one.

The source that matches the need is the right source.
The source that doesn't match is the wrong source.

The agent era is here. The tools are the design. The
design is the choice. The choice is the discipline.
