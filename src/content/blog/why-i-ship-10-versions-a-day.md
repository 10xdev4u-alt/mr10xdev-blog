---
title: "Why I ship 10 versions a day"
description: "The methodology behind Mr. 10x Dev: small commits, fast CI, tests-as-specs, and the release-as-narrative. Why atomic shipping beats perfect planning."
date: 2026-06-12
tags: ["meta", "process", "indie"]
---

A friend asked: "how do you ship 6 versions of a library in one day?"
Here's the actual methodology.

## 1. Small commits, always

Every commit is one logical change. If I can't describe a commit in
one line, it's too big. The result: every change is reviewable,
revertable, and bisectable.

```
feat(providers): add Anthropic, OpenAI, and OpenAI-compatible providers with streaming
feat(tools): add default tool factory and public tools subpath entry
test(memory): cover SqliteMemory with 8 cases including persistence
fix: pass clientFactory through to Octokit; fix ZodArray def access
```

## 2. CI auto-publishes on tag

The whole release flow is:

1. Bump version
2. Update CHANGELOG
3. Commit
4. `git tag v0.X.Y && git push --tags`
5. CI publishes to npm automatically

The 6th release in a row this week shipped itself. I just wrote the
commits.

## 3. Tests as the spec

If a test doesn't exist, the feature doesn't exist. The test is the
contract. I write the test first, then make it pass. By the time I'm
done, the public API is documented via tests.

## 4. The release IS the changelog

A version bump with no release notes is a wasted opportunity. The
release notes are:

- A blog post (this site)
- A CHANGELOG.md entry
- A GitHub release with bullet points
- A tweet thread (sometimes)
- A Show HN (when the version is interesting)

The release is the narrative. The code is the artifact. The narrative
is what spreads.

## 5. Don't polish, publish

The biggest enemy of shipping is polish. "Just one more refactor" is
how projects die. Publish at "good enough". Users will tell you what's
broken; the bug fix is the next commit.

## 6. Build for the 1, not the 100

A library that 10 people love is better than a library 100 people
tolerate. Optimize for the power users — they'll tell you what's
wrong and pull request the fix.

## 7. The compound effect

Each release is a tiny step. After 6 releases in a day, you have a
library that:

- Covers the obvious 80% of use cases
- Has tests for every feature
- Has docs for every public API
- Has a CHANGELOG that doubles as a tutorial
- Has a GitHub release that doubles as a launch post

All in one day.

The methodology is unglamorous. The output is impressive. The trick is
to make shipping feel like a reflex, not a milestone.
