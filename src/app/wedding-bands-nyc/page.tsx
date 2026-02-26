import type { Metadata } from 'next'
import NYCWeddingsContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning NYC Wedding Band',
  description:
    'NYC wedding band with 10+ years performing across all five boroughs, from Manhattan ballrooms to Brooklyn lofts. 6-time WeddingWire Couples Choice award winners. 6-12 piece Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/wedding-bands-nyc/',
  },
}

export default function NYCWeddingsPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <NYCWeddingsContent />
      </div>
      <SiteFooter />
    </div>
  )
}
