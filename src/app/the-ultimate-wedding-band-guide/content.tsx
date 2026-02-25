'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

const pageStyles = {
  marginLeft: '2%',
  fontFamily: "'Lora', serif",
  color: '#333',
}

const headingStyles = {
  fontFamily: "'Playfair Display', serif",
  color: '#5DADE2',
}

const subHeadingStyles = {
  fontFamily: "'Playfair Display', serif",
  color: '#B2BEC3',
}

const h2Styles = {
  color: '#8094a0',
  fontFamily: "'Merriweather', serif",
}

const paragraphStyles: React.CSSProperties = {
  lineHeight: '1.75',
  marginBottom: '20px',
  color: '#6c757d',
  fontSize: '20px',
  fontFamily: "'Lora', serif",
}

const linkStyle = {
  fontSize: '32px',
  fontWeight: '600' as const,
  marginLeft: '10px',
  textDecoration: 'none',
  color: '#6c757d',
}

const strongTagStyle = {
  color: '#8094a0',
  fontSize: '20px',
}

export default function GuideContent() {
  return (
    <div style={pageStyles}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={headingStyles}>The Ultimate Wedding Band Guide</h1>
        <h2 style={subHeadingStyles}>
          Selecting the Perfect Soundtrack for Your Big Day
        </h2>
        <br />
        <img
          src="/images/blogImages/the-ultimate-wedding-band-guide_img1.webp"
          alt="Ultimate wedding entertainment guide image"
          width="70%"
          loading="lazy"
          style={{ borderRadius: '10px' }}
        />
        <br />
        <br />
        <p style={{ ...paragraphStyles, fontSize: '22px' }}>
          Planning your wedding day includes creating a magical musical
          atmosphere.
        </p>
        <p style={{ ...paragraphStyles, fontSize: '22px' }}>
          Our Ultimate Wedding Band Guide is here to help you ensure your musical
          backdrop is as perfect as your love story.
        </p>
      </div>
      <br />
      <br />

      <h2 style={h2Styles}>Introduction:</h2>
      <p style={paragraphStyles}>
        Your wedding day: a symphony of love, joy, and celebration. And what
        better way to underscore this beautiful harmony than with the perfect
        wedding band? Music does more than fill the air with melody; it enhances
        moments, evokes emotions, and creates memories that last a lifetime.
      </p>

      <br />
      <h2 style={h2Styles}>Understanding Your Musical Taste and Theme</h2>
      <p style={paragraphStyles}>
        Before you start your search, have a heart-to-heart about your musical
        preferences. Are you fans of classic hits, or is your playlist more about
        the latest chart-toppers? Your chosen genre will set the tone for the
        entire celebration.
      </p>

      <br />
      <h2 style={h2Styles}>
        Key Considerations When Choosing Your Wedding Band
      </h2>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Repertoire Range:</strong> Ensure the
        band&apos;s playlist is versatile, catering to all your favorite tunes.
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Band Dynamics:</strong> The size of the
        band is crucial. Think about your venue&apos;s space, the number of
        guests, and the intimacy you desire.
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Experience and Professionalism:</strong> A
        band experienced in weddings knows how to set the pace, interact with
        guests, and keep the party going.
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Personalization and Flexibility:</strong>{' '}
        Can the band customize their performance to your taste?
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Logistical Details:</strong> Consider the
        practicalities—sound checks, equipment, space requirements, and breaks.
      </p>

      <img
        src="/images/blogImages/the-ultimate-wedding-band-guide_img5.jpeg"
        alt="Ultimate wedding entertainment guide image 2"
        width="60%"
        loading="lazy"
        style={{ borderRadius: '10px' }}
      />
      <p></p>
      <h2 style={h2Styles}>
        Making the Most of Your Wedding Band Experience
      </h2>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Plan Ahead:</strong> Popular bands book up
        fast, especially during peak wedding season.
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Communication is Key:</strong> Share your
        vision, favorite songs, and any no-play tunes with the band.
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Think Beyond the Playlist:</strong> A
        great band does more than play music; they create an atmosphere.
      </p>
      <p style={paragraphStyles}>
        <strong style={strongTagStyle}>Backup Plans:</strong> Ensure the band has
        a contingency plan for unexpected situations.
      </p>

      <br />
      <h2 style={h2Styles}>Encore: Wrapping It Up</h2>
      <p style={paragraphStyles}>
        Choosing the right wedding band is about striking a chord that resonates
        with your personal love story and elevating your celebration to an
        unforgettable experience.
      </p>
      <p style={paragraphStyles}>
        As you embark on this harmonious journey, remember that music is more than
        just background noise—it&apos;s the heartbeat of your celebration.
      </p>

      <br />
      <h2 style={h2Styles}>Book Your Ultimate Wedding Band Today:</h2>
      <p style={paragraphStyles}>
        Ready to experience the best of Brooklyn? Reach out to us via our contact
        form, email, or phone. Let&apos;s make your wedding day as unique and
        vibrant as Brooklyn itself!
      </p>
      <h3>Send us a message to Book</h3>
      <ContactUs />

      <Link href="/" style={linkStyle}>
        Home
      </Link>
    </div>
  )
}
