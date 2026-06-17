---
title: "The 4 ways to think about agent extensions (in production)"
description: "4 ways to think about extensions: tools, skills, plugins, integrations. Each is a different extension model. The framework, the examples, the lesson."
date: 2025-12-14
tags: ["extensions", "agents", "production"]
---

4 ways to think about extensions: tools, skills, plugins,
integrations. Each is a different extension model. The
framework, the examples, the lesson.

## Extension 1: Tools

The agent has tools. The tools are functions. The tools
are the actions.

**Examples:**
- `github.post_comment`
- `github.add_labels`
- `memory.read`
- `memory.write`

**When to use:** the agent needs to act. The user wants
to extend. The agent is functional.

**Pros:**
- Standard (the tools are the standard)
- Tested (the tools are tested)
- Composable (the tools are composable)

**Cons:**
- Coupled (the tools are tied to the agent)
- Versioned (the tools must be versioned)
- Limited (the tools are limited to functions)

## Extension 2: Skills

The agent has skills. The skills are bundles. The skills
are the personality + tools.

**Examples:**
- `gh-pr-review` skill (post_comment, list_pull_requests,
  get_file)
- `issue-triage` skill (post_comment, add_labels,
  memory.read)

**When to use:** the user wants to bundle. The user wants
to share. The agent is reusable.

**Pros:**
- Composable (the skills are composable)
- Reusable (the skills are reusable)
- Shareable (the skills are shareable)

**Cons:**
- Coupled (the skills are tied to the agent)
- Limited (the skills are limited to tools)
- Maintenance (the skills must be maintained)

## Extension 3: Plugins

The agent has plugins. The plugins are packages. The
plugins are the third-party.

**Examples:**
- A `slack` plugin (post to Slack)
- A `database` plugin (query the database)
- A `metrics` plugin (send metrics to Datadog)

**When to use:** the user wants to extend. The user wants
to share. The agent is a platform.

**Pros:**
- Extensible (the plugins extend the agent)
- Reusable (the plugins are reusable)
- Ecosystem (the plugins build an ecosystem)

**Cons:**
- Complex (the plugins are complex)
- Versioned (the plugins must be versioned)
- Risk (the plugins can break the agent)

## Extension 4: Integrations

The agent has integrations. The integrations are
external services. The integrations are the connections.

**Examples:**
- A `slack` integration (post to Slack, receive from
  Slack)
- A `github` integration (post to GitHub, receive from
  GitHub)
- A `linear` integration (sync with Linear)

**When to use:** the user wants to connect. The user
wants to integrate. The agent is a hub.

**Pros:**
- Connected (the integrations are connected)
- Comprehensive (the integrations are comprehensive)
- Powerful (the integrations are powerful)

**Cons:**
- Complex (the integrations are complex)
- Coupled (the integrations are coupled to external
  services)
- Risk (the integrations can fail)

## The 4 together

The 4 are the extension models. The models are the
flexibility. The flexibility is the value.

| Model | Granularity | Best for |
|---|---|---|
| Tools | Single function | Functional |
| Skills | Bundle | Reusable |
| Plugins | Third-party | Extensible |
| Integrations | External service | Connected |

The model that matches the need is the right model.

## The 80/20

80% of the value comes from:
- Tools (the agent is functional)
- Skills (the agent is reusable)

20% comes from:
- Plugins (the agent is extensible)
- Integrations (the agent is connected)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent functional? (tools)
- Is the agent reusable? (skills)
- Is the agent extensible? (plugins)
- Is the agent connected? (integrations)

The right answer is the right model at the right cost.

## The lesson

4 models. 1 extension. 1 lesson: support all 4.

The agent that supports all 4 is the flexible agent. The
agent that supports 1 is the rigid agent. The flexible
agent is adopted. The rigid agent is not.

The agent era is here. The extension is the design. The
design is the choice. The choice is the discipline.
