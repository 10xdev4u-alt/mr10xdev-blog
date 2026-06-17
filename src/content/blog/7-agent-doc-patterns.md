---
title: "The 7 patterns of agent documentation"
description: "7 documentation patterns for AI agent projects. The README that doesn't suck, the architecture doc, the manifest spec, the tool reference, the examples, the security model, the troubleshooting guide. Templates for each."
date: 2026-04-13
tags: ["docs", "agents", "best-practices"]
---

7 documentation patterns for AI agent projects. The README that
doesn't suck, the architecture doc, the manifest spec, the tool
reference, the examples, the security model, the troubleshooting
guide. Templates for each.

## Pattern 1: The README

The README is the front door. Most READMEs are bad. Here's the
template:

```markdown
# <project name>

> One-sentence description.

## What

2-3 sentences. What is this? Who is it for?

## Install

```bash
npm install -g <name>
```

## Quick start

A complete, runnable example. 5-10 lines. The user can copy-paste
and see results.

## Features

- Bullet list of features
- One line each
- No marketing speak

## Documentation

Link to the full docs.

## Contributing

How to contribute. Link to CONTRIBUTING.md.

## License

MIT (or whatever).
```

The README is 100-200 lines. The README is the entry point. The
README is the contract.

## Pattern 2: The architecture doc

The user wants to understand the system. The architecture doc
explains the design.

```markdown
# Architecture

## Mental model

A diagram + 3-5 sentences. What's the system? How does it work?

## Components

For each major component:
- What it does
- How it's used
- When to extend

## Lifecycle

The end-to-end flow. The data flow. The control flow.

## Tradeoffs

What was chosen. What was rejected. Why.
```

The architecture doc is 500-1500 lines. The user reads it once
to understand. The user references it later for details.

## Pattern 3: The manifest spec

The user wants to write a manifest. The spec tells them how.

```markdown
# Manifest spec

## File location

Where the file goes.

## Frontmatter fields

For each field:
- Type
- Required or optional
- Default value
- Description
- Example

## Event triggers

List of supported events. What each one does.

## Memory

How memory works. The backends. The tradeoffs.

## Tools

How tools work. The standard tools. How to add custom tools.

## Model

How to configure the model. The supported providers.

## Limits

The limits and what they mean.

## Approval

The approval flow. The policies.
```

The manifest spec is 1000-3000 lines. The user references it
while writing. The user trusts it because it's complete.

## Pattern 4: The tool reference

The user wants to know what tools are available. The tool
reference lists them.

```markdown
# Tool reference

For each tool:
- Name
- Description
- Input schema (with examples)
- Output schema (with examples)
- Required permissions
- Common errors
```

The tool reference is 500-2000 lines. The user scans it for the
right tool. The user trusts it because it's complete.

## Pattern 5: The examples

The user wants to see real usage. The examples show it.

```
examples/
├── basic/
│   └── agent.md      # The simplest possible agent
├── with-tools/
│   └── agent.md      # An agent with custom tools
├── with-memory/
│   └── agent.md      # An agent with persistent memory
├── with-streaming/
│   └── agent.md      # An agent with streaming responses
└── with-mcp/
    └── agent.md      # An agent that uses MCP
```

Each example is a complete, runnable agent. Each example is 50-
100 lines. Each example is a starting point for the user.

The examples are the documentation for the impatient. The user
who wants to see it work before reading the spec.

## Pattern 6: The security model

The user wants to know: is this safe to use? The security model
answers.

```markdown
# Security

## Threat model

What threats does the project defend against? What threats
are out of scope?

## Mitigations

For each threat, what does the project do? Approval flows.
Permission boundaries. Input validation. Output sanitization.

## Limits

What the project does NOT defend against. The user should
know.

## Reporting

How to report a vulnerability. The response time. The disclosure
policy.
```

The security model is 300-1000 lines. The user reads it before
deploying to production. The user trusts it because it's
honest.

## Pattern 7: The troubleshooting guide

The user has a problem. The troubleshooting guide helps.

```markdown
# Troubleshooting

## Common errors

For each common error:
- The error message
- The cause
- The fix
- How to prevent

## Debugging

How to debug. The tools. The commands. The logs.

## FAQ

Frequently asked questions. The answers. The links.
```

The troubleshooting guide is 200-500 lines. The user finds their
problem and the fix. The user trusts the project because the
fixes are documented.

## The 7 together

The 7 patterns compose. The README is the front door. The
architecture is the design. The spec is the contract. The tool
reference is the API. The examples are the demo. The security
model is the trust. The troubleshooting is the support.

A project with all 7 is well-documented. A project without is
a hobby project.

## The 80/20

80% of the value comes from:
- **README** (the front door)
- **Examples** (the demo)
- **Tool reference** (the API)

20% of the value comes from:
- **Architecture** (the design)
- **Spec** (the contract)
- **Security** (the trust)
- **Troubleshooting** (the support)

If you're short on time, do the 80% first. Add the 20% as you
grow.

## The cost

Each pattern has a cost:
- **README:** 1-2 hours
- **Architecture:** 4-8 hours
- **Spec:** 8-16 hours
- **Tool reference:** 4-8 hours
- **Examples:** 8-16 hours
- **Security:** 2-4 hours
- **Troubleshooting:** 2-4 hours

Total: 30-60 hours of writing. Worth it.

## The lesson

7 patterns. 30-60 hours. 1 well-documented project.

The 7 patterns are the standard. The standard is what users
expect. The expectation is what makes the project durable.

The agent era is here. The docs are the project. The project
without docs is a toy. The project with docs is a product.
