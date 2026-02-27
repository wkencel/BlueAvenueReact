import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function QueensContent() {
  return (
    <>
      <h1>Queens&apos; Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Queens has some of the most diverse wedding celebrations in
          New York City, and every wedding we play here reflects that.
          Astoria to Flushing, Long Island City to Bayside. The celebrations
          are big, the energy is high, and the dance floors don&apos;t quit. We&apos;ve been
          playing Queens weddings for over a decade and we know what it takes
          to bring a room together when the guest list spans three generations
          and five musical tastes.
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
      <h2>Playing Every Corner of Queens</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played Terrace on the Park, Russo&apos;s On The Bay,
          and The Foundry in Long Island City. Each venue brings a different
          crowd and a different energy. A waterfront reception in LIC feels
          nothing like a grand hall in Howard Beach, and whether the next
          wedding is in Astoria, Bayside, or Flushing, we adjust our
          approach for every room.
        </p>
        <p>
          Our band ranges from 5 to 12 pieces. We bring pro audio, MC
          services, and ceremony and cocktail hour music. Everything
          you need for the full night.{' '}
          <Link href="/wedding-event-services">See what we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Music That Brings Everyone Together</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          The best Queens weddings are the ones where everyone ends up on the
          floor. The couple&apos;s college friends, the aunts and
          uncles, the kids, the grandparents. That doesn&apos;t happen by
          accident. It happens because the band knows how to move between Motown
          and current Pop, how to drop into a Funk groove that pulls people out
          of their seats, and when to bring it back to a slow song that gives
          the room a breath.
        </p>
        <p>
          Our musicians have toured professionally, recorded on hit albums,
          and studied at top conservatories. They bring that range to every
          Queens wedding we play.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Queens Wedding</h2>
      <p>
        Tell us about your venue and your vision. We&apos;ll put together a
        package that fits. Drop us a message below.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
