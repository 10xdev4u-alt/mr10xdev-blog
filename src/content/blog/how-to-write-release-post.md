---
title: "How to write a release post in 30 minutes"
description: "The release post is the public face of your work. Most are bad. Here's a 30-minute template that works. The 5 sections, the 3 anti-patterns, the example."
date: 2026-03-24
tags: ["release", "writing", "process"]
---

The release post is the public face of your work. Most are bad.
Here's a 30-minute template that works. The 5 sections, the
3 anti-patterns, the example.

## The 5 sections

### 1. The headline (1 line)

What's the release? Why should the user care?

```markdown
# v0.9.0: Vector search + Gemini provider
```

Not:
```markdown
# v0.9.0 Released
```

The first is specific. The user knows what they get. The
second is generic. The user has to read more.

### 2. The what (1 paragraph)

What changed? Be specific. The user can scan.

```markdown
This release adds vector search to the memory layer and a new
Gemini provider. The vector search makes the agent's memory
queryable by meaning, not just by key. The Gemini provider lets
you use Google's models without changing your agent code.
```

Not:
```markdown
This release contains many improvements and bug fixes. We are
excited to share these changes with you.
```

The first is specific. The user knows what they get. The
second is filler. The user gives up.

### 3. The how (example)

A copy-paste example. The user can run it in 30 seconds.

````markdown
## How to use

```yaml
model:
  provider: google
  name: gemini-2.5-flash

memory:
  type: sqlite
  semantic: true
```
````

Not:
```markdown
## How to use

See the docs for details.
```

The first gives the user a starting point. The user can adapt.
The second leaves the user to figure it out. The user gives
up.

### 4. The upgrade (for breaking changes)

If anything is breaking, say so. Show the diff.

```markdown
## Upgrading

If you're using `memory.write` with `metadata` as a string,
update to use an object:

\`\`\`diff
- memory.write({ key: 'foo', metadata: 'tag' })
+ memory.write({ key: 'foo', metadata: { tag: 'x' } })
\`\`\`
```

The user knows what to change. The user can do the upgrade
in 5 minutes. The user doesn't get surprised.

### 5. The thanks (1 line)

Thank the contributors, the users, the maintainers.

```markdown
Thanks to @alice for the Gemini implementation, @bob for the
SQLite test coverage, and the 5 early testers who found the
critical bugs before release.
```

Not:
```markdown
This release was made possible by our amazing team. We love
you all.
```

The first is specific. The user knows who to thank. The second
is filler. The user gives up.

## The 3 anti-patterns

### Anti-pattern 1: The wall

```markdown
# v0.9.0 Released

We are thrilled to announce the release of v0.9.0. This
release represents months of hard work by our dedicated team
of engineers...

[500 more words]
```

The user is overwhelmed. The user gives up. The user doesn't
care about months of work. The user cares about what they
get.

### Anti-pattern 2: The list

```markdown
# v0.9.0 Released

- Fixed bug #123
- Fixed bug #124
- Fixed bug #125
- Updated dependency
- Updated docs
- Refactored X
- Refactored Y
- Renamed Z
- [50 more items]
```

The user is overwhelmed. The user can't find what they care
about. The user gives up.

### Anti-pattern 3: The empty

```markdown
# v0.9.0 Released

(automatic changelog)
```

The user doesn't know what changed. The user is surprised. The
user gives up.

## The 30-minute flow

1. **5 minutes:** read the CHANGELOG
2. **5 minutes:** write the headline
3. **5 minutes:** write the "what" (1 paragraph)
4. **10 minutes:** write the "how" (1 example)
5. **5 minutes:** add the "thanks" (1 line)

Total: 30 minutes. The release post is done. The user has
what they need.

## The example

Here's a release post I wrote recently (paraphrased):

```markdown
# Husk v0.8.0: Vector filter + Gemini

This release adds two flagship features:

- **Vector filter** on the memory layer. Filter memories by
  metadata using operators like `$eq`, `$in`, `$contains`,
  `$exists`. Multiple clauses ANDed. The matcher is consistent
  across backends.
- **Gemini provider** for Google's models. Chat + streaming
  + function calling. Default model: `gemini-2.5-flash`.

## How to use

\`\`\`yaml
model:
  provider: google
  name: gemini-2.5-flash
\`\`\`

## Stats

- 154 total commits (12 new for v0.8.0)
- 229 tests (27 new) — 100% pass rate
- 60KB lib bundle (unchanged)

## Install

\`\`\`bash
npm install @princetheprogrammerbtw/husk@latest
\`\`\`

## Thanks

Thanks to @alice for the Gemini implementation, @bob for the
test coverage, and the 5 early testers.
```

200 words. 5 sections. 1 example. The user has what they need.

## The lesson

5 sections. 3 anti-patterns. 1 template.

The release post is the public face. The face should be
clear, specific, and useful. The 5 sections are the floor.
The 3 anti-patterns are the ceiling.

The agent that has a good release post is shareable. The
agent that doesn't is invisible. The choice is yours.

The agent era is here. The release post is the announcement.
The announcement is the marketing. The marketing is the
growth. The growth is the future.
