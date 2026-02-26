import type { Metadata } from 'next'
import StatenIslandContent from './content'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Staten Island Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Staten Island wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across Staten Island and NYC.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/staten-island-wedding-band/',
  },
}

export default function StatenIslandWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <StatenIslandContent />
      </div>
      <SiteFooter />
    </div>
  )
}
