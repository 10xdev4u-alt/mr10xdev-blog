---
title: "The git-as-infrastructure thesis"
description: "Why I keep building things on top of git: issues-as-commits, agents-in-repos, repos-as-config. Git is the only tool with a 15-year audit trail."
date: 2026-06-10
tags: ["git", "philosophy", "infrastructure"]
---

I've built a few things in the "git-as-infrastructure" lane:

- **gitissues** — issues are commits. A CLI for tracking work directly in git history.
- **gitchain-protocol** — repos as a chain. (Early work, dormant.)
- **.git-as-db** — git refs as a key-value store.
- **gitagent** — agents live in repos. (This site uses it.)

The thesis: **git is the only piece of software infrastructure with a 15-year audit trail.**

Everything else is a server. Git is a protocol + a DAG + a content-addressed
store. It's:

- **Distributed** — no single point of failure
- **Cryptographically signed** — every commit is signed
- **Versioned by default** — history is the feature
- **Queryable** — `git log` is a database query
- **Self-hostable** — no vendor lock-in
- **Universally understood** — every dev knows it

## The "agent in a repo" pattern

When you put an AI agent in `.github/agents/`:

- The agent's prompt is a file (auditable)
- The agent's memory is a directory (versioned)
- The agent's actions are commits (traceable)
- The agent's failures are revertable (git revert)
- The agent's evolution is a PR (reviewable)

This is more than "CI for AI". It's AI as a first-class citizen of the
repo. The agent is a peer to the human maintainer. It proposes; you
approve; it commits.

## Why I keep doing this

The reason I keep building in this lane is that I see the same pattern
over and over:

- SaaS dashboards for X
- Local CLI for X
- Some bespoke config format for X
- A new database/queue/cache for X

When the same problem shows up for the 5th time, it's time to ask:
is there a primitive I'm missing?

Git is the primitive. It's the only thing that gives you:

- Free version control
- Free audit trail
- Free collaboration
- Free history
- Free review
- Free rollback

I want to keep finding places where the answer is "put it in a git
repo, treat the repo as the database, treat commits as the API."

If you're building something in this space, I'd love to talk. The lane
is wide and the primitives are good.
