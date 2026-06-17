---
title: "The 4 ways to think about agent caching (in production)"
description: "4 ways to think about caching: prompt, response, tool, memory. Each is a different cache with different tradeoffs. The framework, the examples, the lesson."
date: 2026-02-07
tags: ["caching", "agents", "performance"]
---

4 ways to think about caching: prompt, response, tool,
memory. Each is a different cache with different tradeoffs.
The framework, the examples, the lesson.

## Cache 1: Prompt cache

The LLM provider caches the prompt prefix. The cache is on
the provider side. The cache is automatic.

**Examples:**
- Anthropic's prompt cache (1-hour TTL)
- OpenAI's prompt cache (5-minute TTL)
- Google Gemini's context cache

**When to use:** the prompt prefix is large. The prompt
prefix is reused. The agent is called often.

**The math:**
- Without cache: $3/M input tokens
- With cache: $0.30/M input tokens (10x cheaper)
- Break-even: ~10 calls per hour

**The tradeoff:**
- More cache = more savings = more complexity
- Less cache = less savings = less complexity
- Always cache the system prompt + tools

## Cache 2: Response cache

The agent's response is cached. The cache is on the agent
side. The cache is keyed by input.

**Examples:**
- "What is the capital of France?" → "Paris" (cached for 1
  day)
- "Label this issue as bug" → "bug" (cached for 1 hour)
- "Generate a summary of PR #42" → "..." (cached for 1 day)

**When to use:** the same input is given multiple times. The
output is deterministic. The user can wait.

**The math:**
- Without cache: $0.10 per call
- With cache: $0.01 per call (10x cheaper)
- Break-even: ~10 calls

**The tradeoff:**
- More cache = more savings = more storage
- Less cache = less savings = less storage
- Cache the most common queries

## Cache 3: Tool cache

The tool's response is cached. The cache is on the tool
side. The cache is keyed by tool input.

**Examples:**
- "github.get_file('README.md')" → "..." (cached for 5
  minutes)
- "github.list_issues()" → "..." (cached for 1 minute)
- "github.get_user('alice')" → "..." (cached for 1 hour)

**When to use:** the tool is slow. The tool is called often.
The output is deterministic.

**The math:**
- Without cache: 0.5s per call
- With cache: 0.001s per call (500x faster)
- Break-even: ~10 calls

**The tradeoff:**
- More cache = more speed = less freshness
- Less cache = less speed = more freshness
- Cache read-heavy tools (e.g., get_file, list_*)

## Cache 4: Memory cache

The memory is cached. The cache is on the memory side. The
cache is keyed by memory key.

**Examples:**
- "agent:preferences:user:1" → "..." (cached for 1 day)
- "agent:context:issue:42" → "..." (cached for 1 hour)
- "agent:skills:triage" → "..." (cached for 1 day)

**When to use:** the memory is read often. The memory is
slow to fetch. The memory is not time-sensitive.

**The math:**
- Without cache: 0.1s per read
- With cache: 0.001s per read (100x faster)
- Break-even: ~10 reads

**The tradeoff:**
- More cache = more speed = less freshness
- Less cache = less speed = more freshness
- Cache the most-read memories

## The 4 caches together

The 4 are the caching. The caching is the performance. The
performance is the cost.

| Cache | Layer | Cost | Speedup |
|---|---|---|---|
| Prompt | LLM | 10x | 0% (no speedup) |
| Response | Agent | 10x | 100x (no LLM) |
| Tool | Tool | 0% | 500x |
| Memory | Memory | 0% | 100x |

The agent that uses all 4 is the agent that's fast and
cheap. The agent that uses 1 is the agent that's slow and
expensive.

## The 80/20

80% of the value comes from:
- Response cache (10x cost reduction)
- Tool cache (500x speedup)

20% comes from:
- Prompt cache (10x cost reduction on input)
- Memory cache (100x speedup on read)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

4 caches. 1 performance. 1 lesson: use all 4.

The agent that uses all 4 is the fast agent. The agent that
uses 1 is the slow agent. The fast agent is adopted. The
slow agent is not.

The agent era is here. The caching is the design. The
design is the discipline. The discipline is the performance.
