---
title: "Codebuff: the multi-agent editor I'm studying"
description: "I have a local clone of Codebuff — a multi-agent code editor — to study how they do best-of-N agent selection, propose/apply tool split, and handle 200K lines of TypeScript. Notes on architecture."
date: 2026-06-08
tags: ["codebuff", "ai", "architecture", "study"]
---

I have a local clone of Codebuff at `~/CdBf`. ~200K lines of TypeScript.
79 agents. 28 typed tools. 63 supported models. It's a multi-agent
code editor that does best-of-N generation, has a sophisticated
prompt system, and is one of the most ambitious AI coding projects
I've seen.

This post is my notes on what I'm learning from it.

## The mental model

Codebuff isn't one agent. It's 79 agents coordinated by a planner.
The planner breaks the user's request into steps. Each step is
handled by a specialist agent. The agents communicate via a shared
context.

```
User request
   │
   ▼
Planner agent
   │  (decomposes into steps)
   ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ File editor │  │ Searcher    │  │ Test writer │
└─────────────┘  └─────────────┘  └─────────────┘
   │                 │                 │
   └─────────────────┼─────────────────┘
                     ▼
              Shared context
                     │
                     ▼
              Final result
```

## What I'm stealing

### 1. Propose/apply tool split

Most agent frameworks have one tool: "edit this file." Codebuff has
two:
- **propose** — generates the change, shows the diff
- **apply** — commits the change to disk

This is a permission boundary. The agent can propose freely; applying
requires approval. Smart.

### 2. Best-of-N with confidence scores

When the planner is unsure, it generates N candidate plans and picks
the one with the highest confidence score. The score is computed
from:
- Did the candidate cover all the user's requirements?
- Did it produce a syntactically valid plan?
- Did it match the project's style?

The result: the agent gets a "second opinion" without the user
seeing it.

### 3. Knowledge files

Codebuff stores its "knowledge" as plain text files in a `.buff/`
directory. The planner reads these files before generating a plan.
The user can edit them.

This is the same idea as gitagent's memory, but more explicit. The
knowledge is the agent's "training" — except the user can edit it.

### 4. Handle steps generator

The core loop is a `handleSteps()` generator. The agent yields steps
one at a time. The renderer consumes them. This is async-generator
based, not promise-based. The benefit: you can stream progress to
the UI without breaking the algorithm.

I want to use this pattern in Husk. The current `runAgent` is
promise-based. A generator would be more flexible.

## What I'm NOT stealing

### 1. 200K LOC

That's a lot of code. Husk is at ~3K LOC. The 200K includes a CLI,
a web UI, a database layer, billing, multi-tenancy, etc. I don't
need any of that. Husk is a library, not a product.

### 2. 79 agents

Too many. I can't keep 79 specialists in my head. Husk will have
1-N agents per repo, configured by the user. The user is the
"agent manager."

### 3. The product complexity

Codebuff is a product. It has a web UI, a desktop app, billing, and
a team. Husk is a library. The complexity difference is 10x.

## The single biggest lesson

Codebuff is structured around the idea that **the agent is a
collaborator, not a tool.** The agent proposes; the user approves.
The agent learns; the user edits. The agent is on the team.

This is a fundamental shift from the "agent as autocomplete"
mental model. Codebuff treats the agent as a peer with its own
memory, its own goals, and its own opinions.

I'm going to bake this into gitagent. The agent's memory is a
directory. The agent's goals are a manifest. The agent's opinions
are the personality prompt. The user can edit all three.

## The next step

I'm going to spend a week reading Codebuff's source code in detail.
The plan:
- Read the `agents/` directory
- Read the `tools/` directory
- Read the `knowledge/` directory
- Read the `backend/` directory
- Skim the `cli/` and `client-ui/` directories

After that, I'll write a "lessons learned" doc and update Husk +
gitagent with the best ideas.

If you're interested in AI agent architecture, [clone the
repo](https://github.com/CodebuffAI/codebuff) and read along.
200K LOC is a lot, but the structure is clear once you get past
the boilerplate.
