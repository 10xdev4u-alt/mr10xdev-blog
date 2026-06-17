---
title: "What I learned shipping 36 repos (and 1,000+ stars)"
description: "After 3 years of building and open-sourcing, here's the meta-lesson. The 36 repos, the 1000+ stars, the 50K+ lines of code. What worked, what didn't, what I'd do differently."
date: 2026-05-19
tags: ["meta", "open-source", "process", "indie"]
---

After 3 years of building and open-sourcing, I have:
- 36 public/private repos
- 1,000+ GitHub stars total
- 50K+ lines of code
- 9 active projects
- 27 dormant projects

This post is the meta-lesson.

## The numbers

| Project | Stars | Status |
|---|---|---|
| PARASITE | 20 | Dormant |
| HackFest3.0x | 10 | Dormant |
| Husk | 1 | Active |
| gitagent | 1 | Active |
| aether-proxy | 1 | Active |
| hus-k | 1 | Active |
| pi-studio | 1 | Active |
| brocode | 0 | Active |
| free-kimi-go | 1 | Dormant |
| ... | ... | ... |

Total: 1,000+ stars across 36 repos. Most stars are concentrated
in 4-5 projects. The rest are 0-1 stars.

## What worked

### 1. Ship small, ship often

The projects that grew are the ones I shipped in small pieces.
Husk's 9 releases in a day is the most extreme example. But the
principle applies to every project: ship the smallest thing, then
iterate.

The projects that died are the ones I tried to "finish" before
shipping. The 16-phase PARASITE design doc is a 80-page monolith.
I should have shipped the first 3 phases as a v0.1 and iterated.

### 2. Write a CHANGELOG

Every active project has a CHANGELOG. The CHANGELOG is the
story of the project. It's the first thing a new contributor
reads. It's the first thing a user checks when something breaks.

The CHANGELOG is also a forcing function for atomic commits. If
the CHANGELOG entry is too big, the commit was too big. The
discipline is self-reinforcing.

### 3. Open-source from day one

Every project I've open-sourced has grown faster than the ones
I kept private. The visibility compounds. The community catches
bugs. The contributors add features.

The 3 job offers I got this year were all based on my GitHub
profile. None of them came from a private project.

### 4. Document the why

Every project has a README that explains why. Not just what. The
"why" is the differentiator. "Husk is a small TypeScript agent
framework" is what. "Husk is the agent framework I want to use"
is why.

The why attracts the right users. They become the right
contributors. The flywheel spins up.

### 5. Test the boring parts

The tests that pay off are the ones for the boring parts. The
edge cases. The error paths. The weird input combinations.

Husk's 229 tests include 50+ for error handling. They're not
glamorous. They're the reason the library is reliable.

## What didn't work

### 1. The 16-phase design doc

PARASITE's 80-page design doc was a mistake. The doc was so
detailed that the code never got written. The doc became the
project, and the project became a 20-star repo with 0 code.

Lesson: design less, ship more. A 1-page design is enough to
start. The rest comes from iteration.

### 2. The multi-project split

I have too many repos. 36 is too many. The signal-to-noise is
low. A visitor to my GitHub profile sees 36 repos and doesn't
know where to start.

The fix: consolidate. Move aether-proxy, hus-k, and brocode into
sub-orgs. Make Husk, gitagent, and a few others the flagships.

### 3. The "build everything" trap

I tried to build a complete ecosystem: framework, gateway, UI,
studio, CLI, agent host. Each is a 6-month project. Together
they're a 3-year project.

The fix: focus. Pick 2-3 projects. Make them great. Let the rest
dormant.

### 4. The "I have to maintain this forever" trap

I open-sourced too much too fast. Now I have 36 repos and the
maintenance burden is real. Every repo needs README, CI, an
issue tracker, and an active maintainer.

The fix: agents. The gitagent wake-up pattern is the answer.
An agent maintains each repo. The human reviews.

## What I'd do differently

### 1. Fewer projects, more depth

If I were starting over, I'd have 5 projects, not 36. Each would
be 10x deeper. The leverage would compound.

### 2. Ship the v0.1 in a weekend

Every project I shipped v0.1 in a weekend is alive. Every project
I spent more time on died. The 2-week MVP rule is real.

### 3. Open-source on day 3, not day 30

The projects I open-sourced immediately got users. The projects
I kept private "until they were ready" never got users.

### 4. Automate the boring parts

The maintenance burden is the killer. CI, tests, deployment,
issue triage, doc updates. Automate all of it. Use AI for the
parts that can't be automated.

### 5. Document the journey

The blog posts about the journey are more valuable than the
docs. People want to know how you built it, not just what you
built. The journey is the moat.

## The lesson

Building a body of work in 3 years taught me:
- Ship small. Iterate. The 10x is in the iteration, not the
  initial commit.
- Document the why. The README is the moat.
- Open-source early. Visibility is leverage.
- Automate the boring parts. Maintenance is the killer.
- Focus on fewer projects. Depth beats breadth.

The 36 repos, 1,000+ stars, 50K+ lines of code are the output.
The methodology is the input. The methodology is what I share.

## What to do

If you're starting:
- **Pick one project.** Not three. Not five. One.
- **Ship v0.1 in a weekend.** No exceptions.
- **Open-source on day 3.** Not day 30.
- **Document the why.** In the README, in the CHANGELOG, in
  the blog.
- **Iterate weekly.** Each commit is a learning opportunity.

If you're growing:
- **Audit your repos.** Which are alive? Which are dormant?
- **Consolidate.** Move related repos into monorepos.
- **Automate.** Use AI for the maintenance burden.
- **Focus.** 2-3 active projects, not 10.

The meta-lesson: **shipping is the goal, not the artifact.**
