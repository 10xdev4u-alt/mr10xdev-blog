---
title: "The 5 ways to think about agent evolution (in production)"
description: "5 ways to think about agent evolution: v1, v2, v3, v4, v5. The lifecycle of an agent. The framework, the examples, the lesson."
date: 2026-02-03
tags: ["evolution", "agents", "lifecycle"]
---

5 ways to think about agent evolution: v1, v2, v3, v4, v5.
The lifecycle of an agent. The framework, the examples, the
lesson.

## Version 1: The prototype

The agent is a script. The agent is run by hand. The agent
is a hack.

**Examples:**
- A Python script that posts a comment when an issue is
  opened.
- A cron job that sends a Slack message when a PR is merged.
- A Makefile that runs the LLM and posts the result.

**When to use:** the user wants to learn. The user wants to
test. The user wants to fail fast.

**Pros:**
- Fast to build (1 day)
- Easy to change (just edit the script)
- Easy to throw away

**Cons:**
- Not maintainable
- Not scalable
- Not testable

## Version 2: The product

The agent is a tool. The agent is deployed. The agent is a
service.

**Examples:**
- A GitHub Action that runs the LLM
- A webhook handler that calls the LLM
- A CLI tool that runs the LLM

**When to use:** the agent is valuable. The user wants
reliability. The user wants observability.

**Pros:**
- Reliable (deployed, tested)
- Observable (logs, metrics, traces)
- Maintainable (code, tests, CI)

**Cons:**
- Slow to change (need to deploy)
- Need to maintain (CI, CD, infra)
- Need to scale (handle load)

## Version 3: The platform

The agent is a framework. The agent is configurable. The
agent is reusable.

**Examples:**
- A YAML-driven agent config
- A library that other teams can use
- A template that other projects can copy

**When to use:** the agent is shared. The user wants to
empower others. The user wants to scale.

**Pros:**
- Reusable (other teams can use)
- Configurable (no code changes)
- Documented (the docs are the API)

**Cons:**
- Slow to build (months)
- Need to support (multiple users)
- Need to evolve (the API is a contract)

## Version 4: The ecosystem

The agent is a community. The agent has contributors. The
agent has a marketplace.

**Examples:**
- An open-source repo with 100 contributors
- A marketplace of pre-built agents
- A community of agent builders

**When to use:** the agent is the default. The user wants to
lead. The user wants to grow.

**Pros:**
- Scalable (the community does the work)
- Diverse (multiple perspectives)
- Resilient (the project doesn't depend on one person)

**Cons:**
- Slow to evolve (need consensus)
- Need to manage (the community, the codebase)
- Need to fund (the project, the maintainers)

## Version 5: The standard

The agent is a category. The agent is the default. The
agent is the answer.

**Examples:**
- The "git agent" is a category (gitagent, husky, etc.)
- The "PR agent" is a category (codeball, etc.)
- The "doc agent" is a category (mintlify, etc.)

**When to use:** the agent is the leader. The user wants to
define the category. The user wants to own the future.

**Pros:**
- Default (the user is the leader)
- Network effects (more users, more value)
- Moat (the user has the brand)

**Cons:**
- Slow to innovate (the user is the incumbent)
- Need to defend (competitors)
- Need to evolve (the user is the target)

## The 5 versions together

The 5 are the evolution. The evolution is the lifecycle.
The lifecycle is the journey.

| Version | What it is | Time to build |
|---|---|---|
| v1: Prototype | A script | 1 day |
| v2: Product | A tool | 1 month |
| v3: Platform | A framework | 1 quarter |
| v4: Ecosystem | A community | 1 year |
| v5: Standard | A category | 5 years |

The journey is long. The journey is the work. The work is
the agent.

## The 80/20

80% of the value comes from:
- v1 (the user learns)
- v2 (the user ships)

20% comes from:
- v3 (the user scales)
- v4 (the user grows)
- v5 (the user leads)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

5 versions. 1 evolution. 1 lesson: build the right version.

The agent that builds the right version is the agent that
succeeds. The agent that builds the wrong version is the
agent that fails.

The agent era is here. The evolution is the design. The
design is the choice. The choice is the discipline.
