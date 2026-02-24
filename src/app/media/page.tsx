import type { Metadata } from 'next'
import MediaContent from './content'
import Link from 'next/link'

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
      <div style={{ maxWidth: '40rem', margin: '0 auto', padding: '2rem' }}>
        <MediaContent />
        <br />
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  )
}
