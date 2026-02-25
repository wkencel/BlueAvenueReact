# SEO Next Steps

## Image Re-compression Needed

The following images in `src/optimized-images/` are oversized and should be re-compressed (target ~200-300KB max):

| Image | Current Size | Notes |
|---|---|---|
| `couple-manhattan-wedding.webp` | 2.3MB | Used on Media page — Sami & Phil photo |
| `pam-steebler-singer.webp` | 1.6MB | Used on Media page — Pam singer photo |

### How to fix
Re-compress using a tool like `cwebp`, `squoosh`, or an online WebP compressor. Target max width of 1200px (largest it's displayed) and quality 80:

```bash
# Example using cwebp
cwebp -q 80 -resize 1200 0 couple-manhattan-wedding.webp -o couple-manhattan-wedding.webp
cwebp -q 80 -resize 1200 0 pam-steebler-singer.webp -o pam-steebler-singer.webp
```

## Blog Content Expansion

Only one blog post exists. Adding more posts targeting long-tail wedding keywords would boost organic traffic. Ideas:
- "Best Wedding Songs 2026"
- "How to Choose a Wedding Band in NYC"
- "Wedding Reception Timeline: When to Book Live Music"
- "Cocktail Hour Music Guide"
- "Brooklyn Wedding Venue Guide"
