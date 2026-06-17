---
title: "Husk v0.7.0: MCP server + SqliteVectorStore"
description: "v0.7.0 of Husk adds MCP server support and a persistent vector store backed by sqlite-vec. 25 new tests, 12 commits."
date: 2026-06-13
tags: ["husk", "release", "mcp", "vector-store"]
---

Husk v0.7.0 is out. Two flagship features:

## 1. MCP server

Expose your Husk tools to Claude Desktop and any other MCP-compatible
client. The new `defineMcpServer()` function turns a list of
`ToolDefinition`s into a running MCP server.

```ts
import { defineMcpServer } from '@princetheprogrammerbtw/husk/mcp';

const server = defineMcpServer({
  name: 'my-husk-server',
  version: '0.7.0',
  tools: [
    { name: 'search_docs', description: '...', inputSchema: ..., execute },
    { name: 'create_ticket', description: '...', inputSchema: ..., execute },
  ],
});
```

Works with both stdio and HTTP transports. Approval-gated tools are
excluded by default — exposing them over MCP is a security hole.

## 2. SqliteVectorStore

A persistent vector store backed by `better-sqlite3` and `sqlite-vec`:

```ts
import { SqliteVectorStore } from '@princetheprogrammerbtw/husk';

const store = await SqliteVectorStore.open({
  path: './data/vectors.db',
  dimension: 384,
});

await store.add('doc-1', embedding, { source: 'docs' });
const results = await store.search(queryEmbedding, 10);
```

Same `VectorStore` interface as the in-memory store. WAL mode for
concurrent reads. A `count()` bonus method.

## CI debug journey

The first v0.7.0 tag push failed CI. The `mcp-server.test.ts` test got
`'sdkServer.registerTool' is undefined`. Root cause: the CI's bun
resolved `@modelcontextprotocol/sdk/server/mcp.js` to the wrong class
(probably a deprecated low-level `Server`).

Fix: try multiple import paths in order, pick the first that has a
usable class. The fix lives in commit `4d436bb`.

## Stats

- 146 total commits (12 new for v0.7.0 + 1 CI fix)
- 202 tests (25 new) — 100% pass rate
- 60KB lib + 7KB mcp subpath (was 57KB + 0)

## What I learned

1. **CI environment != local environment.** Even with the same
   `package.json` and lockfile, different bun versions resolve
   dynamic imports differently. Try multiple paths; pick the first
   that works.
2. **`describe.skipIf(Bun)` for native modules** that don't work in
   Bun. The pattern keeps `bun test` green for the rest of the suite
   while preserving the tests for the production runtime.
3. **JSONSchema → Zod via eval-of-ts-source** is the simplest path
   with `json-schema-to-zod`. The lib's API returns a string; wrap
   it in `new Function('z', 'return (${source})')` to get a real schema
   with `z` in scope.
4. **SqliteVectorStore vs InMemoryVectorStore: same interface.**
   The swap is a one-line change. This is the payoff for defining the
   `VectorStore` interface as a contract.

Install: `npm install @princetheprogrammerbtw/husk@latest`
