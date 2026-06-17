---
title: "The Husk contribution guide (how to add a new provider)"
description: "A step-by-step guide to adding a new LLM provider to Husk. The interface to implement, the tests to write, the docs to update. The contribution flow that maintains 200+ tests across 8 providers."
date: 2026-05-04
tags: ["husk", "contributing", "providers"]
---

A step-by-step guide to adding a new LLM provider to Husk. The
interface to implement, the tests to write, the docs to update.
The contribution flow that maintains 200+ tests across 8 providers.

## The goal

By the end of this guide, you'll have:
- A new `YourProvider` class implementing `LLMProvider`
- A test file with 5+ cases
- An entry in the provider registry
- A docs page documenting the new provider
- A CHANGELOG entry

Total time: 1-2 hours.

## The interface

Every provider implements `LLMProvider`:

```ts
interface LLMProvider {
  readonly name: string;
  readonly defaultModel: string;
  chat(messages: ChatMessage[], options?: ChatOptions): Promise<ChatResponse>;
  stream?(messages: ChatMessage[], options?: ChatOptions): AsyncIterable<StreamEvent>;
}
```

The interface is provider-agnostic. Your implementation translates
between the generic shape and your provider's API.

## Step 1: Create the file

Create `src/providers/your-provider.ts`:

```ts
import { ProviderError } from './errors.js';
import type {
  ChatMessage,
  ChatOptions,
  ChatResponse,
  LLMProvider,
  StreamEvent,
  ToolCall,
  ToolDefinition,
} from './types.js';

export interface YourProviderOptions {
  apiKey?: string;
  defaultModel?: string;
  clientFactory?: (apiKey: string) => unknown;
}

let cachedSdk: unknown = null;

async function loadSdk(): Promise<unknown> {
  if (cachedSdk) return cachedSdk;
  try {
    const mod = await import('your-provider-sdk');
    cachedSdk = mod.default ?? mod;
    return cachedSdk;
  } catch (err) {
    throw new ProviderError(
      'your-provider',
      'SDK_MISSING',
      'your-provider-sdk is not installed. Run `npm install your-provider-sdk` to add it.',
      { cause: err },
    );
  }
}

export class YourProvider implements LLMProvider {
  public readonly name = 'your-provider';
  public readonly defaultModel: string;
  private readonly apiKey: string | undefined;
  private readonly clientFactory: (apiKey: string) => unknown;
  private cachedClient: unknown | null = null;

  constructor(options: YourProviderOptions = {}) {
    this.apiKey = options.apiKey ?? process.env.YOUR_PROVIDER_API_KEY;
    this.defaultModel = options.defaultModel ?? 'your-default-model';
    this.clientFactory = options.clientFactory ?? ((key) => new (cachedSdk as new (opts: { apiKey: string }) => unknown)({ apiKey: key }));
  }

  private async client(): Promise<unknown> {
    if (this.cachedClient) return this.cachedClient;
    if (!this.apiKey) {
      throw new ProviderError('your-provider', 'INVALID_API_KEY', 'No API key for your-provider.');
    }
    if (!cachedSdk) await loadSdk();
    this.cachedClient = this.clientFactory(this.apiKey);
    return this.cachedClient;
  }

  async chat(messages: ChatMessage[], options: ChatOptions = {}): Promise<ChatResponse> {
    const client = (await this.client()) as YourSDK;
    try {
      const response = await client.chat.create({
        model: options.model ?? this.defaultModel,
        messages: messages.map(toYourFormat),
      });
      return fromYourFormat(response);
    } catch (err) {
      throw mapError(err);
    }
  }
}
```

## Step 2: Add the format converters

The format converters translate between the generic and provider-
specific shapes.

```ts
function toYourFormat(m: ChatMessage): { role: string; content: string } {
  return { role: m.role, content: m.content };
}

function fromYourFormat(r: YourResponse): ChatResponse {
  return {
    content: r.choices[0].message.content,
    toolCalls: (r.choices[0].message.tool_calls ?? []).map((tc) => ({
      id: tc.id,
      name: tc.function.name,
      input: JSON.parse(tc.function.arguments),
    })),
    usage: {
      inputTokens: r.usage.prompt_tokens,
      outputTokens: r.usage.completion_tokens,
    },
    model: r.model,
    stopReason: r.choices[0].finish_reason,
  };
}

function mapError(err: unknown): ProviderError {
  const e = err as { status?: number; message?: string };
  if (e.status === 401) return new ProviderError('your-provider', 'INVALID_API_KEY', e.message ?? 'auth error');
  if (e.status === 429) return new ProviderError('your-provider', 'RATE_LIMITED', e.message ?? 'rate limit');
  return new ProviderError('your-provider', 'UNKNOWN', e.message ?? 'unknown error');
}
```

## Step 3: Register the provider

In `src/providers/registry.ts`:

```ts
import { YourProvider, type YourProviderOptions } from './your-provider.js';

export interface ProviderFactoryOptions {
  // ... existing options
  yourProvider?: YourProviderOptions;
}

export class ProviderRegistry {
  static withDefaults(options: ProviderFactoryOptions = {}): ProviderRegistry {
    const registry = new ProviderRegistry();
    // ... existing registrations
    if (options.yourProvider) {
      registry.register('your-provider', new YourProvider(options.yourProvider));
    } else {
      registry.register('your-provider', new YourProvider());
    }
    return registry;
  }
}
```

## Step 4: Write tests

In `tests/providers/your-provider.test.ts`:

```ts
import { describe, expect, it, vi } from 'vitest';
import { YourProvider } from '../../src/providers/your-provider.js';
import { ProviderError } from '../../src/providers/errors.js';

function makeMockClient(responses: unknown[]) {
  let i = 0;
  return {
    chat: {
      create: vi.fn(async () => {
        const r = responses[i++];
        if (r instanceof Error) throw r;
        return r;
      }),
    },
  };
}

describe('YourProvider', () => {
  it('rejects chat with no API key', async () => {
    delete process.env.YOUR_PROVIDER_API_KEY;
    const p = new YourProvider({ apiKey: undefined });
    await expect(p.chat([{ role: 'user', content: 'hi' }])).rejects.toThrow(ProviderError);
  });

  it('returns content and usage from a chat response', async () => {
    const mock = makeMockClient([
      { choices: [{ message: { content: 'Hello back' }, finish_reason: 'stop' }], model: 'test', usage: { prompt_tokens: 10, completion_tokens: 5 } },
    ]);
    const p = new YourProvider({ apiKey: 'test', clientFactory: () => mock });
    const r = await p.chat([{ role: 'user', content: 'Hi' }]);
    expect(r.content).toBe('Hello back');
    expect(r.usage.inputTokens).toBe(10);
  });

  it('maps 401 errors to INVALID_API_KEY', async () => {
    const err = Object.assign(new Error('bad key'), { status: 401 });
    const mock = makeMockClient([err]);
    const p = new YourProvider({ apiKey: 'test', clientFactory: () => mock });
    try {
      await p.chat([{ role: 'user', content: 'hi' }]);
      expect.unreachable();
    } catch (e) {
      expect((e as ProviderError).code).toBe('INVALID_API_KEY');
    }
  });

  it('extracts tool calls', async () => {
    // ... test for tool call extraction
  });

  it('handles malformed tool call JSON gracefully', async () => {
    // ... test for graceful handling
  });
});
```

## Step 5: Update the docs

Add a section to `docs/providers.md` (or create it if it doesn't
exist):

```markdown
## YourProvider

\`\`\`ts
import { YourProvider } from '@princetheprogrammerbtw/husk/providers/your-provider';

const provider = new YourProvider({ apiKey: process.env.YOUR_PROVIDER_API_KEY });
const agent = new Agent({ provider, model: 'your-default-model' });
\`\`\`

### Options

- \`apiKey\` — your API key (or set \`YOUR_PROVIDER_API_KEY\` env var)
- \`defaultModel\` — defaults to \`'your-default-model'\`
- \`clientFactory\` — override the SDK client (for testing)

### Supported features

- Chat completions
- Tool calling
- Streaming (optional)
\`\`\`

## Step 6: Update the CHANGELOG

Add an entry under `[Unreleased]`:

```markdown
## [Unreleased]

### Added
- YourProvider class for the YourProvider service. Chat +
  tool calling. Configurable via \`YourProviderOptions\`.
```

## Step 7: Open the PR

Push the branch. Open a PR. Reference the issue (if any). The
PR should include:
- The new file
- The registry update
- The test file
- The docs update
- The CHANGELOG entry

The CI will run all tests. If they pass, the PR is ready for
review.

## The contribution flow

The flow for adding a new provider is:
1. Open an issue (optional, for discussion)
2. Create a branch
3. Write the code (interface + format converters + error mapping)
4. Write the tests
5. Update the docs
6. Update the CHANGELOG
7. Open the PR

Each step is small. Each step is reviewable. The PR is the
review unit.

## The lesson

Adding a new provider to Husk is 1-2 hours of focused work. The
interface is small. The format converters are mechanical. The
tests are boilerplate. The docs are templates.

The pattern is:
- **Identify the gap.** (What provider is missing?)
- **Implement the interface.** (Translate to/from the generic shape.)
- **Test thoroughly.** (5+ cases minimum.)
- **Document the use.** (Examples + options + supported features.)
- **Announce the change.** (CHANGELOG entry + maybe a tweet.)

The Husk ecosystem gets better every time someone adds a new
provider. The community benefits. The maintainers benefit. The
users benefit.

Add a provider. It's worth it.
