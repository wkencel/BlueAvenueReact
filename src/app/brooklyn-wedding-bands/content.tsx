'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function BrooklynWeddingsContent() {
  return (
    <>
      <h1>Brooklyn&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <h2>Blue Avenue Groove</h2>
        <p>
          Brooklyn is where we got our start, and it&apos;s still where we
          feel most at home. From warehouse lofts in Williamsburg to gardens
          in Prospect Park to rooftops in DUMBO, we&apos;ve played weddings
          all over the borough and we bring that Brooklyn energy every time.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Brooklyn Wedding Band"
        width="90%"
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
          Our 6 to 12 piece band plays four hours of Funk, Soul, Pop, R&amp;B,
          Rock, Motown and more. Every set comes with pro audio run by a
          dedicated AV engineer, MC services to keep your reception on track,
          and up to three song requests for your first dance, parent dances,
          or whatever matters most to you.
        </p>
        <p>
          We also offer cocktail hour and ceremony ensembles, from solo keys
          to a full quartet, covering everything from soulful jazz to indie
          folk.{' '}
          <Link href="/services">Check out our full services page for details.</Link>
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Brooklyn Rooftop Wedding"
        width="90%"
        style={{
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      />
      <br />
      <br />
      <h2>Why Couples in Brooklyn Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Over 10 years of playing weddings across NYC means we know how to
          read a room and keep a dance floor packed. We don&apos;t just run
          through songs. We build momentum, match your crowd&apos;s energy,
          and make sure people are still talking about the music long after
          the night ends.
        </p>
        <p>
          Brooklyn weddings have their own vibe and we get it. Whether
          you&apos;re going for laid-back and intimate or a full-on dance
          party, we tailor the set to fit your day, not the other way around.
        </p>
      </div>
      <br />
      <h2>How Booking Works</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Tell us about your wedding, the vibe you&apos;re going for, and any
          must-play songs. We&apos;ll put together a package that fits,
          whether that&apos;s reception only or ceremony through last call.
          We recommend reaching out 6 to 12 months ahead to lock in your
          date.
        </p>
      </div>
      <br />
      <h2>Book Your Date</h2>
      <p>
        Ready to make it happen? Drop us a message and let&apos;s talk about
        your Brooklyn wedding.
      </p>
      <h3>Send us a message to Book</h3>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
