import type { Metadata } from 'next'
import QueensContent from './content'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Queens Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Queens wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across Queens and NYC.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/queens-wedding-band/',
  },
}

export default function QueensWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <QueensContent />
      </div>
      <SiteFooter />
    </div>
  )
}
