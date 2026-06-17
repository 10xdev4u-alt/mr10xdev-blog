---
title: "The 5 things every agent changelog should mention"
description: "A good changelog entry is the difference between users upgrading and users being surprised. The 5 things every agent changelog should mention. The format, the structure, the example."
date: 2026-04-04
tags: ["changelog", "agents", "process"]
---

A good changelog entry is the difference between users upgrading
and users being surprised. The 5 things every agent changelog
should mention. The format, the structure, the example.

## The 5 things

### 1. What changed (1 line)

The headline. The one-line summary.

```markdown
### Added
- `github.create_issue` and `github.update_issue` tools
```

Not:
```markdown
- Updated the GitHub tools to include new functionality
```

The first is specific. The user knows what they get. The second
is vague. The user has to read the docs.

### 2. Why it changed (1-2 sentences, optional)

The motivation. The user might not need this, but it's helpful.

```markdown
### Added
- `github.create_issue` and `github.update_issue` tools
  for agents that need to file follow-ups (e.g., the
  `meta` agent files issues for typo'd labels).
```

The "why" helps the user understand the use case. The user can
decide if the change is relevant to them.

### 3. How to use it (example, optional)

A quick example. The user can copy-paste.

```markdown
### Added
- `github.create_issue` and `github.update_issue` tools
  for agents that need to file follow-ups.

  Usage:
  ```yaml
  tools:
    - github.create_issue
    - github.update_issue
  ```
```

The example is the fastest way for the user to understand the
change. The user can adapt the example to their use case.

### 4. What's breaking (always, for breaking changes)

The breaking change. The user MUST know.

```markdown
### BREAKING
- The `memory.write` tool now requires `metadata` to be an
  object, not a string. Update your code:
  ```diff
  - memory.write({ key: 'foo', content: 'bar', metadata: 'tag' })
  + memory.write({ key: 'foo', content: 'bar', metadata: { tag: 'x' } })
  ```
```

The breaking change is the most important. The user needs to
know before they upgrade. The diff makes the change concrete.

### 5. Migration path (always, for breaking changes)

What to do if the change breaks your code.

```markdown
### BREAKING
- The `memory.write` tool now requires `metadata` to be an
  object, not a string.

  Migration:
  ```ts
  // Before
  memory.write({ key, content, metadata: 'tag' });
  // After
  memory.write({ key, content, metadata: { tag: 'x' } });
  ```

  Or use a codemod:
  ```bash
  npx gitagent-codemod memory-metadata-string-to-object src/
  ```
```

The migration path makes the upgrade less painful. The user
can do the migration in 5 minutes, not 5 hours.

## The format

Use Keep a Changelog format:

```markdown
## [Unreleased]

### Added
- ...

### Changed
- ...

### Deprecated
- ...

### Removed
- ...

### Fixed
- ...

### Security
- ...
```

The 6 categories. The user can scan. The user can find what
they need.

## The structure

For each entry, use this template:

```markdown
- <summary> ([#<PR>](<url>))
```

The PR number and URL are the most important. The user can
follow the link to see the full context.

Example:
```markdown
- `github.create_issue` and `github.update_issue` tools
  for agents that need to file follow-ups. ([#42](https://github.com/10xdev4u-alt/gitagent/pull/42))
```

## The 80/20

80% of the value comes from:
- The headline (1 line)
- The PR link
- The category (Added, Changed, Fixed, etc.)

20% comes from:
- The why
- The example
- The migration path

If you're short on time, do the 80% first. Add the 20% when
you have time.

## The 5 anti-patterns

### Anti-pattern 1: The vague

```markdown
- fixed stuff
- added things
- refactored
```

The vague changelog is the worst. The user can't tell what
changed. The user doesn't know if they need to upgrade.

### Anti-pattern 2: The internal

```markdown
- Updated the schema validator to use zod v3
- Refactored the runner to use async/await
```

The internal changelog is for the maintainer, not the user.
The user doesn't care about the implementation. The user
cares about the behavior.

### Anti-pattern 3: The marketing

```markdown
- Improved performance by 10x!
- Added a revolutionary new feature!
- Unleashed the power of AI!
```

The marketing changelog is noise. The user doesn't believe
it. The user wants facts, not hype.

### Anti-pattern 4: The dump

```markdown
- Fixed typo in docs
- Bumped dependency foo
- Updated CI config
- Refactored error handling
- Added more tests
- ... (50 more lines)
```

The dump changelog is everything that changed. The user can't
find what they care about. The user has to read 50 lines.

### Anti-pattern 5: The missing

```markdown
(empty)
```

The missing changelog is the worst. The user doesn't know what
changed. The user is surprised when something breaks.

## The example

Here's a good changelog entry for an agent release:

```markdown
## [0.9.0] - 2026-09-01

### Added
- `memory.search` tool for semantic search of agent memory.
  Requires `semantic: true` in the manifest's `memory` config.
  ([#89](https://github.com/10xdev4u-alt/gitagent/pull/89))
- New `schedule.weekly` event for periodic agent runs. Configure
  in the manifest with the `schedule:` block.
  ([#92](https://github.com/10xdev4u-alt/gitagent/pull/92))

### Changed
- The default model for new agents is now `claude-sonnet-4-5`.
  Existing agents are unaffected. ([#88](https://github.com/10xdev4u-alt/gitagent/pull/88))

### Fixed
- The webhook signature verification no longer fails on empty
  payloads. ([#91](https://github.com/10xdev4u-alt/gitagent/pull/91))

### Security
- Updated the Anthropic SDK to fix a token-leakage vulnerability
  in error messages. ([#90](https://github.com/10xdev4u-alt/gitagent/pull/90))
```

5 entries. 5 PRs. Clear categories. Specific changes. The user
can find what they care about.

## The lesson

5 things. 5 anti-patterns. 1 example.

The changelog is the contract between the maintainer and the
user. The contract should be clear, specific, and useful. The
5 things are the floor. The 5 anti-patterns are the ceiling.

The agent that has a good changelog is trustable. The agent
that has a bad changelog is a mystery. The choice is yours.

The agent era is here. The changelog is the project. Write it
well.
