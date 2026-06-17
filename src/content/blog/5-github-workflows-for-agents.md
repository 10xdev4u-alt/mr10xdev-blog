---
title: "The 5 most useful GitHub workflows for AI agents"
description: "Five GitHub Actions workflows every AI-powered repo needs: validate agents, smoke-test on PR, post release notes, weekly health, dependency updates. The exact YAML, the rationale."
date: "2026-05-05"
tags: ["github-actions", "agents", "ci"]
---

Five GitHub Actions workflows every AI-powered repo needs. The
exact YAML, the rationale, the implementation. Use them; ship them.

## 1. Validate agent manifests on every PR

Every time someone changes an agent manifest, validate it.

```yaml
name: Validate agents

on:
  pull_request:
    paths:
      - '.github/agents/**'
  push:
    branches: [main]
    paths:
      - '.github/agents/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install gitagent
        run: npm install -g gitagent
      - name: Validate
        run: gitagent validate
```

Why: catches manifest errors before they merge. A typo in a tool
name, a missing trigger, an invalid model — all caught here.

## 2. Smoke-test agents on every PR

Every time someone changes an agent, run it against a sample event
and check the output.

```yaml
name: Agent smoke test

on:
  pull_request:
    paths:
      - '.github/agents/**'
      - 'examples/**'
      - 'fixtures/**'

jobs:
  smoke:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install gitagent
        run: npm install -g gitagent
      - name: Run triage on sample issue
        run: |
          gitagent dev \
            --event issues.opened \
            --agent triage \
            --payload fixtures/sample-issue.json \
            --repo ${{ github.repository }} \
            --dry-run \
            | tee smoke-output.json
      - name: Check output
        run: |
          if ! grep -q '"ok": true' smoke-output.json; then
            echo "Smoke test failed"
            exit 1
          fi
```

Why: catches regression bugs. The agent might compile but produce
wrong output. The smoke test exercises the full path.

## 3. Post release notes on tag

When you tag a release, generate release notes from the merged PRs
and post them.

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: read
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install gitagent
        run: npm install -g gitagent
      - name: Generate release notes
        run: |
          NOTES=$(gitagent run release \
            --action published \
            --repo ${{ github.repository }} \
            --dry-run)
          echo "$NOTES" > release-notes.md
      - name: Create release
        uses: softprops/action-gh-release@v2
        with:
          body_path: release-notes.md
          generate_release_notes: false
```

Why: the release notes are consistent. The user gets a CHANGELOG-
style summary every release. The agent does the work.

## 4. Weekly health report

Once a week, post a comment to a "health" issue with the org's
status.

```yaml
name: Weekly health

on:
  schedule:
    - cron: '0 9 * * 1'  # Monday 9am UTC
  workflow_dispatch:

jobs:
  health:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install gitagent
        run: npm install -g gitagent
      - name: Run health agent
        run: |
          gitagent run health \
            --action schedule.weekly \
            --repo ${{ github.repository }} \
            > weekly-health.md
      - name: Find or create health issue
        uses: actions/github-script@v7
        with:
          script: |
            const { data: issues } = await github.rest.issues.listForRepo({
              owner: context.repo.owner,
              repo: context.repo.repo,
              labels: 'weekly-health',
              state: 'open',
            });
            if (issues.length > 0) {
              await github.rest.issues.createComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: issues[0].number,
                body: require('fs').readFileSync('weekly-health.md', 'utf8'),
              });
            } else {
              await github.rest.issues.create({
                owner: context.repo.owner,
                repo: context.repo.repo,
                title: 'Weekly health: ' + new Date().toISOString().split('T')[0],
                labels: ['weekly-health'],
                body: require('fs').readFileSync('weekly-health.md', 'utf8'),
              });
            }
```

Why: weekly visibility into repo health. The team can see what's
happening without checking GitHub. The agent does the work.

## 5. Dependency updates (Dependabot)

Keep your deps up to date automatically.

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    groups:
      production-dependencies:
        dependency-type: "production"
      development-dependencies:
        dependency-type: "development"
```

Why: security patches land automatically. The agent reviews the
PRs (or a human does). The supply chain stays current.

## The 5 together

These 5 workflows cover the 80% of an AI agent repo's automation:

1. **Validate** — catches manifest errors
2. **Smoke test** — catches runtime errors
3. **Release** — generates consistent notes
4. **Health** — provides weekly visibility
5. **Deps** — keeps the supply chain current

Each is a 30-line workflow. Each saves 1-2 hours per week. Each
catches a class of bug that would otherwise slip through.

## The lesson

CI is the credibility signal. A repo without CI is a repo
without trust. The 5 workflows above are the minimum. Add more
as needed.

The cost is 30 minutes of setup. The payoff is infinite.

Copy these. Adapt them. Ship them. The agent ecosystem is better
when every repo has these.
