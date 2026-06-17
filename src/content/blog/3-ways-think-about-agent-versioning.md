---
title: "The 3 ways to think about agent versioning (in production)"
description: "3 ways to think about versioning: manifest, config, code. Each is a different version with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-20
tags: ["versioning", "agents", "production"]
---

3 ways to think about versioning: manifest, config, code.
Each is a different version with different tradeoffs. The
framework, the examples, the lesson.

## Version 1: Manifest

The agent's manifest is versioned. The agent's behavior
is in the manifest. The manifest is the version.

**Examples:**
- `v0.1.0` — initial manifest
- `v0.2.0` — added triage labels
- `v0.3.0` — added doc agent

**When to use:** the agent is a YAML/JSON file. The agent
is in a repo. The agent is config-driven.

**Pros:**
- Simple (just commit a new version)
- Auditable (git log shows the changes)
- Rollback (git revert)

**Cons:**
- Limited (the manifest is static)
- Coupling (the manifest is tied to the framework
  version)
- Drift (the manifest can drift from the framework)

## Version 2: Config

The agent's config is versioned. The agent's behavior is
in the config. The config is the version.

**Examples:**
- `config.json` — the agent's config
- `config.dev.json` — the dev config
- `config.prod.json` — the prod config

**When to use:** the agent has many configs. The agent is
multi-environment. The agent is multi-tenant.

**Pros:**
- Flexible (the config can be per-env)
- Testable (the config can be tested)
- Reversible (the config can be reverted)

**Cons:**
- Complex (the config can be complex)
- Validation (the config must be validated)
- Coupling (the config is tied to the agent)

## Version 3: Code

The agent's code is versioned. The agent's behavior is
in the code. The code is the version.

**Examples:**
- `v1.0.0` of the agent library
- `v1.1.0` of the agent library
- `v2.0.0` of the agent library (breaking changes)

**When to use:** the agent is a library. The agent is
imported. The agent is a dependency.

**Pros:**
- Standard (semver is well-known)
- Compatible (the version is declared)
- Documented (the changelog is the doc)

**Cons:**
- Coupling (the code is tied to the framework)
- Friction (the user has to upgrade)
- Effort (the maintainer has to support)

## The 3 together

The 3 are the versioning. The versioning is the
discipline. The discipline is the value.

| Version | What it versions | When to use |
|---|---|---|
| Manifest | The agent's behavior | Config-driven agents |
| Config | The agent's settings | Multi-env agents |
| Code | The agent's logic | Library agents |

The version that matches the agent is the right version.

## The 80/20

80% of the value comes from:
- Manifest (the agent is config-driven)
- Code (the agent is a library)

20% comes from:
- Config (the agent is multi-env)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent config-driven? (manifest)
- Is the agent multi-env? (config)
- Is the agent a library? (code)

The right answer is the right version at the right cost.

## The lesson

3 versions. 1 versioning. 1 lesson: pick the right one.

The version that matches the agent is the right version.
The version that doesn't match is the wrong version.

The agent era is here. The versioning is the design. The
design is the choice. The choice is the discipline.
