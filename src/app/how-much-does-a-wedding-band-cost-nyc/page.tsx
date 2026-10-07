import type { Metadata } from 'next'
import CostGuideContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'
import { ArticleStructuredData, FaqStructuredData } from '@/components/StructuredData'
import { costFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'How Much Does a Wedding Band Cost in NYC? (2026 Pricing Guide)',
  description:
    'How much does a wedding band cost in NYC? Reception packages start at $8,000 and most NYC weddings land $10,000 to $14,000. An honest 2026 pricing guide from a working NYC bandleader.',
  alternates: {
    canonical:
      'https://www.blueavenuegroove.com/how-much-does-a-wedding-band-cost-nyc/',
  },
}

export default function WeddingBandCostPage() {
  return (
    <div id="wrapper" className="page">
      <ArticleStructuredData
        title="How Much Does a Wedding Band Cost in NYC? (2026 Pricing Guide)"
        description="How much does a wedding band cost in NYC? Reception packages start at $8,000 and most NYC weddings land $10,000 to $14,000. An honest 2026 pricing guide from a working NYC bandleader."
        datePublished="2026-09-19"
        url="https://www.blueavenuegroove.com/how-much-does-a-wedding-band-cost-nyc/"
        image={{ url: "https://www.blueavenuegroove.com/images/weddingPhotos/nyc-wedding-reception-1.jpeg", width: 1000, height: 666 }}
      />
      <FaqStructuredData faqs={costFaqs} />
      <PageNav current="/blog" />
      <main className="page-panel">
        <CostGuideContent />
      </main>
      <SiteFooter />
    </div>
  )
}
