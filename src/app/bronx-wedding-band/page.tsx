import type { Metadata } from 'next'
import BronxContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Bronx Wedding Band',
  description:
    'Bronx wedding band with 10+ years performing at the NY Botanical Garden and venues across the Bronx and NYC. 6-12 piece band playing Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/bronx-wedding-band/',
  },
}

export default function BronxWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <BronxContent />
      </div>
      <SiteFooter />
    </div>
  )
}
