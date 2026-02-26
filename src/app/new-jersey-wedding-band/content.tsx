'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function NewJerseyContent() {
  return (
    <>
      <h1>New Jersey&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          New Jersey weddings are known for packed dance floors and
          celebrations that go all night. From elegant country clubs in
          Bergen County to waterfront venues along the Jersey Shore, we&apos;ve
          been crossing the river to play NJ weddings for over a decade. We
          bring the same world-class live music and energy that made us one of
          NYC&apos;s top wedding bands.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Blue Avenue Groove performing live at a New Jersey wedding reception"
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
      <h2>New Jersey Venues We&apos;ve Played</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at The Estate at Florentine Gardens, The
          Venetian, Park Savoy Estate, Liberty House, The Ashford Estate,
          and venues throughout Hoboken, Jersey City, Princeton, and the
          Shore towns. Whether it&apos;s a garden party in Morris County or a
          ballroom reception in North Jersey, we tailor our sound to fit.
        </p>
        <p>
          Our band scales from five to twelve pieces, with pro audio, MC
          services, and cocktail hour and ceremony music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why New Jersey Couples Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          NJ couples want a band that brings real energy and keeps the floor
          packed. That&apos;s exactly what we do. Funk, Soul, Motown, Pop,
          Rock, R&amp;B &mdash; we cover it all and we read the room to build
          momentum throughout the night.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. We bring NYC-level
          talent to every New Jersey wedding we play.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your New Jersey Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
