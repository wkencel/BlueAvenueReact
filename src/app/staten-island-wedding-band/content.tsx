'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function StatenIslandContent() {
  return (
    <>
      <h1>Staten Island&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Staten Island couples know what they want: a band that shows up
          prepared, plays with real energy, and keeps the floor packed until
          the venue turns the lights on. We&apos;ve been doing exactly that
          across the borough for over a decade. No gimmicks. Just a tight band
          that delivers.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Blue Avenue Groove performing live at a Staten Island wedding reception"
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
      <h2>Staten Island Wedding Venues</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Staten Island has a strong roster of wedding venues: The
          Vanderbilt at South Beach, Above Rooftop, Richmond County Country
          Club, The Historic Old Bermuda Inn, Nicotra&apos;s Ballroom. From
          the waterfront spots in Great Kills to the classic halls in
          Tottenville to the newer spaces around St. George, every room gets
          a tailored setup: right lineup, right volume, right energy.
        </p>
      </div>
      <br />
      <h2>What We Sound Like</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Funk, Soul, Motown, Pop, Rock, R&amp;B. We cover the full range
          with real musicians who know how to deliver live. Our
          players have toured professionally, recorded on hit albums, and
          trained at top conservatories. You hear the difference the second
          we count off the first song.
        </p>
        <p>
          But what really matters is how we run the night. We watch the room.
          When the floor is heating up, we lean in. When it needs a reset,
          we give it one. By the end of the night, everyone has been
          on that floor.
        </p>

      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Wedding guests on the dance floor at a Staten Island reception"
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
      <h2>Everything You Need for the Night</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Our band scales from 5 to 12 pieces with a full horn section.
          We handle ceremony music, cocktail hour, and the full reception with
          pro audio and MC services.{' '}
          <Link href="/wedding-event-services">See everything we bring to your wedding.</Link>
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Staten Island Wedding</h2>
      <p>
        Drop us a message below with your date and venue. We&apos;ll put
        together a package around your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
