import type { Metadata } from 'next'
import AboutContent from './content'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Blue Avenue Groove',
  description:
    'Meet the musicians of Blue Avenue Groove - NYC premier wedding band. Our story, leadership, and the passion behind our music.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/about/',
  },
}

export default function AboutPage() {
  return (
    <div id="wrapper" className="page">
      <div style={{ maxWidth: '40rem', margin: '0 auto', padding: '2rem' }}>
        <AboutContent />
        <br />
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  )
}
