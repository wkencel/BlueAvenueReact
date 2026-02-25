import type { Metadata } from 'next'
import HowToChooseContent from './content'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'How to Choose a Wedding Band in NYC',
  description:
    'A practical guide to finding and booking the right wedding band in New York City. What to look for, questions to ask, red flags, and what to expect on pricing.',
  alternates: {
    canonical:
      'https://www.blueavemusic.io/how-to-choose-a-wedding-band-nyc/',
  },
}

export default function HowToChooseWeddingBandPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/blog" />
      <div className="page-panel">
        <HowToChooseContent />
      </div>
    </div>
  )
}
