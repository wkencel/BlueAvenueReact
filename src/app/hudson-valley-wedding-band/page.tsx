import type { Metadata } from 'next'
import HudsonValleyContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Hudson Valley Wedding Band',
  description:
    'Hudson Valley wedding band with 10+ years performing at The Garrison, Mohonk Mountain House and venues throughout the Hudson Valley. 6-12 piece band playing Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/hudson-valley-wedding-band/',
  },
}

export default function HudsonValleyWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <HudsonValleyContent />
      </div>
      <SiteFooter />
    </div>
  )
}
