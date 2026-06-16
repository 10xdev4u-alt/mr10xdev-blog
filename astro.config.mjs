import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://10xdev4u-alt.github.io',
  base: '/mr10xdev-blog',
  output: 'static',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
