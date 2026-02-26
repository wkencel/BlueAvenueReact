import type { Metadata } from 'next'
import QueensContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Queens Wedding Band',
  description:
    'Queens wedding band with 10+ years performing at Terrace on the Park, Russo\'s On The Bay, The Foundry and venues across Queens. 6-12 piece band playing Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/queens-wedding-band/',
  },
}

export default function QueensWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <QueensContent />
      </div>
      <SiteFooter />
    </div>
  )
}
