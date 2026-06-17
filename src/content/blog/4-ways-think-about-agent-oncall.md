---
title: "The 4 ways to think about agent oncall (in production)"
description: "4 ways to think about oncall: alerts, dashboards, runbooks, drills. Each is a different oncall pillar. The framework, the examples, the lesson."
date: 2025-11-23
tags: ["oncall", "agents", "production"]
---

4 ways to think about oncall: alerts, dashboards, runbooks,
drills. Each is a different oncall pillar. The framework,
the examples, the lesson.

## Pillar 1: Alerts

The agent has alerts. The agent is monitored. The
maintainer is notified.

**Examples:**
- "Alert: agent error rate > 5%"
- "Alert: agent latency p99 > 10s"
- "Alert: agent cost > $100/day"

**When to use:** the agent is in production. The user
wants to know. The maintainer is on call.

**Pros:**
- Fast (the alert is fast)
- Standard (the alert is standard)
- Tested (the alert is tested)

**Cons:**
- Noise (the alert can be noise)
- False positives (the alert can be wrong)
- Cost (the alert system costs money)

## Pillar 2: Dashboards

The agent has dashboards. The agent is visible. The
maintainer can see.

**Examples:**
- "Dashboard: agent runs over time"
- "Dashboard: agent cost over time"
- "Dashboard: agent error rate over time"

**When to use:** the agent is in production. The user
wants to see. The maintainer is the operator.

**Pros:**
- Visual (the dashboard is visual)
- Real-time (the dashboard is real-time)
- Standard (the dashboard is standard)

**Cons:**
- Cost (the dashboard costs money)
- Coupling (the dashboard is coupled to the metrics)
- Effort (the dashboard takes effort to build)

## Pillar 3: Runbooks

The agent has runbooks. The agent is documented. The
maintainer can fix.

**Examples:**
- "Runbook: agent is throwing 500s"
- "Runbook: agent is slow"
- "Runbook: agent is hallucinating"

**When to use:** the agent is in production. The user
wants to know what to do. The maintainer is on call.

**Pros:**
- Actionable (the runbook is actionable)
- Tested (the runbook is tested)
- Standard (the runbook is standard)

**Cons:**
- Effort (the runbook takes effort to write)
- Maintenance (the runbook must be maintained)
- Drift (the runbook can drift from the agent)

## Pillar 4: Drills

The agent has drills. The agent is tested. The
maintainer is prepared.

**Examples:**
- "Drill: agent is down, what do we do?"
- "Drill: agent is slow, what do we do?"
- "Drill: agent is hallucinating, what do we do?"

**When to use:** the agent is in production. The user
wants to be prepared. The maintainer is on call.

**Pros:**
- Prepared (the drill prepares the team)
- Tested (the drill tests the runbook)
- Standard (the drill is standard)

**Cons:**
- Effort (the drill takes effort to run)
- Cost (the drill can break things)
- Time (the drill takes time)

## The 4 together

The 4 are the pillars. The pillars are the oncall. The
oncall is the value.

| Pillar | What it ensures | Cost |
|---|---|---|
| Alerts | The maintainer knows | Low |
| Dashboards | The maintainer sees | Low |
| Runbooks | The maintainer fixes | Medium |
| Drills | The maintainer is prepared | High |

The pillar that matches the need is the right pillar.

## The 80/20

80% of the value comes from:
- Alerts (the maintainer knows)
- Runbooks (the maintainer fixes)

20% comes from:
- Dashboards (the maintainer sees)
- Drills (the maintainer is prepared)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Does the maintainer need to know? (alerts)
- Does the maintainer need to see? (dashboards)
- Does the maintainer need to fix? (runbooks)
- Does the maintainer need to be prepared? (drills)

The right answer is the right pillar at the right cost.

## The lesson

4 pillars. 1 oncall. 1 lesson: design for all 4.

The oncall that designs for all 4 is the prepared oncall.
The oncall that designs for 1 is the unprepared oncall.
The prepared oncall is reliable. The unprepared oncall is
not.

The agent era is here. The oncall is the design. The
design is the choice. The choice is the discipline.
