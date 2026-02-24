import type { Metadata } from 'next'
import NYCWeddingsContent from './content'

export const metadata: Metadata = {
  title: 'NYC Live Wedding Band | Blue Avenue Groove',
  description:
    'Blue Avenue Groove is a 6-12 piece NYC wedding band playing Funk, Soul, Pop, R&B, Rock and Motown. Over 10 years of live wedding music across New York City.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/wedding-bands-nyc/',
  },
}

export default function NYCWeddingsPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <NYCWeddingsContent />
      </div>
    </div>
  )
}
