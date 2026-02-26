'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function ManhattanContent() {
  return (
    <>
      <h1>Manhattan&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Manhattan weddings are unlike anything else. From landmark ballrooms
          on the Upper East Side to industrial lofts in Chelsea, every venue
          has its own character and its own acoustic challenges. After more
          than a decade of playing weddings across the island, we know how to
          make every room sound its best.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Blue Avenue Groove performing live at a Manhattan wedding reception"
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
      <h2>A Band That Knows Manhattan Venues</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at The Plaza, Cipriani, Gotham Hall, The
          Lighthouse at Chelsea Piers, 620 Loft &amp; Garden, and dozens of
          other Manhattan venues. Whether it&apos;s a grand Midtown ballroom,
          a SoHo gallery, or a rooftop overlooking Central Park, we bring
          the right lineup and energy to match the space.
        </p>
        <p>
          Our band scales from an intimate five-piece to a full 12-piece
          ensemble with a horn section. We handle pro audio, MC services,
          and ceremony and cocktail hour music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Manhattan Couples Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Manhattan couples expect the best, and the stakes are high. Venues
          have strict load-in windows, noise ordinances, and unique logistics.
          We handle all of it professionally so you can focus on your night.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. On your wedding night,
          all of that experience goes into reading the room, building energy,
          and keeping the dance floor packed from the first song to last call.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Manhattan Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
