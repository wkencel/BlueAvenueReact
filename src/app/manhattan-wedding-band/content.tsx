import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'
import { FaqStructuredData } from '@/components/StructuredData'

const localFaqs = [
  {
    q: 'How much does a Manhattan wedding band cost?',
    a: 'Reception packages start at $8,000, and most Manhattan weddings land between $10,000 and $14,000 depending on band size and whether you add ceremony and cocktail-hour sets. We give you the starting number up front instead of a mystery quote.',
  },
  {
    q: 'Can you handle strict Manhattan venue load-ins and timelines?',
    a: 'Yes. We are used to service-elevator load-ins, tight timelines and noise rules that change block by block, from Midtown ballrooms to SoHo lofts to rooftops over the park. We arrive early and plan the run of show with your venue.',
  },
  {
    q: 'How big is the band, and can you cover the ceremony too?',
    a: 'We scale from 6 to 12 pieces with male and female lead vocals and a full horn section. We can also play a trio for your ceremony and a jazz set for cocktail hour so the music stays live all night.',
  },
]

export default function ManhattanContent() {
  return (
    <>
      <h1>Manhattan&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Manhattan venues are demanding. Load-ins through service elevators,
          strict timelines, noise ordinances that vary block by block, and
          acoustics that change from a Midtown ballroom to a SoHo loft to a
          rooftop overlooking the park. After more than a decade of playing
          weddings across the island, we handle all of it so you
          don&apos;t have to think about it.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-3.jpg"
        alt="Blue Avenue Groove performing live at a Manhattan wedding reception"
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
      <h2>Manhattan Venues We Know</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played The Plaza, Gotham Hall, 620 Loft &amp; Garden,
          and The Lighthouse at Chelsea Piers. We&apos;ve played intimate
          gallery spaces in the West Village and grand ballrooms on the Upper
          East Side. Every room on this island sounds different, and we know
          how to make each one work.
        </p>
      </div>
      <br />
      <h2>Reading the Room in Manhattan</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Manhattan crowds are sharp. They notice the details: a clean
          transition between songs, a setlist that flows instead of lurches, a
          band that knows when to build and when to pull back. We don&apos;t
          work off a rigid playlist. We read your guests, feel the energy shift,
          and adjust in real time. That&apos;s the difference between a band
          that plays music and one that runs the room.
        </p>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. That background shows
          up in the tight arrangements, the vocal harmonies, and the kind of
          pocket groove that keeps a dance floor locked in all night.
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Wedding guests dancing at a Manhattan reception"
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
      <h2>What We Bring to Your Night</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Our band scales from a 6-piece to a full 12-piece ensemble with
          a horn section. We cover your entire night, from ceremony music
          and cocktail hour through reception and last call, with pro audio
          and MC services included. Funk, Soul, Motown, Pop, Rock,
          R&amp;B. We play it all and we make it fit your crowd.{' '}
          <Link href="/wedding-event-services">Here&apos;s the full breakdown of what we offer.</Link>
        </p>
      </div>
      <br />
      <h2>Serving All of NYC and Beyond</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We play weddings across the entire New York metro area. Beyond Manhattan,
          we regularly perform in{' '}
          <Link href="/brooklyn-wedding-bands">Brooklyn</Link>,{' '}
          <Link href="/queens-wedding-band">Queens</Link>,{' '}
          <Link href="/westchester-wedding-band">Westchester</Link>, and the{' '}
          <Link href="/hudson-valley-wedding-band">Hudson Valley</Link>.{' '}
          <Link href="/wedding-bands-nyc">See all the areas we serve.</Link>
        </p>
      </div>
      <br />
      <h2>Frequently Asked Questions</h2>
      <div style={{ marginLeft: '2%' }}>
        {localFaqs.map((f) => (
          <details key={f.q} style={{ marginBottom: '0.75rem' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      <FaqStructuredData faqs={localFaqs} />
      <br />
      <h2>Book Blue Avenue Groove for Your Manhattan Wedding</h2>
      <p>
        Manhattan dates go fast. Reach out 6 to 12 months ahead to hold
        yours. Drop us a message below and let&apos;s start planning.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
