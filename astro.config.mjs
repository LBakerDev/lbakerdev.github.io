// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with your real domain — used for the sitemap and social previews.
  site: 'https://example.com',
  integrations: [react(), mdx(), sitemap()],
});
