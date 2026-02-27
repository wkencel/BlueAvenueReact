import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function NewJerseyContent() {
  return (
    <>
      <h1>New Jersey&apos;s Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We cross the river for New Jersey weddings all the time. Bergen
          County ballrooms, Shore town estates, garden parties in Morris
          County. NJ couples get the same band, the same musicians,
          and the same energy we bring to every NYC wedding. No compromise,
          no B-team. Just the full Blue Avenue Groove experience.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Blue Avenue Groove performing live at a New Jersey wedding reception"
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
      <h2>NJ Venues We Know</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played Liberty House in Jersey City, Stone House at
          Stirling Ridge, and plenty of other NJ venues over the years.
          Hoboken rooftops, Princeton estates, North Jersey country clubs,
          Shore town ballrooms. We&apos;ve played the full range. The
          state also has standout venues like The Estate at Florentine Gardens,
          The Venetian, Park Savoy Estate, and The Ashford Estate. We know
          what each setting calls for.
        </p>
      </div>
      <br />
      <h2>What NJ Couples Get from a NYC Band</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Our musicians have toured with major recording artists, recorded on
          hit albums, and trained at top conservatories. They play NYC venues
          regularly. The same players, the same professionalism, the
          same instinct for reading a room. When we cross into Jersey, nothing
          changes except the zip code.
        </p>
        <p>
          We play Funk, Soul, Motown, Pop, Rock, and R&amp;B. Every
          set is played by musicians who do this at the highest level. NJ dance floors are demanding, and
          we&apos;re ready for that.
        </p>
      </div>
      <br />
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Wedding guests dancing at a New Jersey reception"
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
      <h2>How to Book</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Tell us your date, your venue, and the vibe you&apos;re going for.
          We&apos;ll put together a custom package: ceremony through last call,
          just the reception, or anything in between. Our 5 to 12 piece band
          includes pro audio, MC services, and cocktail hour music.{' '}
          <Link href="/wedding-event-services">Here&apos;s everything we offer.</Link>
        </p>
        <p>
          NJ dates book up, especially summer and fall. Reach out 6
          to 12 months ahead to hold yours.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your New Jersey Wedding</h2>
      <p>
        Ready to get started? Drop us a message below and let&apos;s plan
        your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
