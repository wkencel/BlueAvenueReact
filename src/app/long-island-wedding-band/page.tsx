import type { Metadata } from 'next'
import LongIslandContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Long Island Wedding Band',
  description:
    'Long Island wedding band with 10+ years performing at North Fork wineries and venues across Long Island. Based in NYC, we bring Funk, Soul, Pop, R&B and Motown to your LI celebration.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/long-island-wedding-band/',
  },
}

export default function LongIslandWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <main className="page-panel">
        <LongIslandContent />
      </main>
      <SiteFooter />
    </div>
  )
}
