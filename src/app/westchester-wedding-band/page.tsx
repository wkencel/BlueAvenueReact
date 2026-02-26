import type { Metadata } from 'next'
import WestchesterContent from './content'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Westchester Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Westchester wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across Westchester County and the NYC area.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/westchester-wedding-band/',
  },
}

export default function WestchesterWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <WestchesterContent />
      </div>
      <SiteFooter />
    </div>
  )
}
