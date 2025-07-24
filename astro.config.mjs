// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    syntaxHighlight: 'prism',
    remarkPlugins: [],
    rehypePlugins: [],
    remarkRehype: {},
    gfm: true,
  })],
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [],
    rehypePlugins: [],
  }
});