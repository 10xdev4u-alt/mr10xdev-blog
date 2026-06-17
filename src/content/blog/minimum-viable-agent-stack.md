---
title: "The minimum viable agent stack"
description: "The minimum viable agent stack in 2026: an LLM, a framework, a tool, a trigger, and an observability layer. Five things. $20/month. 1 weekend."
date: 2026-05-22
tags: ["ai", "agents", "stack", "mvp"]
---

The minimum viable agent stack in 2026 is five things. $20/month.
1 weekend. Here's the spec.

## The five things

### 1. An LLM

Claude Sonnet 4.5 is the default. $20/month for Pro, $200/month
for Max. Use Max if you need 200K context regularly.

Alternatives:
- GPT-4o for code generation tasks
- Gemini 2.5 Pro for 1M+ context
- Llama 3.1 8B (local) for offline dev
- A free model (Mistral, Llama) for cost-sensitive use cases

Pick one. Don't switch providers every week.

### 2. A framework

Husk, LangChain, LlamaIndex, or a 200-line custom loop. Pick the
smallest one that covers your use case.

For most use cases, the framework is overkill. A 200-line custom
loop with one tool is enough. Add a framework when you need
memory, multiple tools, or streaming.

### 3. A tool

One tool. The most useful tool for an agent that maintains a
GitHub repo: `github.post_comment`. For an agent that processes
emails: `gmail.send`. For an agent that does research: `web.search`.

Start with one tool. Add more as needed.

### 4. A trigger

A webhook, a cron, or a manual button. Webhooks are best for event-
driven agents (GitHub bots, email responders). Cron is best for
scheduled agents (daily reports, weekly summaries). Manual buttons
are best for one-shot agents (research, summarization).

Pick the trigger that matches your use case.

### 5. An observability layer

Langfuse. $0/month for the open-source version. $20/month for the
managed version. Captures every LLM call, tool call, cost, and
latency.

If you don't have observability, you don't have an agent. You have
a black box.

## The cost

| Component | Cost |
|---|---|
| Claude Pro | $20/month |
| Husk (or your framework) | $0 |
| Tool API (e.g., GitHub free tier) | $0 |
| Hosting (Fly.io, Railway, or your laptop) | $0-5/month |
| Langfuse self-hosted | $0 |
| **Total** | **$20-25/month** |

For a hobby project, $20/month is fine. For a paid product, scale
up.

## The timeline

- **Day 1:** LLM call + system prompt. Verify it works.
- **Day 2:** Add one tool. Verify the tool call works.
- **Day 3:** Add a trigger. Verify the agent wakes up.
- **Day 4:** Add observability. Verify you can see the runs.
- **Day 5:** Polish. Add error handling. Add tests.
- **Day 6-7:** Deploy. Share with one person.

That's the MVP. One weekend. 200-500 lines of code.

## The next steps

After the MVP, add features based on real user feedback:
- **More tools.** The user asks "can it do X?" You add X.
- **Memory.** The user says "I told it to remember Y." You add memory.
- **Streaming.** The user complains about latency. You add streaming.
- **Approval flow.** The user says "I want to review before it
  posts." You add approval.

Each feature is a future commit. The MVP is the start.

## The anti-pattern

The anti-pattern is to build the "comprehensive agent platform"
on day one. You end up with 5 providers, 30 tools, memory,
streaming, approval, observability, multi-agent, custom UIs, and
no users.

The right pattern is the opposite. Ship the MVP. Use it. Add
features one at a time. The discipline is "ship the smallest
thing that works, then iterate."

## What I do

Husk is my framework. I have 5 agents:
- `triage` — labels new issues
- `doc` — keeps the README in sync
- `release` — drafts release notes
- `welcome` — greets new contributors
- (this blog's) auto-publisher

Each agent has 3-7 tools. Each uses the same framework, the same
LLM, the same observability. The total cost is ~$50/month.

The setup took 2 days. The maintenance is one git push per
feature.

## What to do

- **Pick an LLM.** Claude Pro is the default.
- **Pick a framework.** Husk if you want small. LangChain if you
  want big.
- **Pick a tool.** The simplest one that solves your problem.
- **Pick a trigger.** Webhook, cron, or button.
- **Pick observability.** Langfuse.
- **Ship in a weekend.** Don't optimize. Don't polish. Just ship.
- **Iterate.** Add features based on user feedback.

The minimum viable agent stack is $20/month and 1 weekend. The
maximum is unbounded. Start small. Add as you grow.

The agent era is here. The tools are ready. The cost is low. The
only missing piece is your project.
