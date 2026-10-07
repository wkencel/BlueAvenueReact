import type { Metadata } from 'next'
import AboutContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'About Blue Avenue Groove',
  description:
    'Meet the band behind Blue Avenue Groove, an NYC funk, soul and Motown wedding band with lead vocalists Jonathan and Sami Stevens. 10+ years, 5× WeddingWire Couples\' Choice, booked direct.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/about/',
  },
}

export default function AboutPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/about" />
      <main className="page-panel">
        <AboutContent />
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
