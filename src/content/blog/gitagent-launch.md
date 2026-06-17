---
title: "gitagent: persistent AI agents that live in your GitHub repo"
description: "Introducing gitagent, the open-source framework for declaring versioned, stateful AI agents as plain Markdown files in .github/agents/."
date: 2026-06-17
tags: ["gitagent", "ai", "open-source", "announcement"]
---

I'm open-sourcing **gitagent** — a framework for declaring AI agents that
live inside your GitHub repository, react to events, learn from memory,
and commit their improvements back.

The whole thing is a single `.github/agents/<name>.md` file:

```markdown
---
name: triage
triggers:
  - issues.opened
tools:
  - github.post_comment
  - github.add_labels
---

You are a careful, friendly issue triager...
```

That's it. The agent reads its own frontmatter for config, gets triggered
by GitHub events, calls the LLM, runs tools, and posts back.

## Why

Most AI agents are SaaS dashboards or local toys. They don't ship with
your code, they don't share your repo's audit trail, and they don't get
better over time.

gitagent flips that:

- The **agent is a file** in your repo.
- The **agent's memory is a directory** in your repo.
- The **agent's tools are GitHub-native** — comment, label, open PR.
- The **agent gets smarter** as memory accumulates in git.
- The **agent is a peer, not a god** — every write action is approval-gated.

## What's in v0.1

- Manifest schema (Zod-validated) with 40+ fields
- LLM providers: Anthropic, OpenAI, OpenAI-compatible
- 11 GitHub tools (post_comment, add_labels, close_issue, create_pr, etc.)
- 3 memory backends: git, in-memory, SQLite
- Episodic + semantic memory
- Multi-step agent loop with limits enforcement
- Hono-based webhook server with signature verification
- CLI: `init`, `validate`, `dev`, `serve`, `list`, `memory`, `logs`
- 180+ tests, 100% pass rate
- 4 example agents (triage, doc, release, review)

## Try it

```bash
npm install -g gitagent
cd your-repo
gitagent init triage
$EDITOR .github/agents/triage.md
gitagent validate
gitagent dev -e issues.opened -p ./fixture.json
```

The repo is at [github.com/10xdev4u-alt/gitagent](https://github.com/10xdev4u-alt/gitagent).
Stars, issues, and PRs welcome.

Next post: how this very site is maintained by gitagent.
