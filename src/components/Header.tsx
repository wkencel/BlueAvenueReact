import React from 'react'
import Link from 'next/link'
import Buildings from '@/optimized-images/nyc-skyline.webp'
import { getImageSrc } from '@/lib/image'

export default function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img
          src={getImageSrc(Buildings)}
          width="200%"
          style={{ marginTop: '-55%', marginLeft: '-50%' }}
          alt="Blue Avenue Groove logo NYC"
        />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Blue Avenue Groove</h1>
          <p>NYC&apos;s not-your-typical live wedding band</p>
          <p>6&times; WeddingWire winners &middot; funk, soul &amp; Motown</p>
          <ul className="actions">
            <li>
              <Link href="/contact" className="button special">
                Check Your Date
              </Link>
            </li>
            <li>
              <Link href="/media" className="button">
                Watch Us Live
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/wedding-bands-nyc">Weddings</Link>
          </li>
          <li>
            <Link href="/media">Watch</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
