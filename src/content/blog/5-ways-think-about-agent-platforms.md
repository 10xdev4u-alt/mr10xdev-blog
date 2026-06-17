---
title: "The 5 ways to think about agent platforms (in production)"
description: "5 ways to think about platforms: CLI, web, IDE, GitHub, mobile. Each is a different platform. The framework, the examples, the lesson."
date: 2025-12-22
tags: ["platforms", "agents", "production"]
---

5 ways to think about platforms: CLI, web, IDE, GitHub,
mobile. Each is a different platform. The framework, the
examples, the lesson.

## Platform 1: CLI

The agent runs in the terminal. The agent is a command.
The agent is for developers.

**Examples:**
- `gitagent run triage`
- `gitagent memory list`
- `gitagent logs --run=r1`

**When to use:** the user is a developer. The user is in
the terminal. The user wants speed.

**Pros:**
- Fast (the CLI is fast)
- Scriptable (the CLI is scriptable)
- Standard (the CLI is universal)

**Cons:**
- Steep (the CLI is steep)
- Limited (the CLI is text-only)
- Coupled (the CLI is tied to the terminal)

## Platform 2: Web

The agent runs in the browser. The agent is a UI. The
agent is for users.

**Examples:**
- A web app that runs the agent
- A dashboard that shows the agent's status
- A form that triggers the agent

**When to use:** the user is a non-developer. The user is
in the browser. The user wants UI.

**Pros:**
- Visual (the web is visual)
- Accessible (the web is accessible)
- Standard (the web is universal)

**Cons:**
- Slow (the web is slow)
- Coupled (the web is tied to the browser)
- Cost (the web has hosting cost)

## Platform 3: IDE

The agent runs in the IDE. The agent is a plugin. The
agent is for developers.

**Examples:**
- A VS Code extension that runs the agent
- A JetBrains plugin that runs the agent
- A Vim plugin that runs the agent

**When to use:** the user is a developer. The user is in
the IDE. The user wants integration.

**Pros:**
- Integrated (the IDE is integrated)
- Fast (the IDE is fast)
- Standard (the IDE is the standard)

**Cons:**
- Specific (the IDE is tied to one IDE)
- Limited (the IDE is one tool)
- Coupled (the IDE is tied to the IDE)

## Platform 4: GitHub

The agent runs in GitHub. The agent is a workflow. The
agent is for GitHub users.

**Examples:**
- A GitHub Action that runs the agent
- A GitHub App that triggers the agent
- A GitHub webhook that runs the agent

**When to use:** the user is on GitHub. The user is in
the repo. The user wants automation.

**Pros:**
- Integrated (the GitHub is integrated)
- Free (the GitHub Actions are free for public repos)
- Standard (the GitHub is universal for OSS)

**Cons:**
- Specific (the GitHub is tied to GitHub)
- Limited (the GitHub has 6h max)
- Coupled (the GitHub is tied to the GitHub Actions)

## Platform 5: Mobile

The agent runs on mobile. The agent is an app. The agent
is for users.

**Examples:**
- An iOS app that runs the agent
- An Android app that runs the agent
- A Slack app that runs the agent

**When to use:** the user is on mobile. The user is in
the app. The user wants on-the-go.

**Pros:**
- Portable (the mobile is portable)
- Personal (the mobile is personal)
- Accessible (the mobile is accessible)

**Cons:**
- Limited (the mobile has limited input)
- Coupled (the mobile is tied to the OS)
- Cost (the mobile has app store cost)

## The 5 together

The 5 are the platforms. The platforms are the surfaces.
The surfaces are the value.

| Platform | Audience | Best for |
|---|---|---|
| CLI | Developer | Speed |
| Web | User | UI |
| IDE | Developer | Integration |
| GitHub | GitHub user | Automation |
| Mobile | User | On-the-go |

The platform that matches the user is the right platform.

## The 80/20

80% of the value comes from:
- CLI (the developer is fast)
- GitHub (the GitHub user is integrated)

20% comes from:
- Web (the user has UI)
- IDE (the developer is integrated)
- Mobile (the user is on-the-go)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the user a developer? (CLI, IDE)
- Is the user a non-developer? (Web, Mobile)
- Is the user on GitHub? (GitHub)

The right answer is the right platform at the right cost.

## The lesson

5 platforms. 1 platform. 1 lesson: pick the right one.

The platform that matches the user is the right platform.
The platform that doesn't match is the wrong platform.

The agent era is here. The platform is the design. The
design is the choice. The choice is the discipline.
