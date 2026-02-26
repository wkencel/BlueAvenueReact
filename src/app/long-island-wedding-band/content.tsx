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
          Long Island weddings are known for packed dance floors and high
          expectations. Whether it&apos;s a 300-person ballroom reception or
          an intimate vineyard ceremony on the North Fork, the band needs
          to deliver. We&apos;ve been playing Long Island weddings for over a decade.
          We know what&apos;s at stake and we show up ready every time.
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
      <h2>From the North Shore to the North Fork</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played North Fork wineries like Bedell Cellars and
          Raphael Vineyard, and venues throughout the island, including Oheka
          Castle, The Mansion at Oyster Bay, Crest Hollow Country Club,
          Land&apos;s End, and more. Gold Coast estates, Hamptons properties,
          Garden City ballrooms. Long Island has one of the deepest wedding
          venue scenes in the Northeast, and we know what each type of
          setting demands.
        </p>
        <p>
          Our band scales from 5 to 12 pieces with a full horn section.
          Ceremony music, cocktail hour, pro audio, MC services.
          We cover your entire night.{' '}
          <Link href="/wedding-event-services">See everything we bring.</Link>
        </p>
      </div>
      <br />
      <h2>A Band That Can Keep Up with a Long Island Dance Floor</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Long Island dance floors are a test. Guests show up ready and they
          expect the band to match that energy from the jump. We play Funk,
          Soul, Motown, Pop, Rock, and R&amp;B, and we don&apos;t let up. Our
          musicians have toured with major recording artists, recorded on hit
          albums, and trained at top conservatories. But on your
          wedding night, all of that training goes into one thing: keeping
          every generation on that floor.
        </p>
        <p>
          That&apos;s what a Long Island crowd deserves and that&apos;s
          what we bring.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Long Island Wedding</h2>
      <p>
        Long Island dates fill up fast, especially summer and fall. Reach out 6 to 12
        months ahead to hold yours. Drop us a message below.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
