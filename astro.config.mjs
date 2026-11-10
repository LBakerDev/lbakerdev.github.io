// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The custom domain (GitHub Pages serves the LBakerDev.github.io repo here; the
  // old github.io address redirects). Used for canonical links, og:url and the sitemap.
  site: 'https://londonbaker.dev',
  integrations: [react(), mdx(), sitemap()],
});
