import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Mr. 10x Dev',
    description: 'Notes on shipping AI tools, the build-in-public journey, and the meta of being Mr. 10x Dev.',
    site: context.site ?? 'https://10xdev4u-alt.github.io/mr10xdev-blog',
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
      })),
    customData: '<language>en-us</language>',
  });
}
