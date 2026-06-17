---
title: "How to write the perfect agent README"
description: "The README is the front door. Most are bad. The 7 sections, the 5 anti-patterns, the templates. The README that gets users in 5 minutes."
date: 2026-04-03
tags: ["readme", "agents", "best-practices"]
---

The README is the front door. Most are bad. The 7 sections, the
5 anti-patterns, the templates. The README that gets users in 5
minutes.

## The 7 sections

### 1. The headline

The one-liner. What is this? Who is it for?

```markdown
# <project name>

> Persistent, versioned AI agents that live in your GitHub repository.
```

Not:
```markdown
# <project name>

> A framework for building agentic systems using LLMs and tools.
```

The first is specific. The user knows if it's for them. The
second is vague. The user has to read more.

### 2. The what (2-3 sentences)

What does this do? Why does it exist?

```markdown
## What

`gitagent` lets you declare AI agents in your repo as plain
Markdown files. The agents react to GitHub events, learn from
memory, and commit their improvements back.
```

Not:
```markdown
## Overview

In today's rapidly evolving landscape of AI and automation, the
need for intelligent systems that can interact with our tools
and data has never been greater. This project aims to address
this need by providing a flexible framework for...
```

The first is 2 sentences. The user can read in 10 seconds. The
second is 50 words of fluff. The user gives up.

### 3. The install (1-3 commands)

How to get started. The minimum to run.

```markdown
## Install

```bash
npm install -g gitagent
```

Then in your repo:
```bash
gitagent init my-agent
```
```

Not:
```markdown
## Installation

First, ensure you have Node.js v20 or higher installed. Then
clone the repository using git. After cloning, navigate to
the project directory and run npm install to install the
dependencies. You may also need to set up environment variables
for the various integrations...
```

The first is 2 commands. The user is running in 30 seconds. The
second is 50 words of prerequisites. The user gives up.

### 4. The quick start (5-10 lines)

A complete, runnable example. The user can copy-paste and see
results.

```markdown
## Quick start

```bash
mkdir my-agent-repo && cd my-agent-repo
gitagent init triage
gitagent validate
gitagent dev -e issues.opened -p ./fixture.json
```
```

Not:
```markdown
## Quick start

To get started with `gitagent`, you'll need to first set up
a project, then create a manifest, then configure your tools,
then run the agent. Here's an example of how to do this:
...
```

The first is 4 commands. The user is running in 30 seconds. The
second is paragraphs. The user gives up.

### 5. The features (bullet list)

What can this do? The 5-10 things the user will care about.

```markdown
## Features

- Declare agents as `.github/agents/<name>.md` files
- React to GitHub webhooks (issues, PRs, comments, releases)
- Persistent memory (git, SQLite, in-memory)
- Standard tools (comment, label, close, create PR, ...)
- Provider-agnostic (Anthropic, OpenAI, OpenAI-compatible)
- Approval flow for write tools
- Observability (Langfuse, OTel)
- Multi-agent coordination
- CLI: `init`, `validate`, `dev`, `serve`, `memory`, `logs`
```

Not:
```markdown
## Features

- Comprehensive agent framework with full LLM support
- Advanced memory management with multiple backends
- Extensive tool library for GitHub integration
- Sophisticated approval and observability systems
```

The first is specific. The user knows what they're getting.
The second is adjectives. The user has to read the docs.

### 6. The documentation (links)

Where to learn more. The user wants depth.

```markdown
## Documentation

- [Manifest spec](docs/manifest-spec.md) - the agent config format
- [Tools](docs/tools.md) - the standard tool library
- [Architecture](docs/architecture.md) - how it works
- [Providers](docs/providers.md) - LLM provider support
- [Security](SECURITY.md) - the threat model and mitigations
```

Not:
```markdown
## Documentation

See the docs folder for more information.
```

The first is specific. The user knows where to go. The second
is vague. The user has to dig.

### 7. The license + contributing (1 line each)

The boring stuff. The user wants to know.

```markdown
## License

MIT

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
```

Not:
```markdown
## License

This project is released under the MIT License. See LICENSE for
the full text. By using this software, you agree to the terms
described therein...

## Contributing

We welcome contributions from the community! To contribute,
please fork the repository, create a feature branch, make your
changes, run the tests, push your branch, and open a pull
request. Please ensure your code follows our style guide...
```

The first is 1 line. The user can find the details. The second
is a wall of text. The user gives up.

## The 5 anti-patterns

### Anti-pattern 1: The wall of text

The README is 10,000 words. The user has to scroll forever. The
user gives up.

The fix: the README is 200-400 words. Links to deeper docs.

### Anti-pattern 2: The marketing

The README is "the most advanced, AI-powered, enterprise-grade
solution." The user is skeptical. The user gives up.

The fix: facts, not adjectives. Show, don't tell.

### Anti-pattern 3: The dependencies

The README starts with "Before you begin, ensure you have the
following: Node.js v20+, npm v10+, git v2.30+, openssl v3+, ..."

The user has to read 10 prerequisites. The user gives up.

The fix: assume the user has the basics. Mention only the
non-obvious ones.

### Anti-pattern 4: The missing example

The README explains the theory but has no working example. The
user has to read 5 pages to find one. The user gives up.

The fix: a copy-paste example in the first 100 lines.

### Anti-pattern 5: The no-next-step

The README has the example but doesn't say what to do next.
The user runs the example, sees output, and stops. The user
doesn't know where to go.

The fix: at the end, link to the next step ("Now try editing
the manifest" or "Now read the manifest spec").

## The 5-second test

The README passes the 5-second test if:
- A new user can understand what the project does in 5 seconds
- A new user can install in 5 minutes
- A new user can run an example in 5 minutes
- A new user can find the next step in 5 seconds
- A new user can find the license in 5 seconds

If any of these fail, the README is failing. Fix the README.

## The template

```markdown
# <name>

> <one-line description>

## What

<2-3 sentences.>

## Install

```bash
<install command>
```

## Quick start

```bash
<5-line runnable example>
```

## Features

- <feature 1>
- <feature 2>
- <feature 3>
- <feature 4>
- <feature 5>

## Documentation

- <link to docs>
- <link to examples>
- <link to API reference>

## License

MIT
```

200-400 words. 7 sections. The standard. The template is the
starting point.

## The lesson

7 sections. 5 anti-patterns. 1 template.

The README is the front door. The front door should be open.
The open door is the contract. The contract is the project.

The agent that has a good README is usable. The agent that has
a bad README is a mystery. The choice is yours.

The agent era is here. The README is the project. Write it
well.
