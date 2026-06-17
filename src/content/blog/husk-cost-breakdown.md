---
title: "The cost of a Husk run: a real-world breakdown"
description: "A breakdown of the actual LLM cost of running a Husk agent. Real numbers from the gitagent demo on this very blog. Models, tokens, USD, optimizations."
date: 2026-06-01
tags: ["husk", "cost", "observability"]
---

How much does it cost to run a Husk agent? Let me break down a
real-world example: the `triage` agent on this blog.

## The setup

The `triage` agent runs on every new issue. It:
- Reads the issue title and body
- Searches past issues for similar ones
- Applies a label
- Posts a comment (if needed)

Model: Claude Sonnet 4.5. Tools: 4. Limits: 8 steps, 60s timeout.

## The cost

A typical run uses:
- **Step 1:** 1,500 input tokens, 200 output tokens (just the
  initial classification)
- **Step 2:** 2,000 input tokens, 100 output tokens (after
  search_issues tool call)
- **Step 3:** 2,500 input tokens, 200 output tokens (after label
  application)

Total: ~6,500 tokens per run. At Claude Sonnet 4.5 pricing
($3/MTok input, $15/MTok output):
- Input: 6,000 * $3/MTok = $0.018
- Output: 500 * $15/MTok = $0.0075
- **Total: $0.026 per issue triaged**

For a busy OSS repo with 100 issues/month, that's **$2.60/month**.
For a massive repo with 10,000 issues/month, that's **$260/month**.

## The optimizations

Several techniques can cut cost by 10x or more:

### 1. Use Haiku for simple tasks

Most triage decisions are simple classifications. A 4-class
classification (bug/feature/question/duplicate) can be done by Claude
Haiku 4 at $0.25/MTok input, $1.25/MTok output.

If the agent does the simple classification with Haiku and only
escalates to Sonnet for complex cases, cost drops to ~$0.005 per
issue.

### 2. Cache the system prompt

The system prompt and personality are the same for every run.
Prompt caching (now available in Claude and OpenAI) can cache these
tokens. The first run pays full price; subsequent runs pay 10% of
the input cost.

### 3. Truncate the event payload

The full issue body can be 10K tokens. Most triage decisions only
need the first 1K tokens (title + first 500 words of body). Truncate
aggressively.

### 4. Use a smaller model for the first pass

Run the agent with Haiku first. If Haiku is confident, post the
result. If not, escalate to Sonnet. This "cascade" pattern is the
same as a confidence-threshold classifier.

### 5. Skip the agent for known patterns

If the issue matches a regex ("[QUESTION]" in the title), apply
`question` label without calling the LLM. This catches maybe 20% of
issues for free.

## The realistic cost

For a "triage + respond" agent on a busy OSS repo:
- Without optimizations: $260/month
- With Haiku cascade: $50/month
- With Haiku + caching + truncation: $10/month

The $10/month agent is well within the "indie sustainable" range.

## The full cost stack

A real-world agent stack includes more than just the LLM:

| Component | Cost |
|---|---|
| LLM calls | $10-260/month |
| Vector embedding (semantic search) | $0.10/month |
| GitHub API (rate-limited) | Free |
| Hosting (Hono server) | $5/month (Fly.io) |
| Storage (git-backed memory) | Free (in the repo) |
| Domain | $12/year |
| Email (for notifications) | $0 (use GitHub Issues) |
| **Total** | **$15-280/month** |

For a one-person indie, $15/month is fine. $280/month requires
real revenue.

## The break-even

If you're selling a SaaS and each user generates 10 issues/month,
and the agent costs $0.026/user/month, then:
- 100 users: $26/month in agent cost
- 1,000 users: $260/month in agent cost
- 10,000 users: $2,600/month in agent cost

At $10/user/month pricing:
- 100 users: $1,000 MRR, $974 net
- 1,000 users: $10,000 MRR, $9,740 net
- 10,000 users: $100,000 MRR, $97,400 net

The agent is a rounding error. The product is the product.

## What I learned

1. **The base cost is low.** A simple agent is $0.03/run. The
   "AI is expensive" myth is outdated.
2. **Optimizations compound.** Prompt caching + Haiku + truncation
   can get you to $0.003/run. That's 100x cheaper.
3. **Cascading is the pattern.** Try cheap first, escalate to
   expensive only when needed. The same pattern as a
   confidence-threshold classifier.
4. **The agent cost is not the bottleneck.** At indie scale, the
   product is the bottleneck. The agent is a feature, not the
   product.

## What to do

- Measure your agent's token usage. Most platforms give you this
  for free.
- Calculate your cost per run. Multiply by your expected volume.
- Optimize the bottom 50% of your prompts. Most of the cost is in
  long system prompts and big tool results.
- Consider cascading. Cheap model first, expensive model only when
  needed.
- Don't optimize prematurely. The base cost is often acceptable.

The cost of running an agent is no longer the reason not to build
one. The reasons not to build one are: no clear use case, no
maintenance plan, no audit trail. All solvable.
