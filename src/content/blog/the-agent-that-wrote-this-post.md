---
title: "The agent that wrote this blog post"
description: "A meta-post about the agent (gitagent) that maintains this blog. How it works, what it does, what it doesn't do (yet). The recursive loop: an agent that maintains the docs of the framework that powers it."
date: 2026-04-17
tags: ["gitagent", "meta", "recursive"]
---

This blog you're reading is a real-world deployment of
[gitagent](https://github.com/10xdev4u-alt/gitagent). Three
agents run in the repo, declared in `.github/agents/`. They
maintain the blog as a side effect of running.

## The recursive loop

The agent that maintains this blog is itself built with a
framework. The framework is gitagent. The framework is built
with TypeScript. The TypeScript is shipped via npm. The npm is
maintained by... well, humans.

The chain is:
- npm → TypeScript → gitagent → agents → this blog → you

The agent at the bottom of the chain is a meta-agent. It
maintains the blog. The blog explains the framework. The
framework powers the agent. The cycle continues.

This is the recursive loop. The agent maintains the docs of
the framework that powers it.

## What the agents do

Three agents run in this repo:

### `triage`
- **Trigger:** `issues.opened`
- **Job:** label new issues, ask for repro, close duplicates
- **Tools:** post_comment, add_labels, search_issues, close_issue
- **Approval:** required for write

### `doc`
- **Trigger:** `pull_request.closed` (merged), `schedule.weekly`
- **Job:** keep `/projects` and `/now` in sync with repo changes
- **Tools:** get_file, create_pr, post_comment, memory tools
- **Approval:** required for write

### `release`
- **Trigger:** `release.published`, `manual`
- **Job:** draft a release blog post on tag push
- **Tools:** create_pr, post_comment, memory tools
- **Approval:** required for write

Each agent is a single `.github/agents/<name>.md` file. The
file is the manifest. The manifest is the config. The config
is the contract.

## How the loop works

When a new issue is opened:
1. GitHub sends a webhook to the gitagent server
2. The server verifies the signature
3. The server matches the event to the `triage` agent
4. The server loads the manifest from the repo
5. The server builds the run context (memory, tools, provider)
6. The agent runs: LLM call → tool call → tool call → text
7. The agent posts a comment, adds a label
8. The user is notified

When a release is published:
1. GitHub sends a webhook for `release.published`
2. The server matches the event to the `release` agent
3. The agent reads the release notes
4. The agent searches for related issues and PRs
5. The agent drafts a blog post in `src/content/blog/`
6. The agent opens a PR with the draft
7. I review and merge

When a PR is merged:
1. GitHub sends a webhook for `pull_request.closed` (merged)
2. The server matches the event to the `doc` agent
3. The agent reads the recent PRs
4. The agent updates the docs
5. The agent opens a PR with the doc updates
6. I review and merge

## What the agents don't do

The agents are limited. They don't:
- Decide what's worth writing about
- Edit existing posts (only add new ones)
- Approve their own PRs
- Manage the deployment
- Handle the design (CSS, layout, etc.)

The agents are bounded. The boundaries are explicit. The human
is still in the loop for the high-stakes decisions.

## The build process

When a PR is merged, GitHub Actions:
1. Runs the CI (lint, typecheck, test, build)
2. Builds the static site
3. Deploys to GitHub Pages

The agents don't deploy. The agents don't test. The agents
just maintain the content.

## The recursive promise

The promise of gitagent is recursive. The framework maintains
the framework. The agent maintains the agent. The blog explains
the blog.

The cycle:
- A user files an issue on the framework
- The agent triages the issue
- I (or a contributor) write the fix
- The agent updates the docs
- I tag a release
- The agent drafts the release post
- The blog publishes the post
- The user reads the post

Each step is automated (where it can be) or human (where it
must be). The system is in the middle.

## The current state

As of this post:
- 3 agents running in this repo
- ~10 issues triaged automatically
- 0 release posts drafted automatically (I'm still writing
  them by hand)
- ~5 doc PRs opened automatically (a few merged, most
  rejected)

The agents are working. The agents are useful. The agents are
not yet autonomous.

## The future

The next steps for the agents:
- **`triage`:** improve the duplicate detection (currently
  ~70% accurate)
- **`doc`:** automatically merge doc PRs that are pure
  formatting
- **`release`:** actually draft the first release post (I
  haven't given it a release yet)
- **`welcome`:** (new) greet first-time contributors
- **`security`:** (new) scan PRs for common security smells
- **`dependencies`:** (new) track outdated deps

The roadmap is in the agent manifests. The manifests are in the
repo. The repo is on GitHub. The GitHub is the source of truth.

## The meta-meta

This post is itself an example of the agent's work. I wrote
this by hand. The agent didn't help (yet). But the framework
that powers the agent is what makes the blog possible.

The agent will eventually write posts like this. The agent will
eventually maintain the manifests. The agent will eventually
self-improve.

For now, the human writes. The agent maintains. The cycle
continues.

## The lesson

The agent that maintains this blog is a meta-agent. It uses the
framework to maintain the blog. The blog explains the framework.
The cycle is recursive.

The recursive loop is the promise. The promise is real. The
promise is here.

The agent era is here. The recursive loop is the future. The
future is now.

If you're building an agent, build a recursive loop. The loop
is the leverage. The leverage is the value.
