---
title: "Husk v0.6.0: MCP client + tool approval"
description: "v0.6.0 of Husk adds an MCP client adapter and a tool approval flow. 22 new tests, 14 commits, 4th consecutive auto-publish."
date: 2026-06-13
tags: ["husk", "release", "mcp", "approval"]
---

Husk v0.6.0 is out. Two flagship features:

## 1. MCP client adapter

`/mcp` subpath. The new `McpClient` class supports stdio and HTTP
transports. `defineMcpTools(client, options?)` wraps MCP tools as
Husk `ToolDefinition[]` — drop-in.

```ts
import { McpClient, defineMcpTools } from '@princetheprogrammerbtw/husk/mcp';

const client = new McpClient({ transport: 'stdio', command: 'uvx', args: ['mcp-server-git'] });
const tools = defineMcpTools(client);
const agent = new Agent({ tools, ... });
```

Optional peer dep: `@modelcontextprotocol/sdk@^1.29.0` (4.2MB unpacked).
Loaded via dynamic import so the main bundle stays small.

## 2. Tool approval flow

Tools can now require human approval before executing. Add
`onApprovalRequest` to your `AgentConfig`:

```ts
const agent = new Agent({
  tools: [dangerousTool],
  onApprovalRequest: async (req) => {
    return { approved: await askUser(req) };
  },
});
```

The CLI default in `husk run` is a readline Y/N prompt (TTY-aware,
auto-denies in non-TTY). For batch scripts, use `--no-approval`.

The approval gate runs after schema validation, before execute — so a
tool with both `validate` and `requireApproval` gets validation first
(cheap local check) then approval (caller decision) then execute.

## Stats

- 134 total commits (14 new for v0.6.0)
- 177 tests (22 new) — 100% pass rate
- 57KB lib + 7KB mcp subpath (was 53KB + 0)

## CI

No CI debugging needed. The `~/.npmrc` write fix from v0.4.1 (commit
`7f27492`) continues to work. Four releases in a row have auto-published
on tag push.

## Lessons

1. **Subpath exports work great for heavy optional deps.** `/mcp` is a
   separate entry with its own bundle. Users who never use MCP don't
   pay the SDK cost.
2. **Dynamic imports for SDKs is the lazy-load pattern.** First call
   to a method imports; subsequent calls hit the module-level cache.
3. **TypeScript optional-chaining + null check beats `!` non-null
   assertion.** Pattern: `const x = this.sdkClient; if (!x) throw; await x.foo();`
4. **Safe defaults for approval flows: blocked-by-default > yes-by-default.**
   A tool marked as needing approval that auto-approves is worse than
   a tool that's properly gated.

## What I shipped

- `McpClient` (lifecycle, listTools, callTool, disconnect, isConnected)
- `defineMcpTools()` function
- `McpClientError` + `McpClientErrorCode`
- `ApprovalRequest`, `ApprovalResult` types
- `onApprovalRequest` field on `AgentConfig`
- `defaultCliApprovalPrompt()` from `/cli`
- `--no-approval` flag on `husk run`
- 2 new examples: `10-mcp-filesystem`, `11-approval`

Install: `npm install @princetheprogrammerbtw/husk@latest`
