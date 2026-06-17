---
title: "How to estimate an agent project"
description: "How long does it take to build an agent? The 5 factors that determine the time. The 80/20 of estimation. The honest numbers from real projects. Why your estimate is probably 2x too low."
date: 2026-04-01
tags: ["meta", "estimation", "process"]
---

How long does it take to build an agent? The 5 factors that
determine the time. The 80/20 of estimation. The honest numbers
from real projects. Why your estimate is probably 2x too low.

## The 5 factors

### 1. The complexity of the task

Simple tasks (classification, extraction) are fast. Complex
tasks (planning, synthesis, multi-step reasoning) are slow.

- **Simple:** 1-2 weeks for a working agent
- **Medium:** 1-2 months for a working agent
- **Complex:** 3-6 months for a working agent

### 2. The number of integrations

Each integration (GitHub, Slack, database, etc.) adds time.
Each integration has its own API, its own quirks, its own auth.

- **0 integrations:** 1-2 weeks
- **1-2 integrations:** 1-2 months
- **3-5 integrations:** 2-4 months
- **5+ integrations:** 4-6 months

### 3. The model choice

Cheap models are easy. Expensive models are easy too. The
difference is in the prompt engineering and the iteration.

- **Single model (e.g., Claude Sonnet):** 1-2 weeks for the
  first version
- **Multiple models (cascade, A/B testing):** 2-4 weeks extra
- **Fine-tuning:** 4-8 weeks extra

### 4. The memory needs

Stateless agents are fast. Stateful agents are slow.

- **Stateless (in-memory):** 1 week extra
- **File-backed (git, JSON):** 1-2 weeks extra
- **Database-backed (SQLite, Postgres):** 2-4 weeks extra
- **Vector search (semantic memory):** 2-4 weeks extra

### 5. The observability needs

Logs are fast. Tracing is slow. Cost tracking is slow.

- **Logs only:** 1-2 days
- **Tracing (Langfuse, OTel):** 1-2 weeks
- **Cost tracking:** 1-2 days
- **Full observability:** 2-4 weeks

## The formula

A rough formula for an agent project:

```
weeks = (base_complexity * 2) + integrations + memory + observability
```

Examples:
- **Simple triage agent:** 2 weeks * 2 + 1 week + 1 week + 0.5 weeks = 6.5 weeks
- **Multi-tool research agent:** 4 weeks * 2 + 2 weeks + 2 weeks + 2 weeks = 14 weeks
- **Full-featured platform:** 8 weeks * 2 + 4 weeks + 4 weeks + 4 weeks = 28 weeks

The formula is rough. The actual time depends on the team, the
unknowns, and the iterations.

## The 80/20

80% of the value comes from:
- The base complexity (the task)
- The integrations (1-2 of them)

20% comes from:
- The model choice (usually 1 model is fine)
- The memory needs (start with in-memory, upgrade later)
- The observability needs (start with logs, upgrade later)

Focus on the 80% first. Add the 20% as you grow.

## The honest numbers

From my projects:
- **Husk v0.1.0:** 1 weekend (200 lines, no tools, no memory)
- **Husk v0.8.0:** 6 weeks of focused work (60KB, 9 versions,
  229 tests)
- **gitagent v0.1.0:** 2 weeks (53 commits, 191 tests)
- **mr10xdev-blog (this site):** 1 weekend (Astro, 4 pages)

The pattern:
- 1 weekend for the MVP
- 1 month for the v1.0
- 1 quarter for the production version
- 1 year for the mature project

The numbers match the formula. The numbers are honest.

## Why your estimate is 2x too low

Your estimate is probably 2x too low because:
- You don't know the unknowns (the bugs you'll find, the
  features you'll need, the refactors you'll do)
- You underestimate the integration time (auth, error
  handling, retries)
- You underestimate the testing time (snapshot, golden, eval)
- You underestimate the documentation time (README, spec,
  examples)
- You underestimate the maintenance time (issues, reviews,
  releases)

The fix: 2x your estimate. If you think it takes 1 month, plan
for 2.

## The lesson

5 factors. 1 formula. 1 lesson: 2x your estimate.

The agent that takes 1 month to design takes 2 months to build.
The agent that takes 3 months to design takes 6 months to build.
The pattern is consistent.

The agent era is here. The estimation is the same. The 2x
rule applies. Use it.
