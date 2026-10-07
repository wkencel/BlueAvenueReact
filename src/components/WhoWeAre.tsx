'use client'

import React from 'react'
import MediaCard from '@/components/MediaCard'
import Will1 from '@/optimized-images/will-kencel-headshot.webp'
import Pam1 from '@/optimized-images/pam-steebler-headshot.webp'
import BandPhoto from '@/optimized-images/blue-avenue-groove-band.webp'
import { getImageSrc } from '@/lib/image'

export default function WhoWeAre() {
  return (
    <>
      <h1 className="major">Meet the band behind Blue Avenue Groove</h1>
      <p>
        We are a funk, soul and Motown band built for one job: keeping a
        wedding dance floor full from the first song to the last. Ten years in,
        with more than 200 songs across Soul, Motown, Pop, R&amp;B, rock and
        jazz, we have played everything from ballrooms at The Plaza and Gotham
        Hall to the Met Museum and the New York Botanical Garden, from lofts
        and tents across all five boroughs to an international stage in Tulum,
        Mexico.
      </p>
      <p>
        Out front are our two lead vocalists, Jonathan and Sami Stevens. One
        couple summed it up in their review: &quot;their two lead singers
        Jonathan and Sami are nothing short of amazing.&quot; Another spent the
        whole night fielding the same question about Sami: &quot;where in the
        world did you find that girl? Her voice is unbelievable.&quot; Behind
        them is a horn-driven rhythm section with sax, trumpet and trombone
        that scales from 6 to 12 pieces to fit your room and your budget.
      </p>
      <p>
        We don&apos;t go through the motions. Every song gets real energy and a
        read on the room, so a five-year-old and a grandparent end up dancing
        at the same time. That is the band people mean when they call us
        &quot;not your typical wedding band.&quot;
      </p>
      <img
        src={getImageSrc(BandPhoto)}
        alt="Blue Avenue Groove"
        width={BandPhoto.width}
        height={BandPhoto.height}
        loading="lazy"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />

      <h2 className="major" style={{ marginTop: '2.5rem' }}>
        See what the band&apos;s been up to
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <MediaCard title="Smooth Vibes from Bk with Sami" videoId="pM75HyKUNEc" />
        <MediaCard title="Live from Phil's apartment" videoId="OxSzSZQMfPA" />
        <MediaCard title="From the Beat Lab with Syd" videoId="3FNJFJpK1CU" />
        <MediaCard title="Ben, Professor of Sound, building a vibe w/ his fiance, Caroline" videoId="bUxmcNQR6pg" />
      </div>

      <h2 className="major" style={{ marginTop: '2.5rem' }}>
        Who you&apos;ll work with
      </h2>
      <p>
        Book us and you work directly with the band, not a corporate agency
        booking desk. That is the whole point, and it&apos;s the thing couples
        tell us made the difference.
      </p>

      <div className="leader-card">
        <img src={getImageSrc(Will1)} alt="Will Kencel, bandleader and bassist" loading="lazy" />
        <h3>Will Kencel · Bandleader &amp; bassist</h3>
        <p>
          Your point of contact from the first email to the last dance. Will
          builds the setlist around your night, learns your special requests,
          and runs the show so you never have to think about the music.
        </p>
      </div>

      <div className="leader-card">
        <img src={getImageSrc(Pam1)} alt="Pam Steebler" loading="lazy" />
        <h3>Pam Steebler · Planning &amp; logistics</h3>
        <p>
          Keeps the details on track from the moment you inquire, so the run of
          show is dialed in long before you walk down the aisle.
        </p>
      </div>
    </>
  )
}
