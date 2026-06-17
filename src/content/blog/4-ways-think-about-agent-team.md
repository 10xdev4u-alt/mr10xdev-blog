---
title: "The 4 ways to think about an agent's team"
description: "4 ways to think about an agent's team: the operator, the maintainer, the user, the contributor. Each has different needs, different incentives, different success metrics."
date: 2026-02-21
tags: ["agents", "team", "stakeholders"]
---

4 ways to think about an agent's team: the operator, the
maintainer, the user, the contributor. Each has different
needs, different incentives, different success metrics.

## Role 1: The operator

The operator runs the agent. The operator deploys the agent.
The operator keeps the agent alive.

**Needs:**
- The agent is reliable
- The agent is observable
- The agent is recoverable

**Success metrics:**
- 99.9% uptime
- < 1s p95 latency
- 0 data loss

**Pain points:**
- The agent goes down
- The agent is slow
- The agent loses data

**Tools:**
- Monitoring (Datadog, Grafana)
- Alerting (PagerDuty, Opsgenie)
- Runbooks (Confluence, Notion)

## Role 2: The maintainer

The maintainer writes the agent. The maintainer updates the
agent. The maintainer improves the agent.

**Needs:**
- The agent is testable
- The agent is debuggable
- The agent is extensible

**Success metrics:**
- 0 production bugs
- 100% test coverage
- 10 features per quarter

**Pain points:**
- The agent is hard to test
- The agent is hard to debug
- The agent is hard to extend

**Tools:**
- CI/CD (GitHub Actions, GitLab CI)
- Testing (Vitest, Playwright)
- Debugging (logs, traces)

## Role 3: The user

The user uses the agent. The user benefits from the agent.
The user is the reason the agent exists.

**Needs:**
- The agent is fast
- The agent is correct
- The agent is helpful

**Success metrics:**
- < 1s response time
- 99% correct output
- 90% user satisfaction

**Pain points:**
- The agent is slow
- The agent is wrong
- The agent is unhelpful

**Tools:**
- Documentation (README, docs)
- Support (Discord, email)
- Feedback (Surveys, GitHub issues)

## Role 4: The contributor

The contributor extends the agent. The contributor adds
features. The contributor fixes bugs.

**Needs:**
- The agent is open source
- The agent is well-documented
- The agent is welcoming

**Success metrics:**
- 10 contributors
- 100 PRs
- 1000 stars

**Pain points:**
- The agent is closed source
- The agent is undocumented
- The agent is unwelcoming

**Tools:**
- Open source (GitHub, GitLab)
- Documentation (README, CONTRIBUTING)
- Community (Discord, Slack)

## The 4 together

The 4 are the team. The team is the product. The product
is the value.

| Role | Need | Metric | Pain |
|---|---|---|---|
| Operator | Reliability | 99.9% uptime | Downtime |
| Maintainer | Quality | 0 bugs | Tech debt |
| User | Speed | < 1s | Latency |
| Contributor | Community | 100 PRs | Closed source |

The agent that satisfies all 4 is the agent that scales.
The agent that satisfies 1 is the agent that plateaus.

## The 80/20

80% of the value comes from:
- Operator (the agent is up)
- User (the agent is useful)

20% comes from:
- Maintainer (the agent is good)
- Contributor (the agent is open)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

4 roles. 1 team. 1 lesson: design for all 4.

The agent that designs for all 4 is the agent that
succeeds. The agent that designs for 1 is the agent that
fails.

The agent era is here. The team is the design. The design
is the choice. The choice is the discipline.
