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
      <main className="page-panel">
        <h1 className="major">NYC Wedding Band Reviews</h1>
        <p style={{ opacity: 0.85, marginTop: '-0.5rem' }}>
          Real reviews from real NYC couples. Rated 5.0 on WeddingWire, The Knot and Google.
        </p>
        <Reviews />
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/contact" className="button special">Check Your Date</Link>
          &nbsp;&nbsp;
          <Link href="/">Back to Home</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
