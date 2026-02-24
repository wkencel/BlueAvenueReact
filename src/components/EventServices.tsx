import React from 'react'
import Link from 'next/link'
import BrideAndGroom from '@/optimized-images/Leibel-Band-2.webp'
import { getImageSrc } from '@/lib/image'

export default function EventServices() {
  return (
    <>
      <h2 className="major">Event Services</h2>
      <img
        src={getImageSrc(BrideAndGroom)}
        alt="Happy Bride and Groom"
        width="100%"
        style={{ borderRadius: '10px' }}
      />
      <p>
        Blue Avenue Groove brings music from the soul to your celebration. As one of NYC's premier
        wedding bands, we deliver live music that gets your guests on their feet and creates an
        unforgettable atmosphere, from the ceremony to the last dance of the reception.
      </p>

      <h2 className="major">Reception Band</h2>
      <p>
        This is where the party happens. Our 6 to 12 piece band brings four hours of nonstop energy
        to your reception: funky grooves, soulful ballads, and everything in between. We read the
        room and keep the dance floor packed all night so you and your guests can get your groove on.
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
        vibes: soulful jazz, soft pop, and easy conversation starters. Choose the size and
        style that fits your vision:
      </p>
      <ul>
        <li><strong>Solo</strong> — Keys or vocals/keys. Soft jazz, soulful background — Carole King meets Regina Spektor.</li>
        <li><strong>Duo</strong> — Vocals/keys, vocals/guitar, or sax/keys. Jazz ballads, soft pop, or folk/indie.</li>
        <li><strong>Trio</strong> — Our favorite: vocals/sax/keys for high-caliber soulful jazz with great chemistry. Also sax/keys/drums or sax/keys/bass for that NYC jazz scene vibe.</li>
        <li><strong>Quartet</strong> — Vocals/guitar/bass/drums (indie/folk — think The Band, The Beatles) or vocals/keys/bass/drums (softer jazz quartet).</li>
      </ul>

      <h2 className="major">Ceremony Music</h2>
      <p>
        The walk down the aisle is one of the most emotional moments of your day. Our ceremony
        musicians provide a live, intimate soundtrack that makes it feel as special as it is.
      </p>
      <ul>
        <li><strong>Solo</strong> — Keys (traditional, bridal march) or guitar (Van Morrison, Beatles instrumentals).</li>
        <li><strong>Duo</strong> — Vocals/keys (traditional with a vocalist's touch) or vocals/guitar (folk/indie feel).</li>
      </ul>

      <a href="https://docs.google.com/spreadsheets/d/1U4fJlgAtdRjQKzBbRz1U-c0-5hjIY9OVANt_CEp53YM/edit?usp=sharing">
        <button>Repertoire</button>
      </a>
      <hr />
      <p><em>List of booked dates coming soon &mdash; please inquire about dates directly.</em></p>
      <p>
        <Link href="/contact" className="button special">Contact Us for Pricing &amp; Booking</Link>
      </p>
    </>
  )
}
