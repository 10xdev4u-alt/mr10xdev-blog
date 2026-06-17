---
title: "The 4 deployment patterns for AI agents"
description: "Four ways to deploy an AI agent: GitHub App, serverless, long-running daemon, CLI. Tradeoffs, costs, when to use each. The decision matrix for production agents."
date: 2026-05-06
tags: ["deployment", "agents", "production", "architecture"]
---

Four ways to deploy an AI agent: GitHub App, serverless, long-
running daemon, CLI. Tradeoffs, costs, when to use each. The
decision matrix for production agents.

## Pattern 1: GitHub App

A GitHub App is installed on a repo or org. It receives webhooks
and calls back to GitHub via the REST API. The agent runs in
response to events.

**Architecture:**
```
GitHub → webhook → agent server → agent run → GitHub API
```

**Pros:**
- **Free hosting** (if you self-host the agent server)
- **No rate limits** for the app's own API calls
- **Tight GitHub integration** (the agent IS in the workflow)
- **Easy install** (one click)

**Cons:**
- **Tied to GitHub** (can't easily run on Linear, Jira, etc.)
- **Need a server** (the agent runs somewhere)
- **Per-repo config** (each repo needs the app installed)

**When to use:**
- The agent is a GitHub-native tool
- The agent maintains repos (triage, doc, release, etc.)
- The user base is on GitHub

**Examples:** gitagent, Probot, GitHub's own Copilot

## Pattern 2: Serverless

A serverless function (AWS Lambda, Cloudflare Workers, Vercel
Edge, etc.) runs the agent. Triggered by a webhook, cron, or HTTP
request.

**Architecture:**
```
Trigger → API Gateway → Lambda → agent run → external API
```

**Pros:**
- **No server to manage** (the cloud does it)
- **Pay per use** (no idle cost)
- **Auto-scaling** (handles 1 or 1000 requests)
- **Edge deployment** (low latency worldwide)

**Cons:**
- **Cold starts** (first request is slow)
- **Timeout limits** (Lambda: 15min, Workers: 30s by default)
- **Stateless** (memory must be in S3/R2 or external)
- **Vendor lock-in** (each provider has its own quirks)

**When to use:**
- Bursty traffic (10 runs/minute at peak, 0 at idle)
- Short runs (< 5 minutes)
- Stateless agents (no long-running memory)
- Cost-sensitive deployments (you only pay for what you use)

**Examples:** Most SaaS agent platforms, serverless AI tools

## Pattern 3: Long-running daemon

A long-running process (Docker container, systemd service, PM2
process) runs the agent. Triggered by webhooks, cron, or message
queue.

**Architecture:**
```
Trigger → message queue → daemon → agent run → external API
                   ↑              ↓
                   └─── state shared via DB ───┘
```

**Pros:**
- **Stateful** (memory lives in process)
- **No cold starts** (always warm)
- **Full control** (any language, any library)
- **Long-running tasks** (no timeout)

**Cons:**
- **Server management** (deploy, monitor, scale)
- **Always-on cost** ($5-50/month minimum)
- **Single point of failure** (unless you run multiple)
- **Scaling is manual** (or use Kubernetes, which is its own complexity)

**When to use:**
- Stateful agents (memory in process)
- Long-running tasks (> 5 minutes)
- Need for fine-grained control
- Predictable traffic (always on)

**Examples:** LangChain servers, custom agent deployments

## Pattern 4: CLI

A CLI tool runs the agent. Triggered manually or by a cron on a
user's machine.

**Architecture:**
```
User → CLI command → agent run → external API
```

**Pros:**
- **No server** (runs on the user's machine)
- **Free** (no hosting cost)
- **Full control** (the user owns the data)
- **Easy to test** (run locally)

**Cons:**
- **Not multi-user** (one user, one machine)
- **Tied to the machine** (the machine must be on)
- **No GitHub integration** (the CLI has to poll)
- **Manual triggering** (the user has to run it)

**When to use:**
- Personal tools
- Tools that run on a schedule (cron on a laptop)
- Tools that need to access local files
- The user is technical

**Examples:** `husk run`, `aider`, `cline`, `opencode`

## The decision matrix

| Use case | Pattern |
|---|---|
| Triage issues in a GitHub repo | **GitHub App** |
| Answer questions in a Discord server | **Serverless** (Discord webhook → Lambda) |
| Long-running research agent | **Long-running daemon** |
| Personal note-taking agent | **CLI** |
| Cross-platform (GitHub, Linear, Jira) | **Long-running daemon** with adapter |
| Bursty SaaS workload | **Serverless** |
| Per-user premium feature | **Serverless** |
| Repo maintenance | **GitHub App** |
| Power user tool | **CLI** |
| Enterprise internal tool | **Long-running daemon** behind VPN |

## The hybrid pattern

The hybrid is common: a long-running daemon for stateful work
plus serverless functions for stateless work.

```
GitHub App (the agent)
  │
  ├── stateful: long-running daemon (the agent's main loop)
  │   └── uses in-process memory
  │
  └── stateless: serverless function (the "quick" path)
      └── uses external memory (S3, R2, DB)
```

The daemon handles the long-running, stateful work. The
serverless function handles the quick, stateless work. The user
sees a single agent.

## The tradeoffs

Each pattern has tradeoffs:

### GitHub App
- **+** Free hosting (self-host)
- **+** Tight GitHub integration
- **-** Tied to GitHub
- **-** Need a server

### Serverless
- **+** No server
- **+** Pay per use
- **-** Cold starts
- **-** Stateless (memory is external)

### Long-running daemon
- **+** Stateful
- **+** No cold starts
- **-** Server management
- **-** Always-on cost

### CLI
- **+** No server
- **+** Free
- **-** Not multi-user
- **-** Tied to the machine

The right pattern depends on:
- **Traffic shape** (bursty, steady, on-demand)
- **State needs** (stateful, stateless, hybrid)
- **Multi-tenancy** (single user, multi-user, multi-tenant)
- **Integration** (GitHub-native, cross-platform, local)
- **Cost** (free, pay-per-use, fixed)

## The lesson

There's no universal "best" deployment pattern. Each has its
tradeoffs. The right answer depends on your specific use case.

For most indie AI builders:
- **Start with CLI** (cheapest, simplest)
- **Move to GitHub App** (if the agent is GitHub-native)
- **Move to serverless** (if you need scale)
- **Move to long-running daemon** (if you need state)

The path is: start simple, grow as needed. Don't pre-build for
scale you don't have.

The deployment pattern is the contract. The contract should
match the use case, not the trend.
