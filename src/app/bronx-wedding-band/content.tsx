'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function BronxContent() {
  return (
    <>
      <h1>Bronx Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          The Bronx has a rich musical heritage, and its weddings carry that
          same energy. From elegant waterfront venues along City Island to
          grand halls in Pelham Bay and Throggs Neck, we&apos;ve been playing
          Bronx weddings for over a decade. We bring the soul, the groove,
          and the professionalism that your celebration deserves.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Blue Avenue Groove performing live at a Bronx wedding reception"
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
      <h2>Bronx Venues We&apos;ve Played</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at The Marina del Rey, Villa Barone Hilltop
          Manor, Eastwood Manor, The New York Botanical Garden, and venues
          throughout City Island, Riverdale, and Pelham Bay. Whether
          it&apos;s an intimate garden ceremony or a grand ballroom reception,
          we bring the right lineup for the room.
        </p>
        <p>
          Our band scales from five to twelve pieces, with pro audio, MC
          services, and cocktail hour and ceremony music included.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Bronx Couples Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Bronx weddings are all about family, energy, and a packed dance
          floor. We get it. Our repertoire spans Funk, Soul, Motown, Pop,
          Rock, and R&amp;B, and we know how to read a room and keep the
          energy building all night.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. That level of
          musicianship is what makes the difference.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Bronx Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
