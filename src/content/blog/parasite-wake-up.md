---
title: "PARASITE: a 20-star project with no code"
description: "PARASITE is a 16-phase security design doc with 20 GitHub stars and zero code in the main repo. The story of dormant IP and how gitagent could wake it up."
date: 2026-06-09
tags: ["parasite", "security", "dormant", "wake-up"]
---

PARASITE has 20 GitHub stars, 16 phases of design, and zero code in
its main repository. The design is brilliant. The implementation is
somewhere in a subdirectory I'm scared to look at.

This post is about the gap between design and code, and how an AI
agent could close it.

## The project

PARASITE is a security research project I designed for the RIFT'26
Hackathon. The thesis: container network interfaces (CNIs) are a
vulnerable attack surface. PARASITE inserts a malicious CNI that
intercepts pod-to-pod traffic in a Kubernetes cluster.

The design has 16 phases:
1. Recon (scan the cluster for CNIs)
2. Inject (deploy the malicious CNI)
3. Capture (sniff pod traffic)
4. Classify (identify high-value targets)
5. Exfiltrate (leak secrets over DNS)
6. Pivot (move laterally)
7. Persist (survive pod restarts)
8. Detect (avoid runtime security tools)
9. ... and 8 more

Each phase is a 5-page design doc. The total is 80 pages. The design
won a hackathon. 20 people starred the repo.

## The gap

The design is in `README.md` and a `docs/` folder. The code is...
somewhere. I started writing it during the hackathon. Then the
hackathon ended. Then I got distracted. Then 6 months passed.

When I look at the repo today:
- 20 stars
- 0 open issues
- 0 pull requests
- Last commit: 6 months ago
- "stars but no activity" = "dying project" by GitHub standards

## The wake-up

The dream: an agent reads the 80-page design doc, files one issue
per phase, scaffolds starter code for each, and accepts PRs. The
agent becomes a project manager for a project that has no human
project manager.

The killer demo:

> I pointed a Husk-powered agent at my 6-month-old design doc. It
> filed 16 issues (one per phase), scaffolded starter code, and
> started accepting PRs. The project went from 20 stars / 0 code to
> 20 stars / 16 issues / 16 starter files in 30 minutes.

## The reality

This is exactly what [gitagent](https://github.com/10xdev4u-alt/gitagent)
is designed for. The agent lives in the repo. The manifest says:
"Read PARASITE-design.md. File an issue for each phase. Scaffold a
starter file. Open a PR. Comment on the issue with the link."

The agent does it. The repo wakes up. The stars start increasing
again. Other contributors see the activity and start opening their
own PRs.

## The general pattern

PARASITE is not unique. Half of the repos on my GitHub are in the
same state: design but no code, or code but no maintenance. The
wake-up pattern applies to all of them.

The repo audit (June 2026):
- 55 public repos
- 10 followers
- 12 following
- Only 3 repos active in the last 30 days
- 36 total repos across the org (TeamMavericKX)
- 0 open issues
- 0 projects
- Most repos lack descriptions

This is "project soup." Lots of ideas, few finished products, no
ongoing maintenance. The gitagent wake-up pattern is the cure.

## What's next

I'm going to point gitagent at PARASITE this week. The agent will:
1. Read the 80-page design
2. File 16 issues
3. Scaffold 16 starter files
4. Open a PR with the scaffolding
5. Comment on the issue with the PR link

If it works, I'll point it at the other 30+ dormant repos. Each one
becomes a 30-minute wake-up.

The 80/20 of OSS maintenance: a single agent can maintain 50 repos
that a human can't.
