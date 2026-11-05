// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Served from the LBakerDev.github.io repo. When you buy a domain, change this to it.
  site: 'https://lbakerdev.github.io',
  integrations: [react(), mdx(), sitemap()],
});
