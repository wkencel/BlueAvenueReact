# Song List Page Design

## Overview

Replace the external Google Sheet repertoire link with an internal `/wedding-band-song-list` page. This captures SEO value from "wedding band song list" queries, keeps visitors on-site, and strengthens internal linking.

## Route & Metadata

- **Route:** `/wedding-band-song-list`
- **Title:** `NYC Wedding Band Song List | Blue Avenue Groove`
- **Description:** "Browse Blue Avenue Groove's full song list — 180+ songs spanning Funk, Soul, Pop, R&B, Motown, Rock, and Jazz. NYC's premier wedding band. Custom requests welcome."
- **Canonical:** `https://www.blueavenuegroove.com/wedding-band-song-list/`

## Page Structure

Follows existing `page.tsx` + `content.tsx` pattern.

### `src/app/wedding-band-song-list/page.tsx` (server component)
- Exports `Metadata`
- Renders `PageNav` (no `current` highlight — not in nav) + `SongListContent`
- "Back to Home" link

### `src/app/wedding-band-song-list/content.tsx` (client component)
1. **H1:** "Song List"
2. **Intro paragraph:** 2-3 sentences about genre range, custom requests, link to `/contact`
3. **5 genre sections** each with H2 + table (Song | Artist):
   - Contemporary/Pop (~95 songs)
   - Motown/Funk/Soul (~55 songs)
   - Rock (~40 songs)
   - Ballads/Jazz (~35 songs)
   - Reggae & More (~8 songs)
4. **CTA:** "Don't see your song? We learn requests." → `/contact` button

### `src/data/songs.ts`
Typed song data array:
```ts
type Genre = 'Contemporary/Pop' | 'Motown/Funk/Soul' | 'Rock' | 'Ballads/Jazz' | 'Reggae & More'
interface Song { title: string; artist: string; genre: Genre }
```

## Internal Links (3 locations)

1. **`src/components/EventServices.tsx`** — Replace Google Sheet `<a>` (line 59-61) with `<Link href="/wedding-band-song-list"><button>Song List</button></Link>`
2. **`src/components/Footer.tsx`** — Add "Song List" link in the footer links div alongside NYC Weddings and Brooklyn Weddings
3. **`src/app/the-ultimate-wedding-band-guide/content.tsx`** — Add link on "Repertoire range" text (line 61) pointing to `/wedding-band-song-list`

## What's NOT in scope
- No search/filter UI
- No nav changes (Header or PageNav)
- No additional structured data
- No new SCSS — uses existing page styles
