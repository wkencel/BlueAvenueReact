import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function WestchesterContent() {
  return (
    <>
      <h1>Westchester&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Westchester weddings sit at the intersection of city sophistication
          and natural beauty. Historic estates in Tarrytown, country clubs in
          Rye, waterfront properties along the Long Island Sound. Every venue up
          here has its own character. We&apos;ve been playing Westchester
          weddings for years, and we bring the same caliber of live music
          you&apos;d find at a top Manhattan venue.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Blue Avenue Groove performing live at a Westchester wedding reception"
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
      <h2>Venues from Tarrytown to Larchmont</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played Tappan Hill Mansion and Blue Hill at Stone Barns,
          and we&apos;ve performed at outdoor tented receptions in Scarsdale,
          ballrooms in White Plains, and garden ceremonies in Larchmont.
          Westchester is full of distinct venues like Whitby Castle in Rye,
          The Briarcliff Manor, Crabtree&apos;s Kittle House, and Sleepy Hollow
          Country Club. We know how to make each type of room
          sound right.
        </p>
      </div>
      <br />
      <h2>NYC Musicians in a Westchester Setting</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;re based in the city. Our musicians have toured with major
          recording artists, recorded on hit albums, and trained at top
          conservatories. That&apos;s the level of talent we bring north for
          every Westchester wedding. The difference between a good band and a
          great one is most obvious in a room full of people who&apos;ve been
          to a lot of weddings. And Westchester guests have been to a
          lot of weddings.
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Wedding guests on the dance floor at a Westchester reception"
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
      <h2>Every Generation on the Floor</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Westchester weddings tend to span generations. You&apos;ve got
          grandparents who want to hear Sinatra and friends who want to hear
          Beyonc&eacute;. We move between eras and genres naturally.
          Funk, Soul, Motown, Pop, Rock, R&amp;B. And we do it without
          the transitions feeling forced. The goal is simple: everyone on the
          floor at some point during the night.
        </p>
      </div>
      <br />
      <h2>How to Book a Westchester Wedding Band</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Tell us about your venue, your guest count, the vibe you&apos;re
          after, and any songs you can&apos;t live without. We&apos;ll build a
          custom package: ceremony through last call, or just the
          reception, whatever fits. Our 5 to 12 piece band comes with pro
          audio, MC services, and cocktail hour music.{' '}
          <Link href="/wedding-event-services">See the full list of what we offer.</Link>
        </p>
        <p>
          Westchester dates book up, especially for peak season. We recommend
          reaching out 6 to 12 months ahead.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Westchester Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and let&apos;s
        get started.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
