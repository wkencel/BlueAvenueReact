# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blue Avenue Groove website — a Gatsby 5 + React 18 site for an NYC wedding band. Deployed to S3 (via `gatsby-plugin-s3`). The site is a single-page app with article-style overlay navigation on the homepage, plus SEO-focused landing pages for specific markets (Brooklyn, NYC wedding bands) and blog content.

## Commands

- **Install dependencies:** `yarn` (requires Node v18.17.0 via `nvm use v18.17.0`)
- **Dev server:** `yarn develop` (Windows only in dev mode per README)
- **Production build:** `yarn build`
- **Format code:** `yarn format` (Prettier on all JS files)
- **Check unused deps:** `yarn depcheck`
- **Optimize images:** `yarn optimize-images` (compresses `src/assets/images/wwCouplesChoiceImages/` via imagemin)
- **No test suite configured** — `yarn test` is a placeholder

## Architecture

### Page Structure
- `src/pages/index.js` — Homepage, class component managing article overlay visibility state (open/close/click-outside). Wraps content in `ContextProvider`.
- `src/pages/brooklyn-wedding-bands.js`, `wedding-bands-nyc.js` — SEO landing pages for specific markets
- `src/pages/the-ultimate-wedding-band-guide.js`, `blog.js` — Blog/content pages
- Pages use `Layout` which applies per-route wrapper styling and injects `SEO` + `BusinessStructuredData`

### Key Components (`src/components/`)
- `layout.js` — Top-level wrapper. Routes content layout based on `location` prop (root path vs. named string like "brooklyn"/"nyc"). Includes `SEO` and `StructuredData`.
- `Main.js` — Article panel renderer. Shows different components (WhoWeAre, EventServices, Contact, Media, Reviews, PriceCalculator, PurchaseRequest) based on `article` state string.
- `Header.js` / `Footer.js` — Site chrome with nav triggering `onOpenArticle`
- `SEO.js` — react-helmet based, pulls defaults from `gatsby-config.js` siteMetadata via GraphQL
- `StructuredData.js` — JSON-LD structured data for local business SEO
- `ShowCasePopup.js` — Timed popup for upcoming showcase events
- `PriceCalculator.js` — Interactive pricing tool
- `Contact.js` / `ContactUs.js` — Contact forms using emailjs-com
- `Reviews.js` — Large review dataset (hardcoded)

### State Management
- `src/context/context.tsx` — Single React context (`globalContext`) with `stopPlay` boolean for controlling media playback. TypeScript file despite the rest being JS.

### Styling
- Primary: SCSS in `src/assets/scss/` with BEM-like structure (base, components, layout, libs)
- Entry point: `src/assets/scss/main.scss` imported by `layout.js`
- Additional: `src/assets/css/` (legacy CSS), `src/styles/ShowcasePopup.css`
- Also uses: styled-components, Material UI (`@material-ui/core`), Semantic UI React

### Image Handling
- `gatsby-plugin-image` + `gatsby-plugin-sharp` + `gatsby-transformer-sharp` for optimized images
- Multiple source filesystem paths configured in `gatsby-config.js`: `src/images/`, `src/assets/images/`, plus subdirectories for wedding photos and award images
- `src/optimized-images/` — output directory for manually optimized images

### Configuration
- `gatsby-config.js` — Site metadata (SEO defaults, social handles, site URL), plugin configuration. Uses dotenv for environment-specific `.env` files.
- `gatsby-node.js` — Custom webpack config adding LESS loader support and `__DEVELOPMENT__` define
- SEO plugins: sitemap, robots-txt, canonical-urls all pointing to `https://www.blueavemusic.io`

### Environment
- `.env.*` files (gitignored) — used for environment-specific config loaded via dotenv in gatsby-config
