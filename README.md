# Mr. 10x Dev — Blog

> Personal blog and project log for **Princyy** (Mr. 10x Dev / 10xdev4u-alt).
> Auto-maintained by [`gitagent`](https://github.com/10xdev4u-alt/gitagent).

This site is the real-world demo of `gitagent`. Three agents declared in
`.github/agents/` keep it running:

- **`triage`** — auto-labels and welcomes new issues.
- **`doc`** — keeps the README and project pages in sync with code changes.
- **`release`** — drafts a release post whenever a new tag is pushed.

## Stack

- **Astro** — static site generator
- **TypeScript** — strict
- **MDX** — blog posts
- **GitHub Pages** — hosting

## Develop

```bash
npm install
npm run dev      # localhost:4321
npm run build    # dist/
```

## Auto-maintenance

The site is maintained by `gitagent` running on the repo. See
[`.github/agents/`](./.github/agents/) for the agent manifests.

## License

MIT
