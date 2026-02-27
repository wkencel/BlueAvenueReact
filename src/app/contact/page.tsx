import type { Metadata } from 'next'
import ContactContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Contact & Pricing',
  description:
    'Get in touch with Blue Avenue Groove for your NYC wedding or event. Message us for a custom quote, use our price calculator, or submit a booking request.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/contact/',
  },
}

export default function ContactPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/contact" />
      <main className="page-panel">
        <h1 className="major">Contact</h1>
        <ContactContent />
        <Link href="/" className="button">Back to Home</Link>
      </main>
      <SiteFooter />
    </div>
  )
}
