import type { Metadata } from 'next'
import BrooklynWeddingsContent from './content'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Brooklyn Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece Brooklyn wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across Brooklyn and NYC.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/brooklyn-wedding-bands/',
  },
}

export default function BrooklynWeddingsPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <BrooklynWeddingsContent />
      </div>
      <SiteFooter />
    </div>
  )
}
