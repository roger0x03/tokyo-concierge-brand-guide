import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  site: 'https://set.studio/',
  publicDir: '../../public',
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
  },
  server: {
    port: 6006,
  },
  adapter: netlify(),
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: 'always',
  },
});
