# Portfolio

Personal portfolio built with [Astro](https://astro.build), React islands, TypeScript and plain CSS.
The whole site ships as static HTML. The only JavaScript is the mobile menu, which loads on
phone-sized screens only.

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then builds to dist/
npm run preview   # serves the built site
```

Requires Node 22+.

## Where things live

| What | Where |
| --- | --- |
| Name, email, social links, availability | `src/data/site.ts` |
| Jobs and toolkit | `src/data/experience.ts` |
| Case studies (one file each) | `src/content/work/*.mdx` |
| Case study screenshots | `src/assets/work/` |
| Colors, fonts, spacing | `src/styles/tokens.css` |
| Résumé | `public/resume.pdf` (add it) |
| Domain for sitemap and SEO | `site` in `astro.config.mjs` |

## Adding a case study

1. Copy an existing file in `src/content/work/` and rename it. The file name becomes the URL
   (`perf-overhaul.mdx` → `/work/perf-overhaul/`).
2. Fill in the frontmatter. The schema in `src/content.config.ts` checks it at build time.
3. Add a screenshot to `src/assets/work/` and point to it:
   ```yaml
   cover: '../../assets/work/perf-overhaul.png'
   coverAlt: 'Dashboard showing the new performance budget report'
   ```
4. Set `featured: true` on the one project to lead with, and use `order` to sort the rest.
   Use `draft: true` to hide a project.

## Launch checklist

- [ ] Replace every `[bracketed]` placeholder (`grep -rn "\[" src/`)
- [ ] Add `public/resume.pdf`
- [ ] Set your real domain in `astro.config.mjs`
- [ ] Add 1200×630 `public/og-image.png` for link previews, then reference it in `BaseLayout.astro`
- [ ] Run Lighthouse and aim for 100s: it's part of the work sample

## Deploy

Push to GitHub, then import the repo on Vercel, Netlify or Cloudflare Pages. They detect Astro
automatically. The build command is `npm run build` and the output folder is `dist`.
