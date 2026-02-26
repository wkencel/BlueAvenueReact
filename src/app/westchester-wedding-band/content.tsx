'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function WestchesterContent() {
  return (
    <>
      <h1>Westchester&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Westchester County is home to some of the most stunning wedding
          venues in the New York area. From historic estates along the Hudson
          to elegant country clubs in Scarsdale and Rye, we&apos;ve been
          playing Westchester weddings for over a decade. We bring
          world-class live music just a short drive north of the city.
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
      <h2>Westchester Venues We&apos;ve Played</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve performed at Whitby Castle, The Briarcliff Manor,
          Abigail Kirsch at Tappan Hill, Crabtree&apos;s Kittle House,
          Mamaroneck Beach &amp; Yacht Club, and venues throughout White
          Plains, Tarrytown, and Larchmont. Whether your wedding is in a
          grand ballroom or an outdoor garden, we bring the right energy.
        </p>
        <p>
          Our 5 to 12 piece band covers your entire night with pro audio,
          MC services, and ceremony and cocktail hour music.{' '}
          <Link href="/wedding-event-services">See everything we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Why Westchester Couples Choose Us</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Westchester weddings often blend the sophistication of the city
          with the beauty of the suburbs. We match that energy perfectly.
          From elegant dinner music to a packed dance floor, we build
          momentum throughout the night and keep every generation engaged.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. Funk, Soul, Motown,
          Pop, Rock, R&amp;B &mdash; we bring it all and make it feel
          effortless.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Westchester Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and
        let&apos;s start planning the music for your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
