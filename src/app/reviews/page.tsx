import type { Metadata } from 'next'
import Reviews from '@/components/Reviews'
import { ReviewsStructuredData } from '@/components/StructuredData'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Wedding Band Reviews',
  description:
    'Read reviews from real couples who hired Blue Avenue Groove for their NYC wedding. See why we are one of the top-rated wedding bands in New York.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/reviews/',
  },
}

export default function ReviewsPage() {
  return (
    <div id="wrapper" className="page">
      <ReviewsStructuredData />
      <PageNav current="/reviews" />
      <div className="page-panel">
        <h1 className="major">Reviews</h1>
        <Reviews />
        <Link href="/" className="button" style={{ marginTop: '4px', marginLeft: '12px' }}>Back to Home</Link>
      </div>
      <SiteFooter />
    </div>
  )
}
