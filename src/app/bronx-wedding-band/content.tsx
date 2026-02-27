import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function BronxContent() {
  return (
    <>
      <h1>Bronx Live Wedding Band</h1>
      <div style={{ marginLeft: '2%' }}>
        <p>
          Bronx weddings hit different. The energy is personal.
          Tight-knit families who show up ready to celebrate, dance floors that
          fill up early and stay packed, and a vibe that&apos;s more house
          party than formal affair. From waterfront spots on City Island to
          grand halls in Pelham Bay, we&apos;ve been part of that energy for
          over a decade.
        </p>
      </div>
      <img
        src="/images/weddingPhotos/nyc-wedding-reception-2.jpeg"
        alt="Blue Avenue Groove performing live at a Bronx wedding reception"
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
      <h2>Where We Play in the Bronx</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          We&apos;ve played The New York Botanical Garden and venues throughout
          the borough, from the waterfront on City Island to the grand halls
          in Pelham Bay and Throggs Neck to the quieter rooms up in Riverdale.
          The Bronx has a wide range of wedding venues, from Marina del Rey
          to Villa Barone Hilltop Manor to Eastwood Manor, and each one gets a
          different approach because each one sounds and feels different.
        </p>
        <p>
          Our 5 to 12 piece band covers everything from ceremony to last call.
          Pro audio, MC services, cocktail hour, all included.{' '}
          <Link href="/wedding-event-services">Full details on our services page.</Link>
        </p>
      </div>
      <br />
      <h2>The Right Band for a Bronx Dance Floor</h2>
      <div style={{ marginLeft: '2%' }}>
        <p>
          A Bronx dance floor doesn&apos;t need convincing. The guests are
          ready. What they need is a band that can match their energy and push
          it higher. One that knows when to lock into a groove and ride
          it, when to switch gears, and when to bring the whole room together
          for a moment.
        </p>
        <p>
          We play Funk, Soul, Motown, Pop, Rock, and R&amp;B. Our musicians
          have toured with major recording artists and trained at top
          conservatories. But the thing that matters most on a Bronx dance
          floor is feel. We&apos;ve got that.
        </p>
      </div>
      <br />
      <h2>Book Blue Avenue Groove for Your Bronx Wedding</h2>
      <p>
        Ready to lock in your date? Drop us a message below and let&apos;s
        talk about your night.
      </p>
      <ContactUs />
      <Link href="/" className="button">Back to Home</Link>
    </>
  )
}
