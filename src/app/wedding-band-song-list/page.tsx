import type { Metadata } from 'next'
import SongListContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'NYC Wedding Band Song List | Blue Avenue Groove',
  description:
    "Browse Blue Avenue Groove's full song list — 180+ songs spanning Funk, Soul, Pop, R&B, Motown, Rock, and Jazz. NYC's premier wedding band. Custom requests welcome.",
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/wedding-band-song-list/',
  },
}

export default function SongListPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <main className="page-panel">
        <SongListContent />
        <Link href="/" className="button">
          Back to Home
        </Link>
      </main>
    </div>
  )
}
