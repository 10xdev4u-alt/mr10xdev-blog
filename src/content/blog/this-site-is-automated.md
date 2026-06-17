---
title: "This site is auto-maintained by AI"
description: "The blog you're reading right now is kept up-to-date by three gitagent agents that run in the repo. Here's how."
date: 2026-06-17
tags: ["gitagent", "meta", "ai", "devtools"]
---

This blog you're reading is a real-world deployment of [gitagent](https://github.com/10xdev4u-alt/gitagent).
Three agents run in the repo, declared in `.github/agents/`:

## The three agents

### `triage`
Triages new issues. Auto-labels them, asks for repro details on bugs,
welcomes first-time contributors, closes obvious duplicates. Wakes up on
`issues.opened`.

### `doc`
Watches for merged PRs and weekly schedule. If a PR changed public API
or behavior, the agent drafts a doc update as a PR. I review and merge.

### `release`
When I push a git tag, the agent drafts a release post. The post gets
a PR. I review, edit, and merge. No manual release notes ever again.

## Why this matters

Most "AI for blogging" tools are SaaS dashboards that have nothing to do
with your repo. They're disconnected, opaque, and you can't audit them.

This site is different:

- **Every agent decision is a commit.** Audit trail in git.
- **Every agent memory is a file.** I can see what it's learned.
- **Every agent prompt is a Markdown file.** I can edit it.
- **Every agent is a peer.** It proposes, I approve, then it executes.

## The real payoff

When I get a new feature request for gitagent itself, here's the flow:

1. User opens an issue on the gitagent repo
2. The `triage` agent greets them, labels the issue
3. I read the issue
4. I open a PR with the feature
5. The `doc` agent drafts a docs update
6. I merge both
7. The `release` agent drafts a release post
8. I post it here

Eight touchpoints, all of them versioned. None of them are black boxes.

That's the dream. A blog that builds itself while you build the tools
that build the blog.
