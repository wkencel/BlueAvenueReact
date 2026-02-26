import type { Metadata } from 'next'
import BronxContent from './content'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Bronx Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Bronx wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across the Bronx and NYC.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/bronx-wedding-band/',
  },
}

export default function BronxWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <BronxContent />
      </div>
      <SiteFooter />
    </div>
  )
}
