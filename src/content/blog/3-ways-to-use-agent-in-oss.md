---
title: "The 3 ways to use an agent in your OSS project"
description: "3 patterns for integrating an agent into an OSS project. The sidecar (separate repo), the embedded (in the same repo), the platform (as a service). Tradeoffs, examples, when to use which."
date: 2026-04-07
tags: ["oss", "agents", "integration"]
---

3 patterns for integrating an agent into an OSS project. The
sidecar (separate repo), the embedded (in the same repo), the
platform (as a service). Tradeoffs, examples, when to use which.

## Pattern 1: The sidecar

The agent lives in a separate repo. The OSS project references
it via a manifest URL or a config file.

**Example:**
- The OSS project is `my-oss-project`
- The agent is `my-oss-project-agent` (a separate repo)
- The agent watches the project's issues, opens PRs
- The agent is installed via a GitHub App or a webhook

**Pros:**
- The agent is independent of the project's tech stack
- The agent can be developed and versioned separately
- The agent can be reused across multiple projects

**Cons:**
- Two repos to maintain
- The agent is one more thing for users to install
- Updates require syncing the agent with the project

**When to use:** the agent is general-purpose, the project has a
defined interface, you want to support multiple agents.

## Pattern 2: The embedded

The agent lives in the same repo as the OSS project. The
manifests are in `.github/agents/`. The user installs the agent
once when they install the project.

**Example:**
- The OSS project is `my-oss-project`
- The agent manifests are in `.github/agents/<name>.md`
- The agent is "installed" by deploying the project
- The agent uses the project's own tools (no external API)

**Pros:**
- One repo to maintain
- The agent is "part of" the project
- Updates are tied to the project's releases

**Cons:**
- The agent is tied to the project's tech stack
- The agent can't be reused across projects
- The project has to be GitHub-native

**When to use:** the agent is project-specific, you want zero
extra setup, the project is GitHub-native.

This is the pattern gitagent uses. The agent manifests are in
`.github/agents/`. The user installs gitagent once. The agents
work for any project that has the manifests.

## Pattern 3: The platform

The agent is a hosted service. The user signs up, connects
their GitHub, and the agent runs in the cloud.

**Example:**
- The service is `agent-platform.com`
- The user signs up with GitHub OAuth
- The user selects which repos to enable agents for
- The agents run on the platform's infrastructure
- The user pays per use

**Pros:**
- Zero setup for the user
- The platform handles the infrastructure
- The platform can support multiple agent types

**Cons:**
- The platform owns the user's data
- The platform is a recurring cost
- The platform is a vendor lock-in

**When to use:** the user is not technical, the agent is a
product (not a tool), the user is willing to pay.

## The comparison

| Aspect | Sidecar | Embedded | Platform |
|---|---|---|---|
| Setup | One install | Already there | One sign-up |
| Tech stack | Independent | Same as project | N/A (cloud) |
| Maintenance | Two repos | One repo | The platform |
| Cost | Free (OSS) | Free (OSS) | Per use |
| Vendor lock-in | Low | Low | High |
| Best for | Multi-project | Project-specific | Non-technical |

## The 80/20

80% of OSS projects will use the embedded pattern. The agent
is part of the project. The user gets zero extra setup.

20% will use the sidecar or platform. The agent is reusable
across projects, or the user is not technical.

The pattern is a design choice. The choice is constrained by
the use case. The use case is the project.

## The hybrid

Some projects use a hybrid. The default is embedded. The
sidecar is for the power-user agent (e.g., a research agent
that needs more capabilities). The platform is for the SaaS
version.

The hybrid is rare but powerful. The user gets the embedded
agent for free. The user can opt into the sidecar for advanced
features. The user can opt into the platform for zero setup.

## The migration

The migration between patterns:
- **Sidecar → Embedded:** move the manifests into the project's
  `.github/agents/`. The user has one less repo to clone.
- **Embedded → Sidecar:** extract the manifests into a separate
  repo. The user can share the agent across projects.
- **Embedded → Platform:** wrap the agent in a SaaS. The user
  pays for convenience.

The migration is rare. Most projects pick one pattern and
stick with it.

## The lesson

3 patterns. 3 tradeoffs. 1 choice.

The pattern is a design decision. The decision is constrained
by the use case. The use case is the project. The project is
the answer.

The agent era is here. The patterns are the same. The choice
is yours. Pick the pattern that fits the project. Iterate.
The pattern that fits is the one that wins.
