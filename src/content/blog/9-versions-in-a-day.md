---
title: "What I learned shipping 9 versions in a day"
description: "After shipping Husk v0.1.0 through v0.8.0 in a single day, here are the 12 things I learned about release velocity, CI, and the discipline of small commits."
date: 2026-06-13
tags: ["meta", "process", "release"]
---

Yesterday I shipped 9 versions of Husk. 154 commits. 229 tests. 60KB
lib bundle. Here's what I learned.

## 1. The smallest commit is the best commit

Every commit was one logical change. `feat(providers): add Anthropic`
was 1 commit. `feat(tools): add github.post_comment` was 1 commit. If
I couldn't describe the change in one line, the commit was too big.

Result: bisecting is easy, reverting is easy, reviewing is easy.

## 2. CI auto-publishes on tag push

The first 4 releases I published manually. After I got the
`~/.npmrc` write fix in place (v0.4.1, commit `7f27492`), every
subsequent release was `git tag && git push`. CI does the rest.

The 4th release in a row auto-published itself. I just wrote the
commits.

## 3. The CHANGELOG is the documentation

After 9 releases, the CHANGELOG is a 2000-word document. It tells
the story of the project better than any README could. Each entry
has: what shipped, why, what I learned, the stats.

The CHANGELOG is what someone new to the project reads first. It's
the timeline of decisions. The README is the snapshot; the
CHANGELOG is the movie.

## 4. Tests are the API

If a test doesn't exist, the feature doesn't exist. Every public
function has at least one test. The test is the contract.

After 229 tests, I can change an implementation with confidence. The
test fails → I broke something. The test passes → I didn't.

## 5. Small features ship; big features die

I broke Husk's evolution into ~10 features:
- v0.1.0: chat
- v0.2.0: tools
- v0.3.0: vector stores
- v0.4.0: init
- v0.4.1: CI
- v0.5.0: streaming + validation
- v0.6.0: MCP client + approval
- v0.7.0: MCP server + sqlite-vec
- v0.8.0: vector filter + Gemini

Each version is small enough to ship in an afternoon. Each is large
enough to deserve its own release.

## 6. The CI debug journey is part of the release

v0.7.0 failed CI. The test was `'sdkServer.registerTool' is undefined`.
The root cause: a different bun version resolved the SDK import
differently. The fix: try multiple import paths.

That's now in the v0.7.0 release notes. The CI journey is the
release's story. Future me will read it and know not to repeat the
mistake.

## 7. The local test environment is not the CI environment

The first CI failure taught me: even with the same `package.json`
and the same lockfile, different bun versions can resolve imports
differently. The fix: try multiple paths, pick the first that works.

This is a general lesson. CI != local != production. Each
environment has its own quirks. The fix is to write code that's
robust to environment differences.

## 8. The "is this a v0.X.0 or v0.X.Y?" question is a code smell

If you're asking whether a change is minor or patch, the change is
probably minor. Reserve patch for bugfixes that don't change the API.

I bumped minor (v0.5.0, v0.6.0, v0.7.0, v0.8.0) for new features. I
bumped patch (v0.4.1) for one fix after v0.4.0.

## 9. The release is the launch

Every release is a launch. A CHANGELOG entry. A blog post. A tweet.
A Show HN (sometimes). The release is when the world hears about
your work. The code is the artifact; the release is the narrative.

## 10. The hardest part is the discipline

The discipline of:
- One commit per change
- One feature per release
- One test per feature
- One CHANGELOG entry per release
- One push per release

It's boring. It's repetitive. It's what makes the difference
between "I shipped a thing" and "I shipped a project."

## 11. The community finds the bugs

After 9 releases, GitHub Issues started accumulating. The first
one was a real bug I missed. The second was a feature request that
turned into v0.6.0. The third was a doc typo.

Ship and the community finds the things you missed. Hold back and
they never see them.

## 12. The meta: this very post

This post is itself an experiment in shipping velocity. I wrote it
in 15 minutes. The discipline of "ship the smallest thing that
covers 80%" applies to blog posts too.

Now let me ship the next version.
