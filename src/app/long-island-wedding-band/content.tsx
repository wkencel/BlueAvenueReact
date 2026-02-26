'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function LongIslandContent() {
  return (
    <>
      <h1>Long Island&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Long Island weddings are legendary for a reason: big families, full
          dance floors, and celebrations that go all night. From waterfront
          estates on the North Shore to vineyard weddings on the East End,
          we&apos;ve been playing Long Island weddings for over a decade and
          we know exactly what it takes to keep the party going.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Blue Avenue Groove performing live at a Long Island wedding reception"
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
      <h2>Long Island Venues We Know</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at Oheka Castle, The Mansion at Oyster Bay,
          Chateau Briand, Land&apos;s End, Crest Hollow Country Club, and
          venues throughout the Hamptons, Garden City, Huntington, and the
          North Fork. Whether it&apos;s a grand estate or an intimate
          beachside ceremony, we bring the right lineup and energy.
        </p>
        <p>
          Our band scales from five to twelve pieces, with pro audio, MC
          services, and cocktail hour and ceremony music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Long Island Couples Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Long Island couples want a band that can deliver. The dance floor
          is the centerpiece of the night, and there&apos;s no room for a
          band that can&apos;t keep up. We play Funk, Soul, Motown, Pop,
          Rock, and R&amp;B, and we read the room to build the kind of
          momentum that keeps every generation on the floor.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. That experience is
          what makes the difference between a good band and one your guests
          won&apos;t stop talking about.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Long Island Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
