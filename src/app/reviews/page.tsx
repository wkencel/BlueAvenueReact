import type { Metadata } from 'next'
import Reviews from '@/components/Reviews'
import { ReviewsStructuredData } from '@/components/StructuredData'
import Link from 'next/link'

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
      <div style={{ maxWidth: '40rem', margin: '0 auto', padding: '2rem' }}>
        <h2 className="major">Reviews</h2>
        <Reviews />
        <br />
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  )
}
