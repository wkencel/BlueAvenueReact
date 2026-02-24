import type { Metadata } from 'next'
import ContactContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Contact & Pricing',
  description:
    'Get in touch with Blue Avenue Groove for your NYC wedding or event. Schedule a meeting, use our price calculator, or submit a booking request.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/contact/',
  },
}

export default function ContactPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/contact" />
      <div className="page-panel">
        <h2 className="major">Contact</h2>
        <ContactContent />
        <Link href="/" className="button">Back to Home</Link>
      </div>
    </div>
  )
}
