import type { Metadata } from 'next'
import SongListContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'NYC Wedding Band Song List | Blue Avenue Groove',
  description:
    "Browse Blue Avenue Groove's full song list of 200+ songs spanning Funk, Soul, Pop, R&B, Motown, Rock, and Jazz. NYC's premier wedding band. Custom requests welcome.",
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
        <p style={{ marginTop: '1rem' }}><Link href="/">Back to Home</Link></p>
      </main>
      <SiteFooter />
    </div>
  )
}
