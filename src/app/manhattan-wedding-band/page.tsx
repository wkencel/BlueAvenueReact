import type { Metadata } from 'next'
import ManhattanContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Manhattan Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Manhattan wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across Manhattan and NYC.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/manhattan-wedding-band/',
  },
}

export default function ManhattanWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <ManhattanContent />
      </div>
      <SiteFooter />
    </div>
  )
}
