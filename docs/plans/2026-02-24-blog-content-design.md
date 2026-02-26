# Blog Content Design — 2026-02-24

## Goal
Improve existing blog post and add one new post. Better SEO targeting, authentic Blue Avenue Groove voice, drive organic traffic for wedding-related long-tail keywords.

## Target Audience
Engaged couples actively planning (6-18 months out) and wedding planners looking for vendor recommendations.

## Voice
Match the rest of the site: direct, warm, confident, no fluff. "Weddings without the cheese." NYC-specific. Speak from experience.

---

## 1. Rewrite: "The Ultimate Wedding Band Guide"

**URL:** `/the-ultimate-wedding-band-guide/` (keep existing)
**Target keywords:** "wedding band guide", "how to plan wedding music"
**Word count:** ~1200-1500

### Outline
1. **Why Your Wedding Band Matters More Than You Think** — Most couples spend hours on flowers and 15 minutes on music, but music is what people remember.
2. **Live Band vs. DJ: What's the Real Difference?** — Honest take. DJs work for some weddings. But live music changes room energy.
3. **What to Look For in a Wedding Band** — Repertoire range, reading the room, professionalism (sound checks, setup, MC).
4. **How the Night Should Flow** — Ceremony, cocktail hour, reception. What music works at each phase. Reference actual ensemble options.
5. **Questions to Ask Before You Book** — Can they learn a song? Backup plan? Own sound? Break schedule?
6. **Booking Timeline** — 6-12 months out, peak season, process overview.
7. **CTA** — ContactUs component

### Changes from current
- Strip generic flowery tone, replace with site's authentic voice
- Remove "Introduction:" / "Encore:" template headers
- Add NYC-specific references
- Remove inline styles, use site's standard SCSS
- Keep existing images

---

## 2. New Post: "How to Choose a Wedding Band in NYC"

**URL:** `/how-to-choose-a-wedding-band-nyc/`
**Target keywords:** "how to choose a wedding band NYC", "best wedding band NYC"
**Word count:** ~1200-1500

### Outline
1. **Choosing a Wedding Band Is Different in New York** — More options than anywhere, venue acoustics vary, noise ordinances, load-in logistics.
2. **Start With the Vibe, Not the Vendor List** — Know what you want the night to feel like before comparing bands.
3. **What to Listen For in Demos** — Watch crowd interaction, room-reading, transitions, energy building.
4. **The Questions That Actually Matter** — NYC-specific: sound in small venues, freight elevator load-in, what's included.
5. **Red Flags to Watch For** — No live video, won't let you see a gig, vague inclusions, no sound engineer.
6. **What Should a NYC Wedding Band Cost?** — Set market expectations without exact pricing. Band size tiers, add-ons.
7. **When to Book and How the Process Works** — Timeline and what to expect.
8. **CTA** — Link to services + contact form

### Internal links
- `/services/` — from ensemble and pricing sections
- `/reviews/` — from social proof mentions
- `/contact/` — CTA
- `/the-ultimate-wedding-band-guide/` — cross-link between posts

### File structure
```
src/app/how-to-choose-a-wedding-band-nyc/
  page.tsx    — metadata + canonical URL (server component)
  content.tsx — post body (client component)
```

---

## 3. Technical Changes

### Blog index (`src/app/blog/page.tsx`)
- Replace "coming soon" placeholder with new post entry
- Both posts get thumbnail images and excerpts

### Styling
- Remove all inline styles from the rewritten guide
- Use site's standard SCSS (page-panel, className="major" headings)
- Consistent with all other content pages

### SEO metadata for new post
```tsx
export const metadata: Metadata = {
  title: 'How to Choose a Wedding Band in NYC',
  description: 'A practical guide to finding and booking the right wedding band in New York City — what to look for, questions to ask, red flags, and what to expect on pricing.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/how-to-choose-a-wedding-band-nyc/',
  },
}
```
