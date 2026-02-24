import type { Metadata } from 'next'
import GuideContent from './content'

export const metadata: Metadata = {
  title:
    'The Ultimate Wedding Band Guide | Selecting the Perfect Soundtrack for Your Big Day',
  description:
    'Dive into our comprehensive guide to choosing the ultimate wedding band that aligns with your style, theme, and musical preferences, ensuring an unforgettable soundtrack for your big day.',
  alternates: {
    canonical:
      'https://www.blueavemusic.io/the-ultimate-wedding-band-guide/',
  },
}

export default function UltimateWeddingBandGuidePage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <GuideContent />
      </div>
    </div>
  )
}
