import type { Metadata } from 'next'
import HudsonValleyContent from './content'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Hudson Valley Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Hudson Valley wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across the Hudson Valley and NYC area.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/hudson-valley-wedding-band/',
  },
}

export default function HudsonValleyWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <HudsonValleyContent />
      </div>
      <SiteFooter />
    </div>
  )
}
