import type { Metadata } from 'next'
import NewJerseyContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'New Jersey Live Wedding Band',
  description:
    'Blue Avenue Groove is a 6-12 piece New Jersey wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across New Jersey and the NYC area.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/new-jersey-wedding-band/',
  },
}

export default function NewJerseyWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <NewJerseyContent />
      </div>
      <SiteFooter />
    </div>
  )
}
