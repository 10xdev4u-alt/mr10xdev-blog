---
title: "The 3 ways to think about agent design (in production)"
description: "3 ways to think about agent design: prompt, code, config. Each is a different design lever. The framework, the examples, the lesson."
date: 2026-01-02
tags: ["design", "agents", "production"]
---

3 ways to think about agent design: prompt, code, config.
Each is a different design lever. The framework, the
examples, the lesson.

## Design 1: Prompt

The agent is designed via prompt. The prompt is the
design. The prompt is the truth.

**Examples:**
- "You are an issue triager. You label issues as bug,
  feature, question, or duplicate."
- "You are a code reviewer. You review PRs and suggest
  improvements."

**When to use:** the agent is simple. The agent is
specialized. The user wants fast iteration.

**Pros:**
- Fast (the prompt is iterated in minutes)
- Simple (the prompt is just text)
- Standard (the prompt is well-defined)

**Cons:**
- Limited (the prompt is bounded by context)
- Fragile (the prompt can be ignored)
- Coupled (the prompt is tied to the LLM)

## Design 2: Code

The agent is designed via code. The code is the design.
The code is the truth.

**Examples:**
- A custom tool that does the work
- A custom runner that orchestrates the LLM
- A custom validator that checks the output

**When to use:** the agent is complex. The agent needs
custom logic. The user wants control.

**Pros:**
- Flexible (the code can do anything)
- Powerful (the code is the most powerful lever)
- Custom (the code is custom to the agent)

**Cons:**
- Slow (the code is iterated in hours)
- Complex (the code is complex)
- Coupled (the code is tied to the framework)

## Design 3: Config

The agent is designed via config. The config is the
design. The config is the truth.

**Examples:**
- A YAML manifest that declares the agent
- A JSON config that sets the limits
- A TOML file that defines the triggers

**When to use:** the agent is configurable. The user
wants to change without code. The agent is shared.

**Pros:**
- Declarative (the config is declarative)
- Versioned (the config is in git)
- Auditable (the config is the audit)

**Cons:**
- Limited (the config is bounded by the schema)
- Static (the config doesn't run code)
- Coupled (the config is tied to the framework)

## The 3 together

The 3 are the design. The design is the lever. The lever
is the value.

| Design | What it does | When to use |
|---|---|---|
| Prompt | The behavior | Simple, specialized |
| Code | The logic | Complex, custom |
| Config | The settings | Configurable, shared |

The design that matches the need is the right design.

## The 80/20

80% of the value comes from:
- Prompt (the behavior is right)
- Config (the settings are right)

20% comes from:
- Code (the logic is right)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent simple? (prompt)
- Is the agent complex? (code)
- Is the agent shared? (config)

The right answer is the right design at the right cost.

## The lesson

3 designs. 1 design model. 1 lesson: pick the right
combination.

The design that matches the need is the right design.
The design that doesn't match is the wrong design.

The agent era is here. The design is the design. The
design is the choice. The choice is the discipline.
