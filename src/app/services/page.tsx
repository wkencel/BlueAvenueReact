import type { Metadata } from 'next'
import Link from 'next/link'

const TARGET = '/wedding-event-services/'

// This route only exists to forward an old URL. The site is a static export to
// S3, so there is no server to issue a real 301. A meta refresh plus a canonical
// and noindex is the reliable static equivalent, and the visible link covers the
// no-JavaScript case.
export const metadata: Metadata = {
  title: 'NYC Wedding & Event Services',
  alternates: {
    canonical: `https://www.blueavenuegroove.com${TARGET}`,
  },
  robots: { index: false, follow: true },
}

export default function ServicesRedirect() {
  return (
    <div id="wrapper" className="page">
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <main className="page-panel">
        <p>
          Redirecting to our{' '}
          <Link href={TARGET}>wedding and event services</Link>.
        </p>
      </main>
    </div>
  )
}
