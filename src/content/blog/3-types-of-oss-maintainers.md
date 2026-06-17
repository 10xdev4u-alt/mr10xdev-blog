---
title: "The 3 types of OSS maintainers"
description: "OSS maintainers come in 3 types: gardeners, architects, and janitors. Each has a different relationship with their projects. Which one are you? Which one do you need?"
date: 2026-05-11
tags: ["oss", "maintenance", "meta"]
---

OSS maintainers come in 3 types: gardeners, architects, and
janitors. Each has a different relationship with their projects.
Which one are you? Which one do you need?

## Type 1: The gardener

The gardener tends. They water the project, prune the issues,
fertilize the docs. They don't do big rewrites. They don't
re-architect. They just keep things alive.

**What they do:**
- Triage new issues
- Review PRs
- Fix small bugs
- Update docs
- Release new versions (often patch-level)

**What they don't do:**
- Big refactors
- Architecture changes
- New feature design

**Examples:** Most popular libraries are maintained by gardeners.
React, Vue, Express, Next.js — these are gardens. The original
author is the architect; the maintainers are the gardeners.

**Strengths:**
- Consistency. The project doesn't break.
- Stability. The API doesn't churn.
- Reliability. The issue tracker is clean.

**Weaknesses:**
- Stagnation. The project stops innovating.
- Bus factor. When the gardener leaves, the project dies.
- Slow evolution. The project falls behind the alternatives.

## Type 2: The architect

The architect designs. They think in systems. They make big
decisions. They re-architect when the current design hits a wall.

**What they do:**
- Design new features
- Make breaking changes
- Refactor the internals
- Write the docs for the new design
- Mentor contributors

**What they don't do:**
- Day-to-day issue triage
- Routine maintenance
- Release management

**Examples:** The original authors of successful libraries are
often architects. Linus Torvalds (Linux), Rich Harris (Svelte,
Rollup), Evan You (Vue, Vite). They design the system; others
maintain it.

**Strengths:**
- Vision. The project has a direction.
- Innovation. The project stays ahead.
- Quality. The architecture is sound.

**Weaknesses:**
- Risk. Big changes can break things.
- Slow. Architecture decisions take time.
- Burnout. Architects often get tired of maintaining.

## Type 3: The janitor

The janitor cleans. They sweep the bug reports, mop the technical
debt, polish the rough edges. They don't design. They don't
architect. They just make the existing thing work better.

**What they do:**
- Fix small bugs
- Refactor small things
- Update dependencies
- Improve test coverage
- Improve performance (small wins)

**What they don't do:**
- Big features
- Architecture changes
- API design

**Examples:** Most successful libraries need janitors more than
architects. After the architect designs v1, the janitors keep it
working for years.

**Strengths:**
- Quality. The codebase stays clean.
- Performance. Small wins add up.
- Reliability. The tests pass.

**Weaknesses:**
- No vision. The project might miss the next wave.
- Boring. The work is repetitive.
- Underappreciated. No one notices the janitor until they leave.

## Which one are you?

Most maintainers start as architects. The original author designs
the project. As the project grows, the architect either:
- Stays as architect and hires gardeners/janitors
- Becomes a gardener themselves
- Moves on to a new project

A healthy OSS project has all three:
- 1-2 architects (the original author, plus a senior maintainer)
- 2-5 gardeners (the day-to-day maintainers)
- 5-20 janitors (occasional contributors who do small fixes)

The ratios vary. Linux has thousands of janitors. Husk has
0-1 of each.

## Which one do you need?

It depends on the project's stage.

### For a new project (< 1 year)

You need an architect. The project is being designed. Big
decisions are being made. The architect should be the original
author.

### For a growing project (1-3 years)

You need a mix. The architect is still making big decisions,
but the gardener is needed for day-to-day. The architect
should hire a gardener.

### For a mature project (3+ years)

You need all three. The architect is mostly done designing. The
gardener is the primary. The janitors are the bulk of the work.

### For a dormant project

You need a wake-up. Either a gardener (to revive it) or an
architect (to redesign it for the modern era).

## How to be each

### To be a gardener

- Triage issues daily
- Review PRs within 48 hours
- Release a patch version weekly
- Update docs as you fix things
- Be kind to contributors

### To be an architect

- Design the major versions
- Write the migration guides
- Review the gardener's work
- Mentor new maintainers
- Be opinionated about the direction

### To be a janitor

- Find the small bugs
- Refactor the ugly code
- Add the missing tests
- Update the dependencies
- Improve the performance

## The lesson

OSS maintenance is not one job. It's three. Each requires a
different mindset. Each produces a different outcome.

A project with only gardeners is stable but stagnant. A project
with only architects is innovative but chaotic. A project with
only janitors is clean but boring.

A great OSS project has all three. The architect designs. The
gardener maintains. The janitor polishes. The users benefit.

Be the one your project needs. Or be the one your project
doesn't have yet.
