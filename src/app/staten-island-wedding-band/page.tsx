import type { Metadata } from 'next'
import StatenIslandContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Staten Island Wedding Band',
  description:
    'Staten Island wedding band serving weddings and events across Staten Island and all of NYC. 6-time WeddingWire Couples Choice winners. 6-12 piece band playing Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/staten-island-wedding-band/',
  },
}

export default function StatenIslandWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <StatenIslandContent />
      </div>
      <SiteFooter />
    </div>
  )
}
