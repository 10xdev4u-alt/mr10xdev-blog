---
title: "The 6 phases of a healthy OSS project"
description: "Every healthy OSS project goes through 6 phases: spark, scaffold, ship, sustain, scale, sunset. Each has a different goal, a different metric, a different trap. The roadmap from idea to retirement."
date: 2026-04-21
tags: ["meta", "oss", "lifecycle"]
---

Every healthy OSS project goes through 6 phases: spark, scaffold,
ship, sustain, scale, sunset. Each has a different goal, a
different metric, a different trap. The roadmap from idea to
retirement.

## Phase 1: Spark (week 0-1)

**Goal:** turn the idea into a proof.

**Metric:** does the idea solve a real problem?

**Activities:**
- Write a 1-page design doc
- Build a weekend prototype
- Test on yourself
- Get 1 friend to test it

**What you ship:** a GitHub repo with a README and 100 lines of
code.

**Trap:** the idea is good enough. You start adding features.

**How to escape:** the discipline of "ship the smallest thing."
The spark is the question, not the answer.

## Phase 2: Scaffold (week 2-4)

**Goal:** turn the prototype into a usable tool.

**Metric:** can a stranger install and use it without help?

**Activities:**
- Add docs (README, examples, troubleshooting)
- Add tests (every public function)
- Add CI (lint, typecheck, test, build)
- Add a CHANGELOG and a release process
- Add the 80% features (the obvious missing ones)

**What you ship:** v0.1.0. The first public release.

**Trap:** the scaffold is good enough. You never move to phase 3.

**How to escape:** the discipline of "ship the 80%." The scaffold
is the foundation, not the final form.

## Phase 3: Ship (week 5-12)

**Goal:** turn the tool into a product.

**Metric:** do 10+ users use it without manual intervention?

**Activities:**
- Add deployment (npm, Docker, serverless)
- Add security (secrets, rate limits, approval flows)
- Add observability (logs, traces, costs)
- Add the other 20% features (the edge cases)
- Add community channels (Discord, Discussions, etc.)

**What you ship:** v1.0.0. The stable release.

**Trap:** the ship is good enough. You start adding features
nobody asked for.

**How to escape:** the discipline of "ship what users want, not
what you want." The user is the customer. The customer is right.

## Phase 4: Sustain (month 4-12)

**Goal:** keep the project alive without burning out.

**Metric:** can you maintain the project for 6 months without it
consuming your life?

**Activities:**
- Triage issues weekly
- Review PRs within 48 hours
- Release a patch version weekly
- Delegate (find co-maintainers)
- Document the maintenance process

**What you ship:** a stable project with a healthy community.

**Trap:** the sustain is good enough. You stop innovating.

**How to escape:** the discipline of "every 6 months, ship a
major version with one new feature." The sustain is the
foundation, not the ceiling.

## Phase 5: Scale (year 2+)

**Goal:** grow the project without breaking it.

**Metric:** can 100+ users use it without breaking?

**Activities:**
- Add a governance model (BDFL, committee, foundation)
- Add a CoC (code of conduct) and contribution guide
- Add release management (semver, LTS versions, deprecation
  policy)
- Add a security policy (CVE handling, security advisories)
- Add a sustainability plan (funding, sponsors, foundation)

**What you ship:** a project with a community, a governance
model, and a sustainability plan.

**Trap:** the scale is good enough. You forget the original
users.

**How to escape:** the discipline of "every 6 months, talk to a
user." The scale is the community, not just the code.

## Phase 6: Sunset (year 5+)

**Goal:** retire the project gracefully.

**Metric:** can the project be maintained by someone else (or
not at all)?

**Activities:**
- Find a successor (a fork, a new project, a successor project)
- Document the migration path
- Archive the repo (read-only)
- Communicate to the community

**What you ship:** a graceful retirement.

**Trap:** the sunset is sad. You hold on too long.

**How to escape:** the discipline of "every project has a
lifespan." The lifespan is the project's full value. The
sunset is part of the lifespan.

## The roadmap

The 6 phases look like:

```
Week:  0   1   2   3   4   5   6   ...  12  ...  24  ...  60+
       └─┴─┘                            
       Spark                           
           └────┴────┘                 
              Scaffold                 
                     └─────┴─────┴───┴───┴───┐
                                     Sustain
                                              └────┴────┘
                                                  Scale
                                                       └─────┴──...
                                                              Sunset
```

The spark is short (1-2 weeks). The scaffold is medium (2-4
weeks). The ship is longer (4-12 weeks). The sustain is
ongoing. The scale is multi-year. The sunset is also multi-year.

Total: 5+ years to a fully-lived project.

## The tradeoffs

Each phase has different tradeoffs:

### Spark
- **+** Cheap, fast
- **+** Tests the idea
- **-** No audience

### Scaffold
- **+** Usable
- **+** Documented
- **-** Slow iteration

### Ship
- **+** Production-ready
- **+** Real users
- **-** Operational burden

### Sustain
- **+** Stable
- **+** Community
- **-** Boring

### Scale
- **+** Big community
- **+** Resilient
- **-** Slow to change

### Sunset
- **+** Graceful exit
- **+** Knowledge transfer
- **-** Sad

The right phase for your project depends on:
- **Time available** (hours per week)
- **Audience** (just you, 10 users, 1000 users)
- **Criticality** (toy, side project, business, infrastructure)
- **Personal bandwidth** (how long can you sustain this?)

## The exit criteria

Each phase has clear exit criteria:

### Spark → Scaffold
- The prototype works for you
- The idea is clear
- You want to use it yourself

### Scaffold → Ship
- A stranger can install and use it
- The docs are complete
- The tests pass
- 3+ people have used it

### Ship → Sustain
- 10+ users are happy
- The project has a regular release cadence
- The maintainer isn't burning out

### Sustain → Scale
- 100+ users are happy
- The community has co-maintainers
- The project has a sustainability plan

### Scale → Sunset
- The project is no longer growing
- A successor exists
- The community has been notified

### Sunset → Done
- The repo is archived
- The successor is in production
- The maintainer has moved on

The exit criteria are the forcing function. If you can't meet
them, you're not ready to move to the next phase. If you can
meet them, you should.

## The lesson

6 phases. 5+ years. 1 lifecycle.

The 6 phases are a roadmap, not a checklist. Most projects
skip phases (spark → sustain, no scaffold). Most projects get
stuck (spark forever, never scaffold). The phases are the
guardrails.

Move through the phases at a sustainable pace. Don't rush. Don't
skip. Don't get stuck.

The goal: a project that lived a full life. The spark, the
scaffold, the ship, the sustain, the scale, the sunset. The
lifecycle is the value.

Start with the spark. End with the sunset. The journey takes
years. The destination is worth it.
