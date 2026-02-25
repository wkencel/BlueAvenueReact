import type { Metadata } from 'next'
import GuideContent from './content'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title:
    'The Ultimate Wedding Band Guide | Selecting the Perfect Soundtrack for Your Big Day',
  description:
    'Everything you need to know about choosing a wedding band — live band vs. DJ, how the night should flow, what to look for, and questions to ask before you book.',
  alternates: {
    canonical:
      'https://www.blueavemusic.io/the-ultimate-wedding-band-guide/',
  },
}

export default function UltimateWeddingBandGuidePage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/blog" />
      <div className="page-panel">
        <GuideContent />
      </div>
    </div>
  )
}
