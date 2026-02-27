import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function NYCWeddingsContent() {
  return (
    <>
      <h1>NYC&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          From The MET Museum to Chelsea Piers to intimate rooftops across
          all five boroughs, Blue Avenue Groove has been the band behind
          over a decade of New York City weddings. Our musicians have toured
          with major recording artists, performed at international events, and recorded on hit albums, and they bring every bit of
          that experience to your night.
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Blue Avenue Groove performing at an NYC wedding reception"
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
      <h2>Live Music for Every NYC Celebration</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played everything from iconic Manhattan landmarks to
          intimate lofts, rooftops, and restaurants across all five
          boroughs. Every venue sounds different, and after more than
          a decade of NYC weddings, we know how to make each one sound its
          best.
        </p>
        <p>
          Our 5 to 12 piece band brings world-class live music to your
          reception, with pro audio, MC services, and a setlist built
          around your night. We also cover cocktail hour and ceremony
          music.{' '}
          <Link href="/wedding-event-services">See the full breakdown on our services page.</Link>
        </p>
      </div>
      <br />
      <h2>Why NYC Couples Choose Blue Avenue Groove</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          There are a lot of wedding bands in New York. The difference with
          us is what happens between the songs: how we read a room that&apos;s
          warming up, how we shift gears when the energy peaks, how we keep
          a dance floor packed without ever feeling like we&apos;re forcing
          it. That instinct comes from 10+ years of playing weddings in
          every corner of the city.
        </p>
        <p>
          Our musicians have recorded on hit albums,
          trained at top conservatories, and shared stages with artists
          you&apos;d recognize. But on your wedding night, all of that
          experience is pointed at one thing: making sure you and your guests have
          the time of your lives.
        </p>
      </div>
      <br />
      <h2>How to Book a Wedding Band in NYC</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          It starts with a conversation. Tell us about your venue, your
          guest count, the vibe you&apos;re going for, and any must-play
          songs. We&apos;ll put together a custom package: just the
          reception, the full night from ceremony to last call, or
          anything in between. NYC dates
          book early, so we recommend reaching out 6 to 12 months ahead
          to hold yours.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your NYC Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
