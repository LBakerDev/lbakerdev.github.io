import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each case study is one .mdx file in src/content/work/.
// A missing or misspelled field fails the build instead of shipping broken.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      company: z.string(),
      year: z.string(),
      role: z.string(),
      summary: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(99), // lower numbers show first
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .max(3)
        .default([]),
      stack: z.array(z.string()).default([]),
      // Optional until you add screenshots to src/assets/work/
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
