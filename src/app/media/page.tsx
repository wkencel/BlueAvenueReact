import type { Metadata } from 'next'
import MediaContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Wedding Band Videos & Photos',
  description:
    'Watch Blue Avenue Groove perform live at NYC weddings and events. Videos, photos, and highlights from our performances across Manhattan, Brooklyn, and beyond.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/media/',
  },
}

export default function MediaPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/media" />
      <div className="page-panel">
        <MediaContent />
        <Link href="/" className="button">Back to Home</Link>
      </div>
    </div>
  )
}
