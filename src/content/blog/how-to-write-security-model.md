---
title: "How to write a security model for an agent"
description: "The security model is the trust contract. The 4 sections, the 5 anti-patterns, the template. How to write a security model that's honest about what you do and don't defend against."
date: 2026-03-26
tags: ["security", "agents", "process"]
---

The security model is the trust contract. The 4 sections, the
5 anti-patterns, the template. How to write a security model
that's honest about what you do and don't defend against.

## The 4 sections

### 1. The threat model

What threats does the project defend against? What threats are
out of scope?

```markdown
## Threat model

In scope:
- Forged webhooks (we verify signatures)
- Token theft (we use env vars, not constants)
- Privilege escalation (we use scoped tokens)
- Prompt injection (we validate inputs)

Out of scope:
- Compromise of GitHub itself (trust the platform)
- Compromise of the LLM provider (trust the vendor)
- A malicious user with valid credentials (assume the user is
  honest within their permissions)
- Side-channel attacks on the host (assume the host is secure)
```

The threat model is the contract. It says what you defend
against. It says what you don't. The user can decide if it's
acceptable.

### 2. The mitigations

For each threat, what does the project do?

```markdown
## Mitigations

### Forged webhooks
- Every webhook is verified with HMAC-SHA256 (`X-Hub-Signature-256`)
- The secret is in env vars, not in the manifest
- The verification is in `src/server/webhook-signature.ts`

### Token theft
- All secrets are in env vars
- Tokens are scoped to the minimum required permissions
- Tokens are rotated by the GitHub App

### Privilege escalation
- Tools are validated against the manifest's `tools:` list
- The `permissions:` block in the manifest is the source of truth
- A tool can only do what the manifest allows

### Prompt injection
- Tool inputs are validated against Zod schemas
- Tool outputs are sanity-checked
- The LLM is prompted to be honest about errors
```

The mitigations are the actions. They say what the project does.
The user can verify.

### 3. The limits

What the project does NOT defend against. Be honest.

```markdown
## Limits

We do not defend against:
- A compromised LLM provider (we trust Anthropic, OpenAI, etc.)
- A compromised user's credentials (we trust the user)
- A vulnerability in the host's OS (we trust the host)
- Side-channel attacks (timing, cache, etc.)
- A malicious agent that's been compromised at the binary level
- A 0-day in the LLM SDK or the Octokit SDK
- A 0-day in the Node.js runtime
```

The limits are the boundaries. The user should know.

### 4. The reporting

How to report a vulnerability. The response time. The
disclosure policy.

```markdown
## Reporting

If you find a security vulnerability, please **do not** open a
public issue. Email security@10xdev4u-alt.dev (or open a GitHub
Security Advisory draft) with:
- A description of the vulnerability
- Steps to reproduce
- The impact

We aim to:
- Acknowledge within 48 hours
- Ship a fix for critical issues within 7 days
- Coordinate disclosure with the reporter
```

The reporting is the response. The user knows what to do.

## The 5 anti-patterns

### Anti-pattern 1: The vague

```markdown
## Security

We take security seriously.
```

The user can't tell what you do. The user can't trust you.

### Anti-pattern 2: The marketing

```markdown
## Security

Our agent is enterprise-grade and uses military-grade security.
```

The user is skeptical. The user can't verify. The user
distrusts.

### Anti-pattern 3: The no-limits

```markdown
## Security

We are 100% secure.
```

The user knows you're lying. The user doesn't trust you.

### Anti-pattern 4: The no-reporting

```markdown
## Security

We take security seriously. If you find a bug, open a public
issue.
```

Public issues for security vulns are a known anti-pattern. The
attacker reads the issue before the fix is shipped.

### Anti-pattern 5: The all-in-one

```markdown
## Security

We have threat modeling, encryption at rest, encryption in
transit, RBAC, ABAC, MFA, SSO, audit logs, SIEM integration, ...
```

The user can't verify. The user can't trust. The user assumes
you're hand-waving.

## The template

```markdown
# Security

## Threat model

### In scope
- ...

### Out of scope
- ...

## Mitigations

### <threat 1>
- <mitigation 1>
- <mitigation 2>
- ...

### <threat 2>
- ...

## Limits

We do not defend against:
- ...

## Reporting

If you find a security vulnerability:
1. Do not open a public issue.
2. Email <security email> with a description and reproduction.
3. We aim to acknowledge within 48 hours.

## Audit

Before deploying, check:
- [ ] Secrets are in env vars
- [ ] Webhook signature is verified
- [ ] Inputs are validated
- [ ] Outputs are sanitized
- [ ] Permissions are explicit
- [ ] Approval is the default
- [ ] Audit trail is complete
```

200-500 words. 4 sections. 1 audit checklist.

## The 80/20

80% of the value comes from:
- The threat model (in scope / out of scope)
- The mitigations (the 5-6 things you do)
- The reporting (how to tell you about a bug)

20% comes from:
- The limits (what you don't defend against)
- The audit (the checklist)

Focus on the 80% first. Add the 20% as you grow.

## The test

The security model is good if:
- A new user can understand what you defend against in 2 minutes
- A security researcher can find your mitigations in 2 minutes
- A potential attacker can identify your limits in 2 minutes
- A user with a vulnerability can find the reporting channel in 30 seconds

If any of these fail, the security model is failing. Fix it.

## The lesson

4 sections. 5 anti-patterns. 1 template.

The security model is the trust contract. The contract should
be honest, specific, and verifiable. The 4 sections are the
floor. The 5 anti-patterns are the ceiling.

The agent that has a good security model is trustable. The
agent that doesn't is a mystery. The choice is yours.

The agent era is here. The security is the foundation. Write
it well. The trust compounds.
