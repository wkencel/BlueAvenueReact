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
          <p>Bringing people together</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/wedding-event-services">Events</Link>
          </li>
          <li>
            <Link href="/media">Media</Link>
          </li>
          <li>
            <Link href="/about">People</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
