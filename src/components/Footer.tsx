import React from 'react'
import Link from 'next/link'
import CoupleChoice2018 from '@/optimized-images/wedding-wire-couples-choice-2018.png'
import CoupleChoice2020 from '@/optimized-images/wedding-wire-couples-choice-2020.png'
import CoupleChoice2021 from '@/optimized-images/wedding-wire-couples-choice-2021.png'
import CoupleChoice2022 from '@/optimized-images/wedding-wire-couples-choice-2022.png'
import CoupleChoice2023 from '@/optimized-images/wedding-wire-couples-choice-2023.png'
import { getImageSrc } from '@/lib/image'

export default function Footer() {
  return (
    <footer id="footer">
      <a
        href="https://www.instagram.com/blueavenuegroove/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Blue Avenue Groove on Instagram"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'lightblue',
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="30"
          height="30"
          fill="darkred"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
        >
          <path d="M32 12.1c6.5 0 7.3 0 9.8.1 2.4.1 3.7.5 4.6.9 1.2.4 2 1 2.9 1.9.9.9 1.4 1.7 1.9 2.9.3.9.8 2.2.9 4.6.1 2.6.1 3.3.1 9.8s0 7.3-.1 9.8c-.1 2.4-.5 3.7-.9 4.6-.4 1.2-1 2-1.9 2.9-.9.9-1.7 1.4-2.9 1.9-.9.3-2.2.8-4.6.9-2.6.1-3.3.1-9.8.1s-7.3 0-9.8-.1c-2.4-.1-3.7-.5-4.6-.9-1.2-.4-2-1-2.9-1.9-.9-.9-1.4-1.7-1.9-2.9-.3-.9-.8-2.2-.9-4.6-.1-2.6-.1-3.3-.1-9.8s0-7.3.1-9.8c.1-2.4.5-3.7.9-4.6.4-1.2 1-2 1.9-2.9.9-.9 1.7-1.4 2.9-1.9.9-.3 2.2-.8 4.6-.9 2.5-.1 3.3-.1 9.8-.1zm0-4.4c-6.6 0-7.5 0-10.1.1-2.6.1-4.4.5-6 1.1-1.6.6-3 1.5-4.4 2.9-1.4 1.4-2.3 2.7-2.9 4.4-.6 1.5-1 3.4-1.1 6-.1 2.6-.1 3.5-.1 10.1s0 7.5.1 10.1c.1 2.6.5 4.4 1.1 6 .6 1.6 1.5 3 2.9 4.4 1.4 1.4 2.7 2.3 4.4 2.9 1.5.6 3.4 1 6 1.1 2.6.1 3.5.1 10.1.1s7.5 0 10.1-.1c2.6-.1 4.4-.5 6-1.1 1.6-.6 3-1.5 4.4-2.9 1.4-1.4 2.3-2.7 2.9-4.4.6-1.5 1-3.4 1.1-6 .1-2.6.1-3.5.1-10.1s0-7.5-.1-10.1c-.1-2.6-.5-4.4-1.1-6-.6-1.6-1.5-3-2.9-4.4-1.4-1.4-2.7-2.3-4.4-2.9-1.5-.6-3.4-1-6-1.1-2.6-.1-3.5-.1-10.1-.1z" />
          <path d="M32 20.4a11.6 11.6 0 1 0 0 23.2 11.6 11.6 0 0 0 0-23.2zm0 19.1a7.5 7.5 0 1 1 0-15.1 7.5 7.5 0 0 1 0 15.1z" />
          <circle cx="44.2" cy="19.8" r="2.7" />
        </svg>
        <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
          Follow Blue Avenue Groove on Instagram
        </span>
      </a>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'nowrap', marginTop: '0.75rem' }}>
        <img
          src={getImageSrc(CoupleChoice2018)}
          alt="NY Wedding band award 2018"
          style={{ width: 80, maxWidth: '18%', height: 'auto' }}
          loading="lazy"
        />
        <img
          src={getImageSrc(CoupleChoice2020)}
          alt="NY Wedding band award 2020"
          style={{ width: 80, maxWidth: '18%', height: 'auto' }}
          loading="lazy"
        />
        <img
          src={getImageSrc(CoupleChoice2021)}
          alt="NY Wedding band award 2021"
          style={{ width: 80, maxWidth: '18%', height: 'auto' }}
          loading="lazy"
        />
        <img
          src={getImageSrc(CoupleChoice2022)}
          alt="NY Wedding band award 2022"
          style={{ width: 80, maxWidth: '18%', height: 'auto' }}
          loading="lazy"
        />
        <img
          src={getImageSrc(CoupleChoice2023)}
          alt="NY Wedding band award 2023"
          style={{ width: 80, maxWidth: '18%', height: 'auto' }}
          loading="lazy"
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/wedding-bands-nyc">NYC Weddings</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/brooklyn-wedding-bands">Brooklyn Weddings</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/wedding-band-song-list">Song List</Link>
      </div>
      <div>
        <Link href="/blog">Wedding Planning Tips & Advice</Link>
      </div>
    </footer>
  )
}
