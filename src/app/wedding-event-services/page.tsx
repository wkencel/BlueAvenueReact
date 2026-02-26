import type { Metadata } from 'next'
import EventServices from '@/components/EventServices'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Wedding Event Services',
  description:
    'Blue Avenue Groove offers 6-12 piece reception bands, cocktail hour ensembles, and ceremony musicians. Professional audio, MC services, and a repertoire spanning Funk, Soul, Pop, R&B, and Rock.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/wedding-event-services/',
  },
}

export default function ServicesPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/wedding-event-services" />
      <div className="page-panel">
        <EventServices />
        <Link href="/" className="button">Back to Home</Link>
      </div>
      <SiteFooter />
    </div>
  )
}
