import type { Metadata } from 'next'
import NewJerseyContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning New Jersey Wedding Band',
  description:
    'New Jersey wedding band with 10+ years performing at Liberty House, Stone House at Stirling Ridge and venues across NJ. NYC-based 6-12 piece band playing Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/new-jersey-wedding-band/',
  },
}

export default function NewJerseyWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <NewJerseyContent />
      </div>
      <SiteFooter />
    </div>
  )
}
