---
title: "The 4 ways to monetize an agent"
description: "How do you make money from an agent? 4 models: SaaS, hosted, consulting, open-core. The tradeoffs, the math, the meta. Which one fits your project?"
date: 2026-03-31
tags: ["monetization", "agents", "business"]
---

How do you make money from an agent? 4 models: SaaS, hosted,
consulting, open-core. The tradeoffs, the math, the meta. Which
one fits your project?

## Model 1: SaaS

Build a SaaS around the agent. The user signs up, configures
their agent, and pays monthly.

**Examples:**
- LangChain's LangSmith
- Helicone's observability
- Pinecone's vector DB
- Various agent platforms

**Pros:**
- Recurring revenue (predictable, growing)
- High LTV (lifetime value)
- Compounding (each user is a multiplier)
- Easy to raise on (SaaS metrics are well-understood)

**Cons:**
- High upfront cost (build the SaaS)
- High ongoing cost (host, support, sales)
- Slow growth (you have to acquire users)
- High churn risk (users leave)

**The math:**
- 100 users × $50/month = $5K MRR
- 1,000 users × $50/month = $50K MRR
- 10,000 users × $50/month = $500K MRR

**When to use:** the agent is product-like, the user is not
technical, the user is willing to pay.

## Model 2: Hosted

Offer the agent as a hosted service. The user pays for usage
(e.g., per task, per token, per agent run).

**Examples:**
- OpenAI's API
- Anthropic's API
- Replicate's model hosting
- Various inference providers

**Pros:**
- Usage-based revenue (scales with value)
- No vendor lock-in (the user can leave)
- High margins (the cost is the LLM, the price is 2-3x)
- Easy to understand (the user pays for what they use)

**Cons:**
- Volatile revenue (depends on usage)
- High support cost (the user expects 24/7)
- Commoditization risk (everyone can offer the same)
- Margin pressure (LLM costs can change)

**The math:**
- 1M tasks × $0.01 = $10K MRR
- 10M tasks × $0.01 = $100K MRR
- 100M tasks × $0.01 = $1M MRR

**When to use:** the agent is infrastructure, the user is
technical, the user is cost-sensitive.

## Model 3: Consulting

Sell your time to build custom agents for clients.

**Examples:**
- AI consulting agencies
- Custom AI development shops
- Independent AI engineers

**Pros:**
- High hourly rate ($200-500/hour)
- Immediate revenue (no waiting for users)
- Low risk (no need to build a product)
- High margin (your time, your price)

**Cons:**
- Time-bound (you can't scale without more people)
- Not productized (each project is custom)
- High variance (revenue depends on sales)
- Burnout risk (consulting is exhausting)

**The math:**
- 20 hours/week × $300/hour × 4 weeks = $24K/month
- 40 hours/week × $300/hour × 4 weeks = $48K/month
- Full team (3 people) × $300/hour × 160 hours/month = $144K/month

**When to use:** you have domain expertise, you don't want to
build a product, you want to learn from real customers.

## Model 4: Open-core

Open-source the agent, sell a managed version or premium
features.

**Examples:**
- GitLab (CE + Enterprise)
- Sentry (OSS + Cloud)
- Supabase (OSS + Cloud)
- Various open-core companies

**Pros:**
- Community (the OSS users contribute back)
- Distribution (the OSS is marketing)
- Flexibility (the user can self-host)
- Compounding (each user is a multiplier)

**Cons:**
- Support cost (the OSS users expect support)
- Commoditization risk (anyone can host it)
- Slow growth (the OSS has to be adopted)
- High engineering cost (you maintain both versions)

**The math:**
- 1,000 OSS users × 5% conversion × $100/month = $5K MRR
- 10,000 OSS users × 5% conversion × $100/month = $50K MRR
- 100,000 OSS users × 5% conversion × $100/month = $500K MRR

**When to use:** the agent is infra-like, the user is technical,
the user values self-hosting.

## The 4 together

The 4 models are not exclusive. Most agent companies use 2-3:

- **SaaS + Consulting:** the SaaS is the product, the consulting
  is the bootstrap.
- **Hosted + Open-core:** the OSS is the free tier, the hosted is
  the paid tier.
- **SaaS + Open-core:** the OSS is the marketing, the SaaS is the
  product.

The right combination depends on the project. The right
combination is what makes the business work.

## The 80/20

80% of indie agent builders use the open-core + consulting
model. The OSS is the product, the consulting is the bootstrap.

20% use SaaS or hosted. The product is the product, the
revenue is the revenue.

The 80% is the safer path. The 20% is the higher-reward path.

## The choice

For most indie builders:
- **Start with open-core** (ship the agent as OSS)
- **Add consulting** (bootstrap with custom work)
- **Maybe add hosted later** (if the OSS gets traction)
- **Maybe add SaaS later** (if the consulting succeeds)

The progression: open-core → consulting → hosted → SaaS. Each
step adds revenue. Each step adds complexity. Each step is
optional.

## The meta

The agent era is here. The monetization is the same. The
business model is the design. The design is the choice.

The agent that has a good business model is sustainable. The
agent that has a bad business model is a hobby. The choice is
yours.

Pick the model that fits the project. Iterate. The model that
fits is the one that wins.
