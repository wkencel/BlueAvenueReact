# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blue Avenue Groove website — a Next.js 14 + React 18 + TypeScript site for an NYC wedding band. Static export deployed to S3. The homepage is a landing page with nav links to dedicated content pages, plus SEO-focused landing pages for specific markets (Brooklyn, NYC wedding bands) and blog content.

## Commands

- **Install dependencies:** `yarn`
- **Dev server:** `yarn dev` (`next dev`)
- **Production build:** `yarn build` (static export to `out/`, runs `next-sitemap` as postbuild)
- **Deploy:** `yarn deploy` (builds then syncs `out/` to S3)
- **Format code:** `yarn format` (Prettier on all JS/TS/TSX files)
- **Check unused deps:** `yarn depcheck`
- **Optimize images:** `yarn optimize-images`
- **No test suite configured** — `yarn test` is a placeholder

## Architecture

### Framework & Config
- **Next.js 14** with App Router, static export (`output: 'export'` in `next.config.js`)
- **TypeScript** — all components are `.tsx`, `@/*` path alias maps to `./src/*`
- Images are `unoptimized: true` (required for static export)
- `next-sitemap.config.js` generates sitemap and robots.txt pointing to `https://www.blueavenuegroove.com`

### Routing (`src/app/`)
- `layout.tsx` — Root layout. Sets global metadata from `src/lib/siteMetadata.ts`, injects `BusinessStructuredData`, wraps children in `Providers` (context).
- `page.tsx` — Homepage. Client component with loading animation, renders `Header` + `Footer` only.
- **Content pages** follow a pattern: `page.tsx` (server component with metadata + `PageNav`) imports a `content.tsx` (client component with the actual UI). Routes: `/about`, `/contact`, `/media`, `/services`, `/reviews`.
- **SEO landing pages:** `/brooklyn-wedding-bands`, `/wedding-bands-nyc` — same page/content pattern
- **Blog pages:** `/blog`, `/the-ultimate-wedding-band-guide`

### Key Components (`src/components/`)
- `PageNav.tsx` — Shared navigation bar for all content pages (not homepage). Defines nav items array.
- `Header.tsx` / `Footer.tsx` — Homepage chrome. Header has nav links; Footer has social icons, award badges, and SEO landing page links.
- `StructuredData.tsx` — JSON-LD structured data (`BusinessStructuredData`, `EventStructuredData`, `ReviewsStructuredData`)
- `Contact.tsx` / `ContactUs.tsx` — Contact forms using `emailjs-com`
- `Reviews.tsx` — Renders review data from `src/data/reviews.ts`
- `Media.tsx` — Video/media content using `YoutubeLiteComponent.tsx`
- `PriceCalculator.tsx` — Interactive pricing tool
- `ShowCasePopup.tsx` — Timed popup for showcase events

### State Management
- `src/context/context.tsx` — Single React context (`globalContext`) with `stopPlay` boolean for controlling media playback.
- `src/app/providers.tsx` — Client component wrapper that provides `ContextProvider` to the app.

### Image Handling
- Images in `src/optimized-images/` are imported as Next.js static imports (provides `StaticImageData`)
- `src/lib/image.ts` — `getImageSrc()` helper extracts `.src` from `StaticImageData` objects for use in `<img>` tags
- Public static images in `public/images/` and `public/static/`

### Styling
- Primary: SCSS in `src/assets/scss/` with BEM-like structure (base, components, layout, libs)
- Entry point: `src/assets/scss/main.scss` imported by root `layout.tsx`
- `sassOptions.silenceDeprecations: ['legacy-js-api']` in next.config.js

### SEO
- Per-page metadata via Next.js `Metadata` exports in each `page.tsx`
- Global defaults from `src/lib/siteMetadata.ts`
- Canonical URLs set per page via `alternates.canonical`
- Site URL: `https://www.blueavenuegroove.com`
