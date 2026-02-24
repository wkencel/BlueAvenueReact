import type { Metadata } from 'next'
import Reviews from '@/components/Reviews'
import { ReviewsStructuredData } from '@/components/StructuredData'
import Link from 'next/link'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Wedding Band Reviews',
  description:
    'Read reviews from real couples who hired Blue Avenue Groove for their NYC wedding. See why we are one of the top-rated wedding bands in New York.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/reviews/',
  },
}

export default function ReviewsPage() {
  return (
    <div id="wrapper" className="page">
      <ReviewsStructuredData />
      <PageNav current="/reviews" />
      <div className="page-panel">
        <h2 className="major">Reviews</h2>
        <Reviews />
        <Link href="/" className="button">Back to Home</Link>
      </div>
    </div>
  )
}
