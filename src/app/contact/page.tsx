import type { Metadata } from 'next'
import ContactContent from './content'
import Link from 'next/link'

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
      <div style={{ maxWidth: '40rem', margin: '0 auto', padding: '2rem' }}>
        <h2 className="major">Contact</h2>
        <ContactContent />
        <br />
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  )
}
