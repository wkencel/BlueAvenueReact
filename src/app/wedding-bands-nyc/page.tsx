import type { Metadata } from 'next'
import NYCWeddingsContent from './content'

export const metadata: Metadata = {
  title: 'The Most Unforgettable Live Wedding Band in NYC',
  description:
    'Blue Avenue Groove is the premier NYC wedding band. Customizable band options, professional audio, and personalized performances for your special day in New York City.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/wedding-bands-nyc/',
  },
}

export default function NYCWeddingsPage() {
  return (
    <div id="wrapper" className="page">
      <div>
        <NYCWeddingsContent />
      </div>
    </div>
  )
}
