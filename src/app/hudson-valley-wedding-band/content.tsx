import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function HudsonValleyContent() {
  return (
    <>
      <h1>Hudson Valley&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Couples choose the Hudson Valley for a reason. Converted barns,
          riverside estates, mountaintop retreats. The venues here set a
          tone that most city spaces can&apos;t match. We bring
          NYC-caliber live music to meet that setting, and we&apos;ve been
          doing it for years. Same musicians who play Manhattan ballrooms,
          same energy, different backdrop.
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
      <h2>Venues from Beacon to New Paltz</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played The Garrison, Mohonk Mountain House, and venues
          throughout the valley. We know the barn venues in Rhinebeck, the
          riverside spots in Cold Spring and Beacon, the estate properties
          in Poughkeepsie, and the more rustic settings around New Paltz.
          The Hudson Valley is also home to venues like The Roundhouse,
          Diamond Mills, Brotherhood Winery, and Cedar Lakes Estate. Every
          space up here has its own sound, and we dial in accordingly.
        </p>
      </div>
      <br />
      <h2>City Musicians, Country Setting</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;re NYC-based. Our musicians have toured with major recording
          artists, recorded on hit albums, and studied at top conservatories.
          That level of musicianship doesn&apos;t change because the venue has
          exposed beams instead of chandeliers. What does change is how we
          approach the room. A barn with high ceilings and wooden walls sounds
          nothing like a stone terrace overlooking the river. We adjust our
          setup, our volume, and our mix for every space.
        </p>
        <p>
          Funk, Soul, Motown, Pop, Rock, R&amp;B. We play it all, and
          we tailor the setlist to fit your crowd and your day.
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Wedding guests dancing at a Hudson Valley reception"
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
      <h2>Planning the Music for a Hudson Valley Wedding</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Hudson Valley weddings often include outdoor ceremonies, which means
          thinking about sound differently than an indoor reception. We handle
          both. A smaller acoustic setup for the ceremony, then the full
          band for the reception. Our 5 to 12 piece lineup comes with pro
          audio, MC services, and cocktail hour music.{' '}
          <Link href="/wedding-event-services">See the full rundown of what we offer.</Link>
        </p>
        <p>
          Peak season up here books early. We recommend reaching out 6 to 12
          months ahead to secure your date.
        </p>
      </div>
      <br />
      <h2>Serving All of NYC and Beyond</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Based in New York City, we play weddings across the entire metro area.
          Beyond the Hudson Valley, we regularly perform in{' '}
          <Link href="/westchester-wedding-band">Westchester</Link>,{' '}
          <Link href="/manhattan-wedding-band">Manhattan</Link>,{' '}
          <Link href="/brooklyn-wedding-bands">Brooklyn</Link>, and{' '}
          <Link href="/new-jersey-wedding-band">New Jersey</Link>.{' '}
          <Link href="/wedding-bands-nyc">See all the areas we serve.</Link>
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Hudson Valley Wedding</h2>
      <p>
        Tell us about your venue and your vision. We&apos;ll build a package
        around your day. Drop us a message below.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
