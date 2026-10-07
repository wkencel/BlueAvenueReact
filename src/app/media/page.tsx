import type { Metadata } from 'next'
import MediaContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Wedding Band Videos & Photos',
  description:
    'Watch Blue Avenue Groove perform live at NYC weddings and events. Videos, photos, and highlights from our performances across Manhattan, Brooklyn, and beyond.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/media/',
  },
}

export default function MediaPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/media" />
      <main className="page-panel">
        <MediaContent />
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
