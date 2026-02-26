import type { Metadata } from 'next'
import LongIslandContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Long Island Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Long Island wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across Long Island and the NYC area.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/long-island-wedding-band/',
  },
}

export default function LongIslandWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <LongIslandContent />
      </div>
      <SiteFooter />
    </div>
  )
}
