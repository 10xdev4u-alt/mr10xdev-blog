---
title: "The 4 ways to deploy an agent (decision matrix)"
description: "4 ways to deploy an agent: cron, webhook, serverless, daemon. The decision matrix, the tradeoffs, the cost. Which one fits your agent?"
date: 2026-03-23
tags: ["deployment", "agents", "infrastructure"]
---

4 ways to deploy an agent: cron, webhook, serverless, daemon.
The decision matrix, the tradeoffs, the cost. Which one fits
your agent?

## Way 1: Cron

The agent runs on a schedule. Once an hour, once a day, once
a week.

**Examples:**
- A weekly report agent
- A daily standup agent
- A monthly cleanup agent

**Architecture:**
```
cron → agent run → external API
```

**Pros:**
- Simple (just a cron job)
- Cheap ($0 if self-hosted)
- Predictable (runs at the same time every day)

**Cons:**
- No real-time response (waits for the next cron tick)
- Hard to test (have to wait for the next tick)
- Single point of failure (if the job fails, it doesn't run)

**When to use:** the agent doesn't need real-time response.
The task is periodic.

**Cost:** $0 (self-hosted) to $10/month (managed).

## Way 2: Webhook

The agent runs on an external event. The event triggers the
agent.

**Examples:**
- A GitHub agent (triggered by issues, PRs, comments)
- A Stripe agent (triggered by payments)
- A Slack agent (triggered by messages)

**Architecture:**
```
external service → webhook → agent server → agent run
```

**Pros:**
- Real-time response (triggered by the event)
- Easy to test (POST a test event)
- Scales to many event sources

**Cons:**
- Need a server (to receive the webhook)
- Need to verify the webhook signature
- Single point of failure (if the server is down, events are
  lost)

**When to use:** the agent is event-driven. The agent should
respond to external events in real-time.

**Cost:** $0 (self-hosted) to $25/month (managed).

## Way 3: Serverless

The agent runs as a serverless function. Triggered by a
webhook, a cron, or an HTTP request.

**Examples:**
- A research agent (triggered by an HTTP API)
- A coding agent (triggered by a webhook)
- A reporting agent (triggered by a cron)

**Architecture:**
```
trigger → API Gateway → Lambda → agent run → external API
```

**Pros:**
- No server to manage
- Pay per use (no idle cost)
- Auto-scaling (handles 1 or 1000 requests)

**Cons:**
- Cold starts (first request is slow)
- Timeout limits (15 min on Lambda, 30s on Workers)
- Stateless (memory must be in S3/R2 or external)

**When to use:** the traffic is bursty. The agent doesn't
need to be always on. The cost matters.

**Cost:** $0-50/month depending on usage.

## Way 4: Daemon

The agent runs as a long-running process. Triggered by a
webhook, a cron, a message queue, or an HTTP request.

**Examples:**
- A research agent (stateful across runs)
- A coding agent (long-running tasks)
- A monitoring agent (always on)

**Architecture:**
```
trigger → message queue → daemon → agent run
                              ↓
                         state in DB
```

**Pros:**
- Stateful (memory lives in process)
- No cold starts
- Full control (any language, any library)
- Long-running tasks (no timeout)

**Cons:**
- Server management (deploy, monitor, scale)
- Always-on cost ($5-50/month minimum)
- Single point of failure (unless you run multiple)

**When to use:** the agent is stateful. The agent does
long-running work. The agent needs full control.

**Cost:** $5-50/month.

## The decision matrix

| Trigger | Volume | State | Pattern |
|---|---|---|---|
| Cron | Low | None | Cron |
| Event | Low | None | Webhook |
| Event | High | None | Serverless |
| Event | High | Some | Daemon |
| HTTP | Variable | Some | Serverless or Daemon |
| Event | Variable | High | Daemon |

The pattern is a function of:
- **Trigger:** cron, event, or HTTP
- **Volume:** low or high
- **State:** none, some, or high

The right pattern fits the use case.

## The 80/20

80% of agents use webhook or cron. The event-driven or
periodic pattern.

20% use serverless or daemon. The stateful or high-volume
pattern.

Start with webhook or cron. Add serverless or daemon when
you need it.

## The hybrid

Some agents use multiple patterns. The triage agent uses
webhook (for new issues) and cron (for the daily summary).
The release agent uses webhook (for new tags) and manual
(for ad-hoc releases).

The hybrid is common. The hybrid gives you the best of each
pattern. The hybrid is the right answer for most agents.

## The meta-lesson

4 ways. 1 decision. 1 lesson: start simple.

The agent that uses cron or webhook is simple. The agent
that uses serverless or daemon is complex. Start simple. Add
complexity when you need it.

The agent era is here. The deployment is the choice. The
choice is the trade-off. The trade-off is the design.
