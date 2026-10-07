import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'
import { costFaqs } from '@/data/faqs'

export default function CostGuideContent() {
  return (
    <>
      <h1 className="major">
        How Much Does a Wedding Band Cost in NYC? (2026 Pricing Guide)
      </h1>
      <p>
        How much does a wedding band cost in NYC? Reception packages start at
        $8,000. Most NYC weddings land between $10,000 and $14,000. That&apos;s the
        honest range for a full live band with a horn section and two lead
        singers, and we put the starting number right here so you can budget
        before you send a single inquiry. Where you fall inside that range comes
        down to a few real choices, and this guide walks through every one of
        them.
      </p>
      <p>
        I&apos;m Will, the bandleader at Blue Avenue Groove. I&apos;ve booked and
        played NYC weddings for over a decade, from The Plaza and Gotham Hall to
        The Met Museum, the Mandarin Oriental, and the New York Botanical Garden.
        Below is the same pricing math I&apos;d give you on a phone call. No sales
        desk, no runaround.
      </p>

      <img
        src="/images/weddingPhotos/nyc-wedding-reception-1.jpeg"
        alt="Blue Avenue Groove live wedding band performing at an NYC reception"
        width="95%"
        loading="lazy"
        style={{
          display: 'block',
          margin: '0 auto 1.5rem',
          borderRadius: '10px',
        }}
      />

      <h2 className="major">The Short Answer on NYC Wedding Band Cost</h2>
      <p>
        A live band for a wedding in NYC runs $8,000 to $14,000 for most couples.
        A 6-piece is the floor. A 12-piece with ceremony and cocktail-hour music
        sits at the top. Those numbers are for the full package: the musicians,
        pro sound, an MC on the mic, setup, and travel inside the metro.
      </p>
      <p>
        You&apos;ll see cheaper quotes out there. When a band prices way under
        this, something got cut. Usually it&apos;s the number of players, the
        hours, the sound gear, or the chemistry. A four-piece cover band and a
        12-piece show band with horns are not the same product, and the price
        tells you which one you&apos;re getting.
      </p>

      <h2 className="major">What Actually Moves the Price</h2>
      <p>
        Wedding band prices in New York aren&apos;t random. Five things set the
        number.
      </p>
      <ul>
        <li>
          <strong>Band size.</strong> This is the biggest lever. We scale from 6
          to 12 pieces. A 6-piece with Jonathan and Sami Stevens trading male and
          female lead vocals fills an intimate loft. A 10 to 12 piece band with a
          full horn section (sax, trumpet, trombone) fills a ballroom and pushes
          the price up. Every player you add is another pro getting paid.
        </li>
        <li>
          <strong>Ceremony and cocktail-hour add-ons.</strong> The reception is
          the core package. If you want a trio for your ceremony and a jazz set
          for cocktail hour, that&apos;s more musicians and more hours. It keeps
          the music live from the walk down the aisle to the last dance, and it
          adds to the total.
        </li>
        <li>
          <strong>Event length.</strong> A four-hour reception costs less than a
          five or six hour night. Overtime is real. If the party runs long, the
          band runs long, and that gets priced in up front so nobody&apos;s doing
          math at midnight.
        </li>
        <li>
          <strong>Date and season.</strong> Peak season is May through October,
          and prime Saturdays go first. A Saturday in October costs more than a
          Friday in February. If your date has flexibility, an off-peak or
          off-day booking can save you real money.
        </li>
        <li>
          <strong>Travel.</strong> Inside the five boroughs and the close metro,
          travel is built in. A venue out on the East End of Long Island, up the
          Hudson Valley, or a destination booking (we&apos;ve played as far as
          Tulum, Mexico) adds transport and lodging for the whole band.
        </li>
      </ul>

      <h2 className="major">NYC Wedding Band Price Table</h2>
      <p>
        Here&apos;s a straight look at band size versus typical cost. These are
        real ranges for the New York market, not teaser numbers.
      </p>
      <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: '2px solid #ccc', padding: '0.6rem' }}>
                Band size
              </th>
              <th style={{ borderBottom: '2px solid #ccc', padding: '0.6rem' }}>
                Typical NYC range
              </th>
              <th style={{ borderBottom: '2px solid #ccc', padding: '0.6rem' }}>
                Best for
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                6-piece
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                $8,000 – $10,000
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                Lofts, restaurants, guest counts under 120
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                8-piece
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                $10,000 – $12,000
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                Mid-size venues, adds horns
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                10-piece
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                $12,000 – $14,000
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.6rem' }}>
                Ballrooms, full horn section, 150+ guests
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.6rem' }}>12-piece</td>
              <td style={{ padding: '0.6rem' }}>$14,000 and up</td>
              <td style={{ padding: '0.6rem' }}>
                Grand rooms, ceremony and cocktail add-ons
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Add a ceremony trio, a cocktail-hour set, or a longer reception and you
        move up from wherever your band size starts. For a custom number on your
        date,{' '}
        <Link href="/contact">tell us about your wedding</Link> and we&apos;ll
        send a written package.
      </p>

      <h2 className="major">Boutique Band vs Corporate Agency</h2>
      <p>
        This is where couples overpay without knowing it. There are two ways to
        book a wedding band in New York.
      </p>
      <p>
        A corporate agency runs a booking desk. You talk to a salesperson, not a
        musician. The agency takes a cut on top of the band fee, and that markup
        can run 15 to 30 percent. You often don&apos;t meet the bandleader until
        close to the date, and the person who sold you the band isn&apos;t the
        person standing in front of your guests.
      </p>
      <p>
        We run the boutique model. You book the band directly. You work with me,
        the bandleader, from the first call through your first dance. There&apos;s
        no desk between us and no markup on top. The money goes to the players on
        stage, and you have one real point of contact who knows your timeline,
        your must-play songs, and your venue.
      </p>
      <p>
        Same caliber of musicians, often a lower number, and a person who picks
        up the phone. That&apos;s the case for booking the band, not an agency.
      </p>

      <h2 className="major">What You&apos;re Actually Paying For</h2>
      <p>
        Ten thousand dollars for a few hours can sound steep until you see what
        goes into it. The fee covers 6 to 12 professional musicians, many of whom
        have recorded on hit albums and toured with major artists. It covers a
        pro sound system tuned to your room, an MC to run the reception, setup
        and breakdown, and travel.
      </p>
      <p>
        It also covers experience you can&apos;t fake. We&apos;re a 5-time
        WeddingWire Couples&apos; Choice band with a 5.0 rating, and we&apos;ve
        played rooms like the Lighthouse at Chelsea Piers and The Rockleigh
        enough times to know how each one sounds before we load in. That
        instinct, reading a room and keeping a dance floor packed, is the part
        you remember a year later.
      </p>

      <h2 className="major">Common Questions Couples Ask Before Booking</h2>
      <p>
        Here are the objections I hear most, answered straight.
      </p>
      <ul>
        <li>
          <strong>&quot;Isn&apos;t a DJ way cheaper?&quot;</strong> Yes, a DJ
          costs less. A live band with horns and two singers is a different
          experience. Plenty of couples do both: a DJ for late-night, a band for
          the main event. If budget is tight, a 6-piece gives you a live band at
          the floor of the range.
        </li>
        <li>
          <strong>&quot;Can we fit a band in our budget?&quot;</strong> Often,
          yes. Start with a 6-piece, keep the reception to four hours, and skip
          the ceremony add-on. That&apos;s how you land near $8,000 with a real
          live band.
        </li>
        <li>
          <strong>&quot;What if we go over on time?&quot;</strong> Overtime is
          quoted in the contract, so you decide in the moment without a surprise
          bill later.
        </li>
        <li>
          <strong>&quot;Do you learn our songs?&quot;</strong> Yes. Your first
          dance and the songs that matter to you get learned and rehearsed. We
          build the setlist around your night.
        </li>
        <li>
          <strong>&quot;How far ahead do we book?&quot;</strong> Prime Saturdays
          go 9 to 14 months out. If your date is set, reach out early so we can
          hold it.
        </li>
      </ul>

      <h2 className="major">Where We Play</h2>
      <p>
        We&apos;re a live wedding band across the whole New York metro. Read more
        about pricing and packages on our{' '}
        <Link href="/wedding-bands-nyc">NYC wedding band page</Link>, or by area
        in{' '}
        <Link href="/manhattan-wedding-band">Manhattan</Link>,{' '}
        <Link href="/brooklyn-wedding-bands">Brooklyn</Link>, and{' '}
        <Link href="/long-island-wedding-band">Long Island</Link>. Every room is
        different, and after a decade of NYC weddings we know how to make each one
        sound its best.
      </p>

      <h2 className="major">Frequently Asked Questions</h2>
      <div style={{ marginLeft: '2%' }}>
        {costFaqs.map((f) => (
          <details key={f.q} style={{ marginBottom: '0.75rem' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              {f.q}
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <h2 className="major">Check Your Date</h2>
      <p>
        If your date&apos;s set, the next step is simple. Tell us the venue, the
        guest count, and the vibe you&apos;re after, and we&apos;ll send a written
        package with a real number. No booking desk, no pressure. Just a
        conversation with the bandleader.
      </p>
      <ContactUs />
      <Link href="/blog" className="button">
        Back to Blog
      </Link>
    </>
  )
}
