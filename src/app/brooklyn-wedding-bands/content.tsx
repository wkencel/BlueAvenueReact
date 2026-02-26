'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function BrooklynWeddingsContent() {
  return (
    <>
      <h1>Brooklyn&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Brooklyn is where we got our start, and it&apos;s still where we
          feel most at home. From warehouse lofts in Williamsburg to the
          Brooklyn Botanical Gardens to rooftops in DUMBO, we&apos;ve been
          playing weddings across the borough for over a decade. This is our
          neighborhood, these are our venues, and we bring that Brooklyn
          energy every single time.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Blue Avenue Groove performing live at a Brooklyn wedding reception"
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
      <h2>A Band Built for Brooklyn Venues</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Brooklyn wedding venues run the full spectrum: exposed brick and
          steel beams one weekend, waterfront sunsets the next. We&apos;ve
          played The Green Building, 501 Union, Liberty Warehouse, W Loft,
          and dozens of other spaces across the borough. Our lineup scales
          to fit any room, from a tight five-piece for an intimate Greenpoint
          loft to a full horn section for a grand hall in Park Slope.
        </p>
        <p>
          We cover your entire night, reception through last call, with
          pro audio, MC services, and cocktail hour and ceremony music.{' '}
          <Link href="/wedding-event-services">See the full list of what we offer.</Link>
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Wedding guests dancing at a Brooklyn rooftop reception"
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
      <h2>Why Brooklyn Couples Trust Us with Their Wedding</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Brooklyn weddings have their own vibe: creative, personal,
          anything but ordinary. We get it because we live it. We don&apos;t
          show up with a rigid setlist. We read the room, match your
          crowd&apos;s energy, and build the kind of momentum that keeps
          people on the dance floor until the last song.
        </p>
        <p>
          Whether you&apos;re going for a laid-back dinner party in
          Bushwick or a full-on dance party in Red Hook, we tailor
          every set to fit your day, your guests, and your taste. Funk,
          Soul, Motown, Rock, Pop, R&amp;B. We bring it all and we
          make it feel effortless.
        </p>
        <p>
          Our musicians don&apos;t just play weddings. They&apos;ve
          toured with major recording artists, performed at international
          events, recorded on hit albums, and
          trained at top music conservatories. That level of musicianship
          is what separates a good band from one your guests won&apos;t
          stop talking about.
        </p>
      </div>
      <br />
      <h2>How to Book a Brooklyn Wedding Band</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          It starts with your vision. Tell us about your venue, the
          vibe you&apos;re going for, and any must-play songs. We&apos;ll
          put together a package around your day: just the reception,
          the full night from ceremony to last call, or anything in
          between. Brooklyn
          dates fill up fast, so we recommend reaching out 6 to 12
          months ahead to hold yours.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Brooklyn Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
