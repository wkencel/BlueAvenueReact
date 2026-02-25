import React from 'react'
import Link from 'next/link'
import BrideAndGroom from '@/optimized-images/bride-and-groom-wedding.webp'
import { getImageSrc } from '@/lib/image'

export default function EventServices() {
  return (
    <>
      <h1 className="major">Event Services</h1>
      <img
        src={getImageSrc(BrideAndGroom)}
        alt="Happy Bride and Groom"
        width="100%"
        loading="lazy"
        style={{ borderRadius: '10px' }}
      />
      <p>
        We're not just here to play, we're here to make your night unforgettable. As one of NYC's premier
        wedding bands, we bring the energy that gets your guests moving and keeps them on the dance
        floor from the ceremony to the last song of the night.
      </p>

      <h2 className="major">Reception</h2>
      <p>
        This is where the party happens. Our 6 to 12 piece band brings four hours of nonstop energy
        to your reception: funky grooves, soulful ballads, and everything in between. We keep the
        dance floor packed all night so you and your guests can get your groove on.
      </p>
      <ul>
        <li>Professional audio setup with a dedicated AV engineer</li>
        <li>MC services including announcing dances, cake cutting, toasts, and more</li>
        <li>Up to 3 song requests (most often first dance &amp; parent dances)</li>
        <li>Core lineup: 2 vocals, guitar, keys, bass, drums, expandable with horns (sax, trumpet, trombone)</li>
        <li>Specialties: Funk, Soul, Pop/Top 40, R&amp;B, Rock, Motown</li>
      </ul>

      <h2 className="major">Cocktail Hour</h2>
      <p>
        Set the tone before the party starts. Our cocktail hour ensembles bring warm, sophisticated
        vibes, jazz, soul, soft pop, or whatever fits your crowd. Choose the size that works
        for your venue:
      </p>
      <ul>
        <li><strong>Solo</strong> — Keys or vocals/keys. Great for soft jazz, soulful background music.</li>
        <li><strong>Duo</strong> — Vocals/keys, vocals/guitar, or sax/keys. Think jazz ballads, soft pop, or folk/indie.</li>
        <li><strong>Trio</strong> — Vocals/sax/keys, sax/keys/drums, or sax/keys/bass. Perfect for soulful jazz with great chemistry.</li>
        <li><strong>Quartet</strong> — Vocals/guitar/bass/drums or vocals/keys/bass/drums. Fuller sound for jazz, indie, or folk.</li>
      </ul>

      <h2 className="major">Ceremony Music</h2>
      <p>
        The walk down the aisle is one of the most memorable moments of your day. Our ceremony musicians are there to make that moment land the way it should.
      </p>
      <ul>
        <li><strong>Solo</strong> — Keys (traditional, bridal march) or guitar (Van Morrison, Beatles instrumentals).</li>
        <li><strong>Duo</strong> — Vocals/keys (traditional with a vocalist's touch) or vocals/guitar (folk/indie feel).</li>
      </ul>

      <Link href="/wedding-band-song-list">
        <button>Song List</button>
      </Link>
      <hr />
      <p><em>List of booked dates coming soon &mdash; please inquire about dates directly.</em></p>
      <p>
        <Link href="/contact" className="button special">Contact Us for Pricing &amp; Booking</Link>
      </p>
    </>
  )
}
