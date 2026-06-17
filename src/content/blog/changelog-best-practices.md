---
title: "How I write a CHANGELOG that doesn't suck"
description: "A CHANGELOG is the history of your project. Most are unreadable. Here's how to write one that's actually useful — for users, contributors, and your future self."
date: 2026-05-10
tags: ["changelog", "process", "docs"]
---

A CHANGELOG is the history of your project. Most are unreadable.
Here's how to write one that's actually useful — for users,
contributors, and your future self.

## The bad CHANGELOG

```
## v1.2.3
- fixed stuff
- added things
- refactored
```

This tells the user nothing. Which stuff? Which things? What did
the refactor change? The user is left guessing.

## The good CHANGELOG

```
## v1.2.3 — 2026-05-15

### Fixed
- Fixed a race condition in `getFile` that caused the wrong file
  to be returned when the user switched branches mid-read.
  Reported by @alice in #142.

### Added
- New `github.add_reaction` tool. Supports `+1`, `-1`, `laugh`,
  `hooray`, `confused`, `heart`, `rocket`, `eyes`.

### Changed
- `gitagent dev` now uses a mock LLM by default. Set
  `GITAGENT_DEV_LIVE=1` to use a real provider.
```

This tells the user what changed, why, and how. The user can
decide whether to upgrade.

## The format

I use [Keep a Changelog](https://keepachangelog.com/) with
[Semantic Versioning](https://semver.org/). The format:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- New feature in progress

## [1.2.3] - 2026-05-15

### Fixed
- Description

### Added
- Description

### Changed
- Description

## [1.2.2] - 2026-05-01

### Fixed
- Description

[Unreleased]: https://github.com/owner/repo/compare/v1.2.3...HEAD
[1.2.3]: https://github.com/owner/repo/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/owner/repo/releases/tag/v1.2.2
```

The structure:
- **Unreleased** section at the top
- Each version is a section, newest first
- Each section has `### Added`, `### Changed`, `### Deprecated`,
  `### Removed`, `### Fixed`, `### Security`
- Each entry is a short sentence with a link to the issue/PR
- Footer with version comparison links

## The categories

### Added

For new features. Anything the user can now do that they couldn't
before.

### Changed

For changes to existing functionality. Anything the user was doing
that now works differently.

### Deprecated

For features that will be removed in a future version. The user
should plan to migrate.

### Removed

For features that have been removed. The user MUST migrate.

### Fixed

For bug fixes. Anything that was broken that now works.

### Security

For security fixes. These should be highlighted so users can
prioritize the upgrade.

## The entries

Each entry is one short sentence. The sentence answers:
- What changed?
- Why? (if not obvious)
- Where? (link to issue, PR, or commit)

Good:
- "Fixed a race condition in `getFile` that caused the wrong file
  to be returned when the user switched branches mid-read. (#142)"

Bad:
- "Fixed bug"
- "Fixed a race condition in getFile"
- "Fix #142"

The good entry tells the user what was wrong, what they should
expect now, and where to learn more. The bad entry tells the user
nothing useful.

## The audience

The CHANGELOG has 3 audiences:
1. **Users** — should I upgrade?
2. **Contributors** — what's the current state of the project?
3. **Future you** — what did I do 6 months ago?

Write for all three. The user is the primary; the others are
secondary.

## The frequency

Update the CHANGELOG on every release. Not every commit, every
release. The CHANGELOG is a release log.

If you ship daily, update daily. If you ship weekly, update
weekly. The discipline is the same.

## The tools

I use a manual `CHANGELOG.md`. I write the entry as part of the
release commit. The release script then generates the diff link
at the bottom.

For larger projects, tools like `release-please` automate this.
For smaller projects, the manual approach is fine.

## The mistake I made

For the first 2 years of Husk, I kept the CHANGELOG in
descriptions on GitHub releases. Not in `CHANGELOG.md`. The result:
- Users had to dig through releases to find what changed
- Contributors couldn't see the history at a glance
- I couldn't grep the history

When I moved to a `CHANGELOG.md` file, everything got easier. The
file is the source of truth. The releases are derived from it.

The lesson: **put the CHANGELOG in the repo, not in GitHub
releases.** Both are good, but the file is the source.

## The lesson

A CHANGELOG is documentation that pays for itself. Every entry
saves a future user (or contributor, or you) 10 minutes of
"what changed?" research. Over the life of a project, that's
hundreds of hours.

Write it. Update it. Link to it. Make it part of the release
process.

The CHANGELOG is the story of your project. Tell the story well.
