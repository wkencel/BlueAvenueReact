import type { Metadata } from 'next'
import ManhattanContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Manhattan Wedding Band',
  description:
    'Manhattan wedding band with 10+ years performing at The Plaza, Gotham Hall, 620 Loft & Garden, Lighthouse at Chelsea Piers and venues across Manhattan. 6-12 piece Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/manhattan-wedding-band/',
  },
}

export default function ManhattanWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <main className="page-panel">
        <ManhattanContent />
      </main>
      <SiteFooter />
    </div>
  )
}
