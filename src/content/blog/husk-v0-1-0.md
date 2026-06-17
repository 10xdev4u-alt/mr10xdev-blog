---
title: "Husk v0.1.0: the beginning"
description: "v0.1.0 of Husk: a minimal TypeScript agent framework. Anthropic, OpenAI, Ollama. The smallest thing that could work."
date: 2026-06-12
tags: ["husk", "release", "v0-1"]
---

Husk v0.1.0 is the first release. It's intentionally tiny:

## What shipped

- A `run()` function that takes a system prompt + a user message and
  returns the model's response.
- A `streamRun()` function that yields chunks as they arrive.
- Three providers: Anthropic, OpenAI, Ollama.
- 13 tests, 100% pass rate.
- ~150 lines of source.

That's it. No tools. No memory. No MCP. No observability. Just a thin
wrapper around the LLM APIs that gets the model name and the API key
right.

## Why so small

v0.1.0's job is to be the smallest thing that could possibly work.
It's the "1.0" of a different curve — the curve where each version
adds one feature.

If you can't ship v0.1.0, you can't ship the next 9 versions. The
discipline of "the smallest thing" is what makes the rest possible.

## The pattern

Husk's v0.1.0 → v0.9.0 release cadence looks like:

```
v0.1.0  — chat completions
v0.2.0  — tool framework
v0.3.0  — vector stores
v0.4.0  — init scaffolding
v0.4.1  — CI auto-publish
v0.5.0  — streaming + validation
v0.6.0  — MCP client + tool approval
v0.7.0  — MCP server + sqlite-vec
v0.8.0  — vector filter + Gemini
v0.9.0  — auto-retry + context window mgmt
```

Each version:
- Is atomic (one feature)
- Has its own CHANGELOG entry
- Has its own tests
- Ships via the same tag-push → npm flow

After 9 releases in one day, you have a library that's:
- Battle-tested (real use, real bugs, real fixes)
- Well-documented (CHANGELOG doubles as a tutorial)
- Stable (the API didn't churn, it grew)
- Known (10 releases = 10 chances to be on someone's radar)

## Stats

- 30 commits
- 13 tests
- 45KB lib bundle

## What I learned

1. **Ship the smallest thing.** v0.1.0 has no tools, no memory, no
   nothing. It works. That's the foundation.
2. **Each version is a story.** v0.1.0 is "I can call Claude." v0.2.0
   is "I can use tools." The CHANGELOG is the story arc.
3. **CI auto-publishes from v0.4.1.** Every release after that is
   the same `git tag && git push` ritual. The infrastructure pays
   for itself within 3 releases.

Install: `npm install @princetheprogrammerbtw/husk@latest`
