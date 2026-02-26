'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function HudsonValleyContent() {
  return (
    <>
      <h1>Hudson Valley&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          The Hudson Valley has become one of the most sought-after wedding
          destinations in the Northeast. Rolling hills, river views, historic
          barns, and estate properties create a backdrop that&apos;s hard to
          beat. We&apos;ve been playing Hudson Valley weddings for over a
          decade, bringing NYC-caliber live music to every celebration.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Blue Avenue Groove performing live at a Hudson Valley wedding reception"
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
      <h2>Hudson Valley Venues We&apos;ve Played</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at The Roundhouse in Beacon, Brotherhood
          Winery, The Garrison, Diamond Mills, Mohonk Mountain House, and
          venues throughout Rhinebeck, Cold Spring, New Paltz, and
          Poughkeepsie. Whether it&apos;s an outdoor ceremony overlooking the
          river or a barn reception in the hills, we know how to make the
          space come alive.
        </p>
        <p>
          Our 5 to 12 piece band brings pro audio, MC services, and ceremony
          and cocktail hour music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Hudson Valley Couples Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Hudson Valley weddings tend to feel personal and intentional.
          Couples choose this region because they want something special,
          and the music needs to match. We bring Funk, Soul, Motown, Pop,
          Rock, and R&amp;B, and we tailor every set to fit your day, your
          guests, and the unique energy of your venue.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. Whether your wedding
          is intimate or grand, we bring the same world-class musicianship.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Hudson Valley Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
