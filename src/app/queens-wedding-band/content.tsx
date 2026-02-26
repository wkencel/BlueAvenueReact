'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function QueensContent() {
  return (
    <>
      <h1>Queens&apos; Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Queens is the most diverse borough in the world, and its weddings
          reflect that. From elegant ballrooms in Astoria to waterfront
          celebrations in Long Island City, we&apos;ve been bringing live music
          to Queens weddings for over a decade. Whatever your cultural
          traditions and musical tastes, we make it all come together on the
          dance floor.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Blue Avenue Groove performing live at a Queens wedding reception"
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
      <h2>Queens Venues We Know and Love</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played The Foundry, Queens Botanical Garden, Terrace on
          the Park, The Riverview, and venues throughout Astoria, Flushing,
          Bayside, and Long Island City. Each space has its own feel, and
          after years of performing across the borough we know how to make
          every one sound incredible.
        </p>
        <p>
          Our lineup scales from a tight five-piece to a full horn section,
          with pro audio, MC services, and cocktail hour and ceremony music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Queens Couples Trust Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Queens weddings bring together families and traditions from around
          the world. We thrive in that environment. Our repertoire spans
          Funk, Soul, Motown, Pop, Rock, and R&amp;B, and we read the room
          to match the energy your guests bring.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. That experience shows
          in every set we play.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Queens Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
