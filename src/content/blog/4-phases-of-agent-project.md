---
title: "The 4 phases of an agent project"
description: "Every agent project goes through 4 phases: prototype, polish, production, plateau. Each has a different goal, a different metric, a different trap. The roadmap from idea to mature system."
date: 2026-05-01
tags: ["meta", "agents", "process", "lifecycle"]
---

Every agent project goes through 4 phases: prototype, polish,
production, plateau. Each has a different goal, a different
metric, a different trap. The roadmap from idea to mature system.

## Phase 1: Prototype (week 1-2)

**Goal:** prove the loop works.

**Metric:** does the agent complete a real task end-to-end?

**Activities:**
- Build the smallest possible agent (200 lines)
- Use the simplest possible tools (1-2)
- Skip the polish (no docs, no tests, no error handling)
- Test on yourself first

**What you ship:** a CLI or script that does the thing.

**Trap:** the prototype is good enough. You never move to phase 2.

**How to escape:** set a deadline. "If the prototype works by
Friday, I'll spend next week on polish."

## Phase 2: Polish (week 3-6)

**Goal:** make the agent reliable enough for one other person to use.

**Metric:** can someone other than you run it without help?

**Activities:**
- Add tests (every public function)
- Add docs (README, examples, CHANGELOG)
- Add error handling (graceful failures, retry logic)
- Add observability (logs, traces, cost tracking)
- Add the 80% features (the obvious missing ones)

**What you ship:** v0.1.0. Public release.

**Trap:** polish becomes perfection. You never move to phase 3.

**How to escape:** the 80/20 rule. "If the 20% of polish that
covers 80% of the use case is done, ship it."

## Phase 3: Production (week 7-12)

**Goal:** make the agent reliable enough for 10+ users.

**Metric:** does the agent work for 10 users without manual intervention?

**Activities:**
- Add deployment (Docker, serverless, daemon)
- Add security (secrets management, rate limiting, approval flows)
- Add monitoring (alerts on failures, dashboards)
- Add documentation (operator guide, troubleshooting)
- Add support (issue templates, response time)

**What you ship:** v1.0.0. Stable release.

**Trap:** production becomes endless. You never move to phase 4.

**How to escape:** the "good enough" rule. "If 10 users are
happy, the system is good enough. Don't optimize for 1000."

## Phase 4: Plateau (week 13+)

**Goal:** maintain the agent without burning out.

**Metric:** can you maintain the agent for 6 months without it consuming your life?

**Activities:**
- Add an agent to maintain the agent (yes, really)
- Reduce your involvement (set office hours, not 24/7)
- Focus on the next thing (the next project, the next problem)
- Let the community take over (delegate, document, empower)

**What you ship:** a sustainable project.

**Trap:** the plateau feels like stagnation. You want to ship
more. You start a v2. The v2 takes a year. The original v1
dies.

**How to escape:** the "one project at a time" rule. "If I'm
working on a v2, the v1 needs a maintainer who's not me."

## The roadmap

The 4 phases look like a Gantt chart:

```
Week:  1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
       └───┴───┘                                       └───┴───┴───
       Prototype                                     Plateau
           └────────┴────────┴───┴───┴───┘
                  Polish         Production
```

The prototype is short (1-2 weeks). The polish is medium
(2-4 weeks). The production is longer (4-6 weeks). The plateau
is ongoing.

Total: 12-15 weeks to a stable, maintained project. Then it's
just maintenance.

## The tradeoffs

Each phase has different tradeoffs:

### Prototype
- **+** Fast feedback
- **+** Low commitment
- **-** No tests, no docs
- **-** Won't scale

### Polish
- **+** Production-ready
- **+** Documented
- **-** Slower iteration
- **-** More code to maintain

### Production
- **+** Scalable
- **+** Secure
- **-** Operational burden
- **-** Higher cost

### Plateau
- **+** Sustainable
- **+** Community-owned
- **-** Boring
- **-** Stagnation risk

The right phase for your project depends on:
- **Audience size** (1 user = prototype, 10 users = polish, 100+ = production, 1000+ = plateau)
- **Criticality** (toy = prototype, side project = polish, business = production, infrastructure = plateau)
- **Your bandwidth** (hours per week you can give)

## The exit criteria

Each phase has clear exit criteria:

### Prototype → Polish
- The agent completes a real task
- You can describe what it does in one sentence
- You want to use it yourself

### Polish → Production
- The agent has 80% test coverage
- The agent has docs for every public API
- The agent can be installed and run by a stranger
- The agent has been used by 3+ people without breaking

### Production → Plateau
- The agent has 95%+ uptime
- The agent has monitoring and alerts
- The agent's issues are triaged within a week
- The agent has at least one other maintainer

### Plateau → New Project
- The agent is stable
- The community is engaged
- You have a new project that's more exciting

The exit criteria are the forcing function. If you can't meet
them, you're not ready to move to the next phase. If you can
meet them, you should.

## The lesson

The 4 phases are a roadmap, not a checklist. Most projects
skip phases (prototype → production, no polish). Most projects
get stuck (prototype forever, never polish). The phases are the
guardrails.

Move through the phases at a sustainable pace. Don't rush. Don't
skip. Don't get stuck.

The goal: a project that's stable, maintained, and used. The
phases are the path.

Start with the prototype. End with the plateau. The journey
takes 12-15 weeks. The destination is worth it.
