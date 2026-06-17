---
title: "The 3 ways to think about agent secrets (in production)"
description: "3 ways to think about secrets: env vars, secret manager, none. Each is a different secrets model. The framework, the examples, the lesson."
date: 2025-12-27
tags: ["secrets", "agents", "security"]
---

3 ways to think about secrets: env vars, secret manager,
none. Each is a different secrets model. The framework, the
examples, the lesson.

## Model 1: Env vars

The secrets are in environment variables. The secrets are
in the process. The secrets are the truth.

**Examples:**
- `GITHUB_TOKEN=ghp_...`
- `ANTHROPIC_API_KEY=sk-...`
- `OPENAI_API_KEY=sk-...`

**When to use:** the agent is local. The agent is in
dev. The user controls the env.

**Pros:**
- Simple (the env is standard)
- Standard (every runtime supports env)
- Cheap (the env is free)

**Cons:**
- Insecure (the env is in the process)
- Visible (the env is in `ps`)
- Coupled (the env is tied to the runtime)

## Model 2: Secret manager

The secrets are in a secret manager. The secrets are
encrypted. The secrets are the truth.

**Examples:**
- AWS Secrets Manager
- GCP Secret Manager
- HashiCorp Vault
- Doppler

**When to use:** the agent is in production. The secrets
are sensitive. The team is large.

**Pros:**
- Secure (the secrets are encrypted)
- Auditable (the access is logged)
- Centralized (the secrets are in one place)

**Cons:**
- Cost (the secret manager costs money)
- Complexity (the secret manager is complex)
- Coupling (the secrets are tied to the manager)

## Model 3: None

The agent has no secrets. The agent is open source. The
agent is the truth.

**Examples:**
- A static analysis agent (no API keys)
- A documentation agent (no API keys)
- A self-hosted agent (no external API)

**When to use:** the agent doesn't need secrets. The agent
is self-hosted. The user wants simplicity.

**Pros:**
- Simple (no secrets to manage)
- Secure (no secrets to leak)
- Open (the agent is open)

**Cons:**
- Limited (the agent is limited)
- Coupling (the agent is tied to the user's resources)
- Cost (the user pays for the resources)

## The 3 together

The 3 are the secrets. The secrets are the security. The
security is the trust.

| Model | Security | Cost | Best for |
|---|---|---|---|
| Env vars | Low | Free | Dev |
| Secret manager | High | $$ | Prod |
| None | N/A | Free | Self-hosted |

The model that matches the need is the right model.

## The 80/20

80% of the value comes from:
- Env vars (the user is in dev)
- Secret manager (the user is in prod)

20% comes from:
- None (the user is self-hosted)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent in dev? (env vars)
- Is the agent in prod? (secret manager)
- Is the agent self-hosted? (none)

The right answer is the right model at the right cost.

## The lesson

3 models. 1 secrets. 1 lesson: pick the right one.

The model that matches the need is the right model. The
model that doesn't match is the wrong model.

The agent era is here. The secrets are the design. The
design is the choice. The choice is the discipline.
