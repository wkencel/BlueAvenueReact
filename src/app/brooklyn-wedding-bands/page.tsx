import type { Metadata } from 'next'
import BrooklynWeddingsContent from './content'

export const metadata: Metadata = {
  title: 'Brooklyn Wedding Bands: Top Wedding Band in Brooklyn & NYC',
  description:
    'Blue Avenue Groove is the most unforgettable live wedding band in Brooklyn. Personalized performances, versatile repertoire, and professional entertainment for your special day.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/brooklyn-wedding-bands/',
  },
}

export default function BrooklynWeddingsPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <BrooklynWeddingsContent />
      </div>
    </div>
  )
}
