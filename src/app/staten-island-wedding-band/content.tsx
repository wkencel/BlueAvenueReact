'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function StatenIslandContent() {
  return (
    <>
      <h1>Staten Island&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Staten Island weddings have a character all their own: close-knit
          families, beautiful waterfront settings, and celebrations that go
          all night. We&apos;ve been playing weddings across the borough for
          over a decade, and we bring the energy and professionalism that
          Staten Island couples expect.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Blue Avenue Groove performing live at a Staten Island wedding reception"
        width="90%"
        loading="lazy"
        style={{
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      />
      <br />
      <br />
      <h2>Staten Island Venues We Know</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at The Vanderbilt at South Beach, Above
          Rooftop, Richmond County Country Club, The Historic Old Bermuda
          Inn, and venues throughout Great Kills, Tottenville, and St.
          George. Each space calls for a different approach, and we tailor
          our lineup and sound to fit perfectly.
        </p>
        <p>
          Our band ranges from a tight five-piece to a full 12-piece
          ensemble with horns. We bring pro audio, MC services, and
          ceremony and cocktail hour music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Staten Island Couples Trust Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Staten Island weddings are about bringing people together. The
          dance floor matters, the music matters, and the band needs to
          deliver. We play Funk, Soul, Motown, Pop, Rock, and R&amp;B, and
          we read the crowd to keep the energy exactly where it needs to be.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. That experience is
          what separates a good band from one your guests won&apos;t stop
          talking about.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Staten Island Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
