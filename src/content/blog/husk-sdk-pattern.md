---
title: "The Husk SDK pattern: small core, big ecosystem"
description: "Husk's SDK design pattern: tiny core, lots of adapters, the user picks what they need. How to grow a library without bloating it. The subpath export pattern."
date: 2026-05-12
tags: ["husk", "sdk-design", "architecture"]
---

Husk's SDK design pattern: tiny core, lots of adapters, the user
picks what they need. How to grow a library without bloating it.
The subpath export pattern.

## The problem

Most libraries grow like this:
- v0.1: 50KB
- v0.5: 200KB
- v1.0: 1MB

The growth comes from features. Each feature is "useful to
someone." But the cumulative bundle size hurts everyone.

The user who only wants the chat completion feature is paying
for the vector store, the MCP server, the SQLite backend, the
every other feature they don't use.

## The Husk pattern

Husk solves this with the "small core, big ecosystem" pattern.

### The core

The core is the minimum useful surface:
- An `Agent` class
- A `run()` function
- A `ToolDefinition` interface
- A `VectorStore` interface
- A `Memory` interface

The core is ~50KB. The user can ship a useful agent with just the
core.

### The ecosystem

Everything else is an "adapter" or "extension":
- Providers (Anthropic, OpenAI, Gemini) — separate subpath
- Memory backends (SQLite, Postgres) — separate subpath
- MCP client/server — separate subpath
- Validation framework — separate subpath
- Tool approval — separate subpath

Each adapter is in its own subpath. The user imports only the
adapters they need.

```ts
// Core only
import { Agent } from '@princetheprogrammerbtw/husk';

// Core + Anthropic
import { Agent } from '@princetheprogrammerbtw/husk';
import { AnthropicProvider } from '@princetheprogrammerbtw/husk/providers/anthropic';

// Core + MCP client
import { Agent } from '@princetheprogrammerbtw/husk';
import { McpClient } from '@princetheprogrammerbtw/husk/mcp';
```

The bundle only includes what the user imports. The user who
doesn't need MCP doesn't pay for it.

## The subpath exports

The `package.json` `exports` field makes this work:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./providers/anthropic": {
      "types": "./dist/providers/anthropic.d.ts",
      "import": "./dist/providers/anthropic.js"
    },
    "./mcp": {
      "types": "./dist/mcp/index.d.ts",
      "import": "./dist/mcp/index.js"
    }
  }
}
```

The bundler reads the imports and only includes the subpaths the
user actually uses. The unused subpaths are tree-shaken out (or
never loaded in the first place).

## The lazy loading

For the heaviest adapters (like the MCP SDK), the imports are
done dynamically:

```ts
// In src/mcp/client.ts
let cachedSdk: typeof import('@modelcontextprotocol/sdk') | null = null;

async function loadSdk() {
  if (cachedSdk) return cachedSdk;
  cachedSdk = await import('@modelcontextprotocol/sdk');
  return cachedSdk;
}
```

The MCP SDK is 4MB unpacked. With lazy loading, it's only loaded
when the user actually uses an MCP feature. The bundle stays
small.

## The version compat

The subpath exports are versioned with the rest of the package.
When Husk is at v0.8.0, every subpath is at v0.8.0. There's no
"husk/mcp is at v0.3 while husk is at v0.8" weirdness.

This is a deliberate choice. The tradeoff: you can't upgrade a
subpath independently. The benefit: simple mental model, no
version mismatch debugging.

## The 80/20

The pattern is the 80/20 of SDK design:
- The core is always loaded
- The adapters are loaded on demand
- The subpath exports make the boundary explicit
- The lazy loading keeps the bundle small

A user who only needs chat completions gets a 50KB bundle. A
user who needs everything gets a 200KB bundle. The middleware
users are rare; the lean users are common.

## The anti-patterns

### 1. The kitchen sink

Some libraries ship everything in the main entry. The bundle
includes features 99% of users don't want. The "DX" of a
single import is a lie; the bundle is huge.

Don't do this. Use subpath exports.

### 2. The micro-packages

Some libraries split every concept into its own npm package.
`@some/auth-core`, `@some/auth-react`, `@some/auth-svelte`.
The user has to install 5 packages for one feature.

Don't do this either. Use subpath exports within a single package.

### 3. The peer-dep soup

Some libraries mark everything as a peer dependency. The user
has to install 20 packages manually. The error messages are
cryptic.

Don't do this. Mark the optional peer deps, lazy-load them,
and have a fallback.

## The Husk implementation

Husk uses this pattern throughout:
- `@princetheprogrammerbtw/husk` — core
- `@princetheprogrammerbtw/husk/providers/anthropic` — Anthropic
- `@princetheprogrammerbtw/husk/providers/openai` — OpenAI
- `@princetheprogrammerbtw/husk/providers/google` — Google
- `@princetheprogrammerbtw/husk/mcp` — MCP client + server
- `@princetheprogrammerbtw/husk/memory/sqlite` — SQLite backend
- `@princetheprogrammerbtw/husk/memory/postgres` — Postgres backend
- `@princetheprogrammerbtw/husk/observability/otel` — OTel adapter
- `@princetheprogrammerbtw/husk/cli` — CLI

Each is a subpath within the same npm package. The version is
shared. The user picks what they need.

## The benefit

The pattern gives you:
- **Small bundles** for lean users
- **Easy upgrading** (one version for everything)
- **Lazy loading** of heavy dependencies
- **Clear boundaries** between features
- **No micro-package hell**

The cost:
- More subpath exports to maintain
- More lazy-loading code
- Slightly more complex build setup

The cost is worth it. Every Husk user benefits.

## The lesson

If you're building an SDK that will grow, plan the subpath
exports from day one. The cost of refactoring is much higher
than the cost of designing it right.

The pattern is:
1. Identify the core (the smallest useful surface)
2. Identify the adapters (everything else)
3. Use subpath exports to separate them
4. Lazy-load the heavy adapters
5. Document the imports clearly

The result: a library that scales to 100 features without
bloating the bundle of the user who only needs 1.
