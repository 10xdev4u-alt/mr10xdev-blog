---
title: "The 5 tools I use every day as an indie AI builder"
description: "After 3 years of building indie AI tools, here's the 5-piece stack I can't live without. The boring, proven, fast tools that just work."
date: 2026-06-02
tags: ["tools", "process", "indie"]
---

I've been an indie AI builder for 3 years. I've used dozens of tools.
Here are the 5 I use every day, in order of how much they matter.

## 1. Claude (Anthropic) — the LLM

Not because Anthropic is the best at everything. Because Claude is
the best at the things I do:
- **Long-form reasoning.** Claude 3.5/4 Sonnet is the best at
  multi-step reasoning tasks.
- **Code generation.** Claude Code is the best at in-editor help.
- **Codebase understanding.** Claude can read a 100K-token repo
  and answer questions about it.
- **Tone.** Claude's voice is more natural than GPT-4o's. I write
  better with Claude than with GPT.

I also use:
- **GPT-4o** for code generation when I need a second opinion.
- **Gemini 2.5 Pro** for long-context tasks (1M+ tokens).
- **Local Llama 3.1 8B** for offline dev.

But 80% of my LLM calls go to Claude. The other 20% is split.

## 2. Neovim — the editor

I've used VS Code, Sublime, Atom, IntelliJ, and Helix. Neovim is
the best for me because:
- **Keyboard-first.** I never touch the mouse. My hands stay on
  the home row.
- **Composability.** Lua config + LSP + Treesitter is a
  programmable editor.
- **Speed.** 50ms startup. No lag. No bloat.
- **Tunneling.** SSH into a server, run `nvim`, get the same
  experience.

The downside: 6-month learning curve. The upside: a 10-year
productivity gain.

My config: [github.com/10xdev4u-alt/dotfiles](https://github.com/10xdev4u-alt/dotfiles).
LSP for TypeScript/Python/Go. Telescope for fuzzy finding.
Treesitter for syntax. LSP-based completions.

## 3. jj — the version control

Git is fine. jj is better for local work.

The killer feature: **jj lets you re-order, edit, and squash commits
after the fact, without rebasing**. Git's interactive rebase is
error-prone and slow. jj's command set is tiny but powerful.

My workflow:
1. `jj new` — start a new change
2. Edit files
3. `jj describe` — write a commit message
4. `jj new` — start another change on top
5. Edit more files
6. `jj squash` — merge into the previous change
7. `jj bookmark create -r @ feature/x` — name the chain
8. `jj git push` — push to GitHub when ready

`jj` is a thin wrapper on top of `git` — your GitHub remote still
works. It's just a better local interface.

## 4. Astro — the static site generator

I have 3 sites:
- This blog (mr10xdev-blog)
- The Husk docs site (husk-doc)
- A project landing page (coming soon)

All three are Astro. Why:
- **Markdown-first.** Blog posts in `src/content/blog/*.md`. No
  config; just write.
- **Component islands.** I can drop in a React component if I
  need interactivity. Most of the page is static HTML.
- **Fast builds.** ~2 seconds for 50 pages.
- **Type-safe.** Zod schemas for frontmatter. The build fails if
  the frontmatter is wrong.

Astro isn't the only good option. Next.js, Eleventy, Hugo, Jekyll
all work. But for an indie blog, Astro is the right balance of
simple and modern.

## 5. Bun — the runtime

I use Bun for dev (fast tests, fast installs) and Node for
production (more compatible). The two work side-by-side.

```bash
bun test    # 5x faster than node --test
bun install # 3x faster than npm install
node dist/cli.js  # production binary
```

Bun's killer feature: **a single binary that runs TypeScript,
bundles it, tests it, and packages it**. I don't need Webpack, Vite,
ts-node, jest, or anything else. Just Bun.

The downside: Bun has a few rough edges around native modules. For
a CLI tool with no native deps, it's perfect. For a server with
`better-sqlite3`, it works but is not yet production-ready.

## The 5 tools, summarized

| Tool | Why | Cost |
|---|---|---|
| Claude | Best at reasoning + code | $20/mo Pro, $200/mo Max |
| Neovim | Keyboard-first editor | Free |
| jj | Better local git | Free |
| Astro | Best static site generator | Free |
| Bun | Fast runtime + test + bundle | Free |

Total: $20/mo (or $200/mo if I want the bigger Claude context).

## What I don't use

A few things I tried and dropped:
- **Notion** — too slow, too featureful. Plain Markdown + git is
  better.
- **Slack** — too noisy. Discord is better for indie communities.
- **Linear** — overkill. GitHub Issues + a triage agent is
  enough.
- **Vercel** — too expensive at scale. GitHub Pages is enough for
  static sites.
- **Notion AI / Coda / Airtable** — too vendor-locked. Plain text
  in git is forever.

The pattern: **use the boring, proven, fast tool**. Save the new
shiny for when it earns its place.

## What's on my radar

- **Zed** — a new editor in Rust. Could replace Neovim if it
  improves.
- **Scarf / OpenSSF** — open-source funding platforms. Could
  replace donations.
- **Cloudflare D1** — SQLite at the edge. Could replace my
  Postgres for small projects.
- **Local Ollama** — local LLM. Could replace Claude for offline
  work.

I'm not switching yet. The 5 tools above are good enough. The
discipline of "don't switch until it earns its place" is more
valuable than the upgrade itself.
