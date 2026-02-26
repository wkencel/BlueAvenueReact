import type { Metadata } from 'next'
import AboutContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'About Blue Avenue Groove',
  description:
    'Meet the musicians of Blue Avenue Groove - NYC premier wedding band. Our story, leadership, and the passion behind our music.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/about/',
  },
}

export default function AboutPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/about" />
      <div className="page-panel">
        <AboutContent />
        <Link href="/" className="button">Back to Home</Link>
      </div>
      <SiteFooter />
    </div>
  )
}
