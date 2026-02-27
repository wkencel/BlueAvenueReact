import type { Metadata } from 'next'
import WestchesterContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Westchester Wedding Band',
  description:
    'Westchester wedding band with 10+ years performing at Tappan Hill Mansion, Blue Hill at Stone Barns and venues across Westchester County. 6-12 piece Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/westchester-wedding-band/',
  },
}

export default function WestchesterWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <main className="page-panel">
        <WestchesterContent />
      </main>
      <SiteFooter />
    </div>
  )
}
