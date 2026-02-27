import type { Metadata } from 'next'
import HowToChooseContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'
import { ArticleStructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'How to Choose a Wedding Band in NYC',
  description:
    'A practical guide to finding and booking the right wedding band in New York City. What to look for, questions to ask, red flags, and what to expect on pricing.',
  alternates: {
    canonical:
      'https://www.blueavenuegroove.com/how-to-choose-a-wedding-band-nyc/',
  },
}

export default function HowToChooseWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <ArticleStructuredData
        title="How to Choose a Wedding Band in NYC"
        description="A practical guide to finding and booking the right wedding band in New York City. What to look for, questions to ask, red flags, and what to expect on pricing."
        datePublished="2026-02-15"
        url="https://www.blueavenuegroove.com/how-to-choose-a-wedding-band-nyc/"
      />
      <PageNav current="/blog" />
      <main className="page-panel">
        <HowToChooseContent />
      </main>
      <SiteFooter />
    </div>
  )
}
