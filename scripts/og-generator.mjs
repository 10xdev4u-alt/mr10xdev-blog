#!/usr/bin/env node
/**
 * Build-time OG image generator.
 *
 * Generates social preview cards (1200x630) for every blog post
 * and the home page, using satori + @resvg/resvg-js.
 *
 * Run via: `node scripts/og-generator.mjs`
 * Auto-run via: prebuild script in package.json
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const ROOT = path.resolve(process.cwd());
const OUT_DIR = path.join(ROOT, 'public', 'og');
const W = 1200;
const H = 630;

// --- tiny JSX-less tree builder -----------------------------------
// Satori inlines string children, so any div wrapping text should have
// explicit `display: flex` to be safe. We always add it.
const h = (type, props = {}) => {
  if (type === 'div' && !(props.style && props.style.display)) {
    props = { ...props, style: { ...(props.style || {}), display: 'flex' } };
  }
  return { type, props };
};
const div = (style, ...children) => {
  const childArr = children.flat().map((c) =>
    typeof c === 'string' || typeof c === 'number' ? { type: 'span', props: { children: [String(c)] } } : c
  );
  return { ...h('div', { style }), props: { ...h('div', { style }).props, children: childArr } };
};
const span = (style, ...children) => {
  const childArr = children.flat().map((c) =>
    typeof c === 'string' || typeof c === 'number' ? String(c) : c
  );
  return { type: 'span', props: { style, children: childArr } };
};

// --- font loading -------------------------------------------------
let _fonts = null;
async function loadFonts() {
  if (_fonts) return _fonts;
  const interDir = path.join(ROOT, 'node_modules', '@fontsource', 'inter', 'files');
  const jbDir = path.join(ROOT, 'node_modules', '@fontsource', 'jetbrains-mono', 'files');
  _fonts = {
    interRegular:   await fs.readFile(path.join(interDir, 'inter-latin-400-normal.woff')),
    interMedium:    await fs.readFile(path.join(interDir, 'inter-latin-500-normal.woff')),
    interSemibold:  await fs.readFile(path.join(interDir, 'inter-latin-600-normal.woff')),
    interBold:      await fs.readFile(path.join(interDir, 'inter-latin-700-normal.woff')),
    jetbrainsRegular: await fs.readFile(path.join(jbDir, 'jetbrains-mono-latin-400-normal.woff')),
    jetbrainsMedium:  await fs.readFile(path.join(jbDir, 'jetbrains-mono-latin-500-normal.woff')),
  };
  return _fonts;
}

// --- post loading (avoid astro:content which needs Astro context) ----
async function loadPosts() {
  const contentDir = path.join(ROOT, 'src', 'content', 'blog');
  const files = (await fs.readdir(contentDir)).filter((f) => f.endsWith('.md'));
  const posts = [];
  for (const file of files) {
    const raw = await fs.readFile(path.join(contentDir, file), 'utf8');
    const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];
    const pick = (k) => {
      const m = fm.match(new RegExp(`^${k}:\\s*(.+)`, 'm'));
      if (!m) return undefined;
      let v = m[1].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      return v;
    };
    const tagsBlock = fm.match(/^tags:\s*\n([\s\S]*?)(?=\n[a-z]|$)/m);
    const tags = tagsBlock ? [...tagsBlock[1].matchAll(/^\s*-\s*(.+)/gm)].map((m) => m[1].trim().replace(/^["']|["']$/g, '')) : [];
    posts.push({
      slug: file.replace(/\.md$/, ''),
      data: {
        title: pick('title'),
        description: pick('description'),
        date: pick('date') ? new Date(pick('date')) : new Date(),
        tags,
      },
    });
  }
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// --- card templates ----------------------------------------------
function cardHome() {
  return div(
    {
      width: W, height: H, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(135deg, #0a0a0c 0%, #131318 100%)',
      fontFamily: 'Inter', color: '#f5f5f7', padding: '80px', position: 'relative',
    },
    // decorative orbs
    div({
      position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px',
      borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,182,39,0.15), transparent 70%)',
    }),
    div({
      position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px',
      borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,139,0.12), transparent 70%)',
    }),
    // eyebrow
    div({
      display: 'flex', alignItems: 'center', gap: '12px',
      fontFamily: 'JetBrains Mono', fontSize: '20px', color: '#ffb627',
      textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px',
    },
      div({ width: '10px', height: '10px', borderRadius: '50%', background: '#00ff9c', boxShadow: '0 0 12px #00ff9c' }),
      span(null, 'mr10xdev.dev'),
    ),
    // 10x mark
    div({
      fontFamily: 'Inter', fontWeight: 700, fontStyle: 'italic', fontSize: '160px',
      lineHeight: '0.9', letterSpacing: '-8px', marginBottom: '24px',
      background: 'linear-gradient(135deg, #ffb627 0%, #ff3d8b 100%)',
      backgroundClip: 'text', color: 'transparent',
    }, '10×'),
    // big title
    div({
      fontFamily: 'Inter', fontWeight: 600, fontSize: '64px', lineHeight: '1.05',
      letterSpacing: '-2.5px', marginBottom: '32px',
    }, 'Building agents that ship the work while you sleep.'),
    // footer info
    div({
      display: 'flex', alignItems: 'center', gap: '32px', marginTop: 'auto',
      fontFamily: 'JetBrains Mono', fontSize: '20px', color: '#a1a1aa',
    },
      span(null, '13 agents online'),
      span({ color: '#52525b' }, '·'),
      span(null, '101 commits'),
      span({ color: '#52525b' }, '·'),
      span(null, '391 tests'),
    ),
  );
}

function cardPost({ title, description, date, tags = [] }, eyebrow = 'mr10xdev.dev / writing') {
  const fmt = date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  return div(
    {
      width: W, height: H, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(135deg, #0a0a0c 0%, #131318 100%)',
      fontFamily: 'Inter', color: '#f5f5f7', padding: '80px', position: 'relative',
    },
    // top accent stripe
    div({
      position: 'absolute', top: '0', left: '0', right: '0', height: '6px',
      background: 'linear-gradient(90deg, #ffb627, #ff3d8b)',
    }),
    // decorative orb
    div({
      position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px',
      borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,182,39,0.10), transparent 70%)',
    }),
    // eyebrow
    div({
      display: 'flex', alignItems: 'center', gap: '12px',
      fontFamily: 'JetBrains Mono', fontSize: '18px', color: '#ffb627',
      textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px',
    }, span(null, eyebrow)),
    // title
    div({
      fontFamily: 'Inter', fontWeight: 600, fontSize: '60px', lineHeight: '1.05',
      letterSpacing: '-2px', marginBottom: '24px', maxWidth: '1040px',
    }, (title || 'Untitled').slice(0, 110)),
    // description
    div({
      fontSize: '24px', lineHeight: '1.5', color: '#a1a1aa',
      maxWidth: '1040px', marginBottom: 'auto',
    }, (description || '').slice(0, 200)),
    // footer
    div({
      display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px',
      fontFamily: 'JetBrains Mono', fontSize: '20px', color: '#71717a',
    },
      span(null, fmt),
      ...(tags.length > 0
        ? [
            span({ color: '#52525b' }, '·'),
            span({ color: '#ffb627' }, '#' + tags[0]),
            ...(tags[1] ? [span({ color: '#ffb627' }, '#' + tags[1])] : []),
          ]
        : []),
    ),
  );
}

async function renderToPng(node, fonts) {
  const svg = await satori(node, {
    width: W, height: H,
    fonts: [
      { name: 'Inter', data: fonts.interRegular, weight: 400, style: 'normal' },
      { name: 'Inter', data: fonts.interMedium, weight: 500, style: 'normal' },
      { name: 'Inter', data: fonts.interSemibold, weight: 600, style: 'normal' },
      { name: 'Inter', data: fonts.interBold, weight: 700, style: 'normal' },
      { name: 'JetBrains Mono', data: fonts.jetbrainsRegular, weight: 400, style: 'normal' },
      { name: 'JetBrains Mono', data: fonts.jetbrainsMedium, weight: 500, style: 'normal' },
    ],
  }).catch((e) => {
    throw e;
  });
  const resvg = new Resvg(svg, { background: '#0a0a0c' });
  return resvg.render().asPng();
}

async function main() {
  console.log('🎨 Generating OG images...');
  await fs.mkdir(OUT_DIR, { recursive: true });
  const fonts = await loadFonts();
  const posts = await loadPosts();
  console.log(`  → ${posts.length} posts found`);

  // Home
  await fs.writeFile(path.join(OUT_DIR, 'home.png'), await renderToPng(cardHome(), fonts));
  console.log('  → home.png');

  // Blog index
  await fs.writeFile(
    path.join(OUT_DIR, 'blog.png'),
    await renderToPng(
      cardPost(
        { title: 'Writing', description: 'Field notes on building AI agents — design, deployment, observability, security, and the economics of automation.', tags: ['agents', 'writing'] },
        'mr10xdev.dev / writing',
      ),
      fonts,
    ),
  );
  console.log('  → blog.png');

  // Per-post
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const png = await renderToPng(cardPost(post.data), fonts);
    await fs.writeFile(path.join(OUT_DIR, `post-${post.slug}.png`), png);
    if ((i + 1) % 25 === 0) console.log(`  → ${i + 1} of ${posts.length}`);
  }
  console.log(`  → all ${posts.length} posts`);

  console.log(`\n✓ Done. ${posts.length + 2} OG images in public/og/`);
}

main().catch((e) => { console.error(e); process.exit(1); });
