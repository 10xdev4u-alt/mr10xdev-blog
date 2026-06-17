---
title: "The 4 hidden costs of running an agent"
description: "Agents are not free. The 4 hidden costs: LLM tokens, infrastructure, observability, and maintenance. The actual numbers, the optimization strategies, the budget you should plan for."
date: 2026-04-11
tags: ["agents", "cost", "production"]
---

Agents are not free. The 4 hidden costs: LLM tokens,
infrastructure, observability, and maintenance. The actual
numbers, the optimization strategies, the budget you should
plan for.

## Cost 1: LLM tokens

The biggest cost. Each agent run uses input and output tokens.
The cost is per million tokens (MTok).

**Typical prices (June 2026):**
- Claude Sonnet 4.5: $3 input / $15 output per MTok
- Claude Haiku 4: $0.25 input / $1.25 output per MTok
- GPT-4o: $2.50 input / $10 output per MTok
- Gemini 2.5 Pro: $1.25 input / $10 output per MTok
- Local Llama 3.1 70B: $0 (your hardware)

**Typical agent run costs:**

| Agent type | Input tokens | Output tokens | Sonnet 4.5 cost | Haiku 4 cost |
|---|---|---|---|---|
| Triage (simple) | 2K | 200 | $0.009 | $0.001 |
| Triage (with search) | 6K | 500 | $0.026 | $0.002 |
| Doc update | 10K | 1K | $0.045 | $0.005 |
| Release post draft | 20K | 5K | $0.135 | $0.011 |
| Research report | 50K | 10K | $0.300 | $0.030 |

**At scale:**

- 100 issues/day (triage) = $2.60/day = $80/month
- 10 releases/month (release) = $1.35/month
- 100 doc updates/month = $4.50/month
- 10 research reports/month = $3.00/month

Total: ~$90/month for a busy agent.

**Optimizations:**
- Use Haiku for simple tasks (8-10x cheaper)
- Cache the system prompt (10x cheaper for repeated calls)
- Truncate the event payload (2-3x cheaper for big inputs)
- Use a cascade (cheap first, expensive on hard cases)
- Use local models for high-volume, low-stakes tasks

## Cost 2: Infrastructure

The cost of running the agent server. Self-hosted or managed.

**Self-hosted:**
- VPS (4GB RAM, 2 vCPU): $20/month
- Domain: $12/year
- Storage: $0 (use the repo)
- **Total: $25/month**

**Managed:**
- Fly.io (shared CPU, 1GB RAM): $5/month
- Railway (similar): $5/month
- Cloudflare Workers (serverless, 100K req/day free): $0-5/month
- **Total: $5-10/month**

**At scale:**
- Self-hosted is cheaper at scale (>$100/month)
- Managed is cheaper at small scale (<$50/month)
- Serverless is cheapest for bursty traffic

**Hidden cost: egress.** If your agent calls external APIs
(GitHub, Slack, etc.), you might pay for API calls.

## Cost 3: Observability

The cost of seeing what the agent is doing. Essential for
production.

**Langfuse self-hosted:** $0 (you run it)
**Langfuse managed:** $0-30/month (free tier, then usage-based)
**Honeycomb:** $0-50/month (free tier, then usage-based)
**Datadog:** $15-100/month (per host, per month)
**Your own (logs + S3 + Athena):** $5-20/month

**Total: $0-50/month** depending on the tool and the scale.

**Hidden cost: setup time.** Setting up observability takes 2-4
hours. Maintaining it takes ongoing effort.

## Cost 4: Maintenance

The cost of keeping the agent running. The biggest hidden cost.

**Time:**
- Triage issues: 1-2 hours/week
- Update prompts: 2-4 hours/month
- Fix bugs: 1-2 hours/month
- Add features: 4-8 hours/month
- Documentation: 2-4 hours/month
- **Total: 10-20 hours/month**

**At $100/hour (engineer cost):**
- **$1,000-2,000/month in maintenance time**

**For an indie:**
- Maintenance is the biggest cost by far
- The LLM tokens are the smallest cost
- The infrastructure is the second smallest

**The math:**
- 1 LLM cost: $90/month
- Infrastructure: $10/month
- Observability: $20/month
- Maintenance: $1,000-2,000/month
- **Total: $1,120-2,120/month**

**The lesson:** the LLM tokens are 5% of the total cost. The
maintenance is 90%. Optimize the maintenance first.

## The budget

For a serious agent project, plan for:
- **LLM tokens:** $50-200/month
- **Infrastructure:** $10-50/month
- **Observability:** $0-50/month
- **Maintenance:** 10-20 hours/month (your time, not your money)

If the agent saves you 20+ hours/month, it pays for itself.

If the agent doesn't, it's a hobby. That's fine too.

## The ROI

The agent pays for itself when:
- It saves 20+ hours/month in human time
- It improves consistency (every issue triaged the same way)
- It improves quality (every doc updated, every release drafted)
- It improves coverage (24/7 vs business hours)

For a solo indie, 20 hours/month is 2.5 days of work. The
agent gives you 2.5 days back. The math works.

## The lesson

4 costs. $1,120-2,120/month total. 90% is maintenance.

The LLM tokens are the smallest cost. The maintenance is the
biggest. Optimize the maintenance first.

The agent era is here. The costs are known. The ROI is real.
Plan accordingly.
