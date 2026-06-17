---
title: "MCP: the USB-C of agent tools"
description: "Model Context Protocol is the USB-C of agent tools. A standard interface for tools, resources, and prompts. Why it matters, how Husk implements it, what's missing."
date: 2026-05-28
tags: ["mcp", "ai", "agents", "tools"]
---

MCP (Model Context Protocol) is the USB-C of agent tools. A standard
interface that lets any tool work with any agent. This post is why
it matters, how it works, and what's still missing.

## The problem

Before MCP, every agent framework had its own tool format:
- LangChain had `Tool.from_function()`
- CrewAI had `Tool.from_function()` (slightly different)
- AutoGen had `FunctionTool` (yet another format)
- Claude had `input_schema` (a JSON Schema dict)

If you wrote a tool in one format, you couldn't use it in another.
Vendor lock-in at the tool level.

## The solution

MCP defines a single protocol for:
- **Tools** — what the agent can call
- **Resources** — what the agent can read (files, DBs, APIs)
- **Prompts** — what the user can ask

Any agent that speaks MCP can use any tool that speaks MCP. The
tool is written once, used everywhere.

## The protocol

MCP is JSON-RPC 2.0 over stdio or HTTP. The server exposes:

```json
{
  "tools": [
    {
      "name": "search_docs",
      "description": "Search the project documentation",
      "inputSchema": {
        "type": "object",
        "properties": {
          "query": { "type": "string" }
        },
        "required": ["query"]
      }
    }
  ],
  "resources": [
    {
      "uri": "docs://readme",
      "name": "README",
      "description": "The project README"
    }
  ],
  "prompts": [
    {
      "name": "summarize",
      "description": "Summarize a document"
    }
  ]
}
```

The client (an agent) sends a `tools/call` request:

```json
{
  "method": "tools/call",
  "params": {
    "name": "search_docs",
    "arguments": { "query": "auth" }
  }
}
```

The server responds with the result. The protocol is simple,
transport-agnostic, and language-agnostic.

## Why it matters

### 1. The library ecosystem

Anyone can write a tool once and publish it as an MCP server.
Hundreds of MCP servers exist:
- `@modelcontextprotocol/server-filesystem` — file access
- `@modelcontextprotocol/server-git` — git operations
- `@modelcontextprotocol/server-postgres` — Postgres queries
- `@modelcontextprotocol/server-brave-search` — web search
- Hundreds more from the community

An agent that speaks MCP can use all of them. The agent's value is
the sum of the tools it can reach.

### 2. The framework ecosystem

Any agent framework can implement MCP. Claude Desktop, Cursor,
Continue, Cline, Zed, and many more. The agent is no longer tied
to a single toolset.

### 3. The deployment story

MCP servers can be deployed:
- Locally (stdio)
- As a remote service (HTTP)
- As a daemon (long-lived process)

The same tool works in all three modes. The deployment decision is
orthogonal to the tool.

## How Husk implements it

Husk ships:
- **`McpClient`** — speaks MCP over stdio or HTTP. Returns MCP
  tools as Husk `ToolDefinition[]`.
- **`defineMcpServer`** — turns a list of Husk tools into an MCP
  server. Run with stdio or HTTP.

```ts
// Use an MCP server's tools
import { McpClient, defineMcpTools } from '@princetheprogrammerbtw/husk/mcp';
const client = new McpClient({ transport: 'stdio', command: 'npx', args: ['-y', 'mcp-server-filesystem'] });
const tools = defineMcpTools(client);
const agent = new Agent({ tools, ... });

// Expose Husk tools as an MCP server
import { defineMcpServer } from '@princetheprogrammerbtw/husk/mcp';
const server = defineMcpServer({ name: 'my-husk', version: '1.0.0', tools: [myTool, otherTool] });
server.listen(3000);
```

In both cases, the wire format is MCP. Other agents can consume
Husk tools; Husk can consume other tools.

## What's missing

### 1. State management

MCP servers are stateless (or close to it). The agent has to manage
the conversation state. This is fine for single-shot tools but
painful for multi-step workflows.

### 2. Authentication

MCP doesn't have a standard auth layer. Each server implements its
own. The client has to know the auth scheme per server. This is a
real interoperability problem.

### 3. Tool versioning

When a tool's API changes, there's no way to signal "this is v2 of
the tool, the old version is deprecated." Clients can break
silently.

### 4. Discovery

How does an agent find MCP servers? There's a registry, but it's
not standardized. Most agents require the user to configure each
server manually.

### 5. Streaming

MCP is request-response. If a tool produces a long-running result
(e.g., a code execution), there's no standard way to stream
progress. The client has to poll.

## The future

MCP is the best thing that's happened to agent tools. It's not
perfect, but it's good enough. The next 2 years will see:
- **More servers.** Every popular API will have an MCP server.
- **Better auth.** OAuth 2.0 will become the default.
- **Tool versioning.** Semver for tools.
- **A standard registry.** Like npm, but for MCP servers.
- **Streaming support.** For long-running tools.

By 2027, every agent will speak MCP. The framework that doesn't
will die. The vendor lock-in at the tool level will end.

## What to do

- **Build an MCP server for your tool.** 50 lines of code. Reach
  every agent.
- **Use MCP servers in your agent.** Don't reinvent the wheel.
- **Adopt MCP for new tool formats.** Even if you don't use
  third-party servers, the format is a good standard.

The future of agent tools is MCP. The future of MCP is the future
of agent tools.
