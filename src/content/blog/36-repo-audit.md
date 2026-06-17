---
title: "The 36-repo audit: project soup"
description: "An honest audit of my 36 GitHub repos. What's alive, what's dormant, what's dead, what to revive. A wake-up plan with gitagent."
date: 2026-06-07
tags: ["audit", "github", "process", "wake-up"]
---

I have 36 repos on GitHub (TeamMavericKX + personal). 27 public, 9
private. Last week I audited each one. Here's what I found.

## The numbers

- **Total repos:** 36
- **Active in last 30 days:** 3
- **Dormant (6+ months):** 20+
- **With 0 open issues:** All of them
- **With descriptions:** ~30%
- **With CI:** ~20%
- **With stars:** 4
- **With releases:** 8
- **With CHANGELOG:** 5

This is "project soup." Lots of starts, few finishes, no ongoing
maintenance.

## The categories

### Tier 1: alive and shipping

- **gitissues** — issues-as-commits. Active. Public. Used.
- **.gitissues** — the private meta-repo. Active.
- **aether-proxy** — AI gateway. Active. 26 models, Docker, Langfuse.

### Tier 2: dormant but high-value

- **project-parasite** — 20 stars, 16 phases of design, no code.
- **HackFest3.0x** — 10 stars, dormant hackathon project.
- **NanoCI** — minimal CI in Go, dormant but clean.
- **WebStats** — analytics, dormant.
- **TaskFlowx** — task tracker, dormant.

### Tier 3: experiments that didn't pan out

- **APAS** — adaptive prompt system. Didn't go anywhere.
- **InnerveX** — neural net experiment. Old.
- **Storm4TA** — technical analysis. Old.

### Tier 4: meta tools

- **brocode** — vendored opencode CLI.
- **pi-studio** — multi-agent UI.
- **husk** — agent framework.
- **gitagent** — agent host.

## The wake-up plan

I have 20+ dormant repos. Each one is a candidate for the
gitagent wake-up pattern:

1. **Read the README.** What's the project about?
2. **File one issue per missing feature.** Based on the design and
   the existing code.
3. **Scaffold starter files.** Boilerplate so a contributor can
   start.
4. **Open a PR with the scaffolding.** Ready to merge.
5. **Add a "wake-up" agent manifest.** The agent maintains the
   project from here.

The output: each dormant repo goes from "20 stars, 0 code, 6
months stale" to "20 stars, 16 issues, 16 starter files, active
agent." In 30 minutes per repo.

## The 80/20 of repo maintenance

Three actions cover 80% of repo health:
1. **README exists and is up to date.** (1 commit)
2. **CI runs on every push.** (1 workflow file)
3. **Issues are triaged within a week.** (1 agent + 1 manifest)

The 20% is everything else. Most repos can get to 80% with one
afternoon of work. The 20% is a long tail.

## What I learned

### 1. The 80/20 is the same for every repo

Every repo needs:
- A clear README
- A working CI
- A way for users to report issues
- A way for maintainers to triage
- A way for contributors to PR

The implementation differs. The principle doesn't.

### 2. Dormant projects are a tax

A dormant project is a tax on:
- **Your brand.** GitHub's "active in last 30 days" metric is a
  public signal.
- **Your network.** People who starred but haven't heard from
  you are quietly unsubscribing.
- **Yourself.** Every time you think about the project, you feel
  guilty for not maintaining it.

A wake-up closes the loop. The project is either alive or archived.

### 3. The agent is the maintainer

A 30-minute wake-up isn't sustainable. The project will go dormant
again in 3-6 months unless something maintains it. The agent is
the answer.

The wake-up is the bootstrap. The agent is the long-term solution.

## The plan

This week:
- Wake up PARASITE (the highest-value dormant project)
- Wake up NanoCI
- Wake up TaskFlowx
- Wake up WebStats

Next week:
- Wake up the Tier 3 experiments. Either revive or archive.
- Add a "wake-up" workflow to gitagent (one PR per dormant repo)

The end state: every repo in the org has a README, CI, an active
issue tracker, and a gitagent manifest. The "project soup" becomes
a "project garden."

## Try it yourself

The wake-up pattern works for any dormant project. The minimum
viable version:
1. Read the README.
2. File 3 issues: "improve README", "add CI", "add tests".
3. Open a PR for each.
4. Add a `triage` agent manifest.

That's a 30-minute wake-up. The agent maintains it from there.
