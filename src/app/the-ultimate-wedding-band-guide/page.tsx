import type { Metadata } from 'next'
import GuideContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'
import { ArticleStructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'The Ultimate Wedding Band Guide',
  description:
    'Everything you need to know about choosing a wedding band. Live band vs. DJ, how the night should flow, what to look for, and questions to ask before you book.',
  alternates: {
    canonical:
      'https://www.blueavenuegroove.com/the-ultimate-wedding-band-guide/',
  },
}

export default function UltimateWeddingBandGuidePage() {
  return (
    <div id="wrapper" className="page">
      <ArticleStructuredData
        title="The Ultimate Wedding Band Guide"
        description="Everything you need to know about choosing a wedding band. Live band vs. DJ, how the night should flow, what to look for, and questions to ask before you book."
        datePublished="2025-12-15"
        url="https://www.blueavenuegroove.com/the-ultimate-wedding-band-guide/"
      />
      <PageNav current="/blog" />
      <div className="page-panel">
        <GuideContent />
      </div>
      <SiteFooter />
    </div>
  )
}
