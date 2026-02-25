'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function NYCWeddingsContent() {
  return (
    <>
      <h1>NYC&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <h2>Blue Avenue Groove</h2>
        <p>
          We&apos;re a group of musicians from all over New York who came
          together around one idea: weddings should feel like the best night
          of your life, not a corporate event with a soundtrack. We bring real
          energy, real musicianship, and a setlist built around you and your
          guests.
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="NYC Wedding Band"
        width="95%"
        loading="lazy"
        style={{
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      />
      <br />
      <br />
      <h2>What We Bring to Your Wedding</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Our 6 to 12 piece band plays four hours of live music spanning Funk,
          Soul, Pop, R&amp;B, Rock, Motown and more. Every set comes with pro
          audio run by a dedicated AV engineer, MC services to keep your
          reception flowing, and up to three song requests for moments like
          your first dance and parent dances.
        </p>
        <p>
          Need cocktail hour or ceremony music too? We offer ensembles from
          solo keys to a full quartet, with styles ranging from soulful jazz
          to indie folk.{' '}
          <Link href="/services">See the full breakdown on our services page.</Link>
        </p>
      </div>
      <br />
      <h2>Why Couples in NYC Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          With over 10 years playing weddings across New York City, we know
          how to work a room. Small rooftop in Brooklyn, grand ballroom in
          Manhattan, waterfront in Queens: we&apos;ve played them all and we
          bring the same energy every time.
        </p>
        <p>
          We don&apos;t just run through a setlist. We read the crowd, build
          momentum, and keep people on the dance floor. That&apos;s the
          difference between hiring musicians and hiring a band that genuinely
          cares about making your night unforgettable.
        </p>
      </div>
      <br />
      <h2>How Booking Works</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          It starts with a conversation. Tell us about your wedding, the vibe
          you&apos;re going for, and any must-play songs. We&apos;ll put
          together a package that fits, whether that&apos;s just the reception
          or ceremony through last call. We recommend reaching out 6 to 12
          months ahead to lock in your date.
        </p>
      </div>
      <br />
      <h2>Book Your Date</h2>
      <p>
        Ready to make it happen? Drop us a message below and let&apos;s talk
        about your wedding.
      </p>
      <h3>Send us a message to Book</h3>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
