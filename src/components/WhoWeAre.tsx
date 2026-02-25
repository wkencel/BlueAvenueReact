'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Will1 from '@/optimized-images/will-kencel-headshot.webp'
import Pam1 from '@/optimized-images/pam-steebler-headshot.webp'
import BandPhoto from '@/optimized-images/blue-avenue-groove-band.webp'
import { getImageSrc } from '@/lib/image'

const LightYouTubeEmbed = dynamic(
  () => import('@/components/YoutubeLiteComponent'),
  { ssr: false }
)

export default function WhoWeAre() {
  return (
    <>
      <h2 className="major">Celebrating Your Story in Sound</h2>
      <p>
        We believe in weddings without the cheese. With over 10 years of
        experience and a catalog of more than 200 songs spanning Pop, Soul,
        Top 40, Motown, Rock and Jazz, Blue Avenue Groove has something for
        every couple&apos;s special day. Our energy is dedicated to matching you
        and your guests&apos; vibe on the dance floor for a wedding that&apos;ll
        be talked about for ages.
      </p>
      <p>
        Like anything we do, we strive not to &quot;go through the motions&quot;
        with each song, but to give you part of us. We&apos;re building a better
        version of what it means to be a &quot;wedding band&quot;: filled with
        music from the soul, bringing friends and family together for the
        experience of a lifetime.
      </p>
      <img
        src={getImageSrc(BandPhoto)}
        alt="Blue Avenue Groove"
        width="100%"
        loading="lazy"
        style={{ borderRadius: '10px' }}
      />

      <h3 className="major" style={{ marginTop: '2.5rem' }}>
        See what the band&apos;s been up to
      </h3>

      <div className="video-item">
        <h4>Smooth Vibes from Bk with Sami</h4>
        <LightYouTubeEmbed id="pM75HyKUNEc" />
      </div>

      <div className="video-item">
        <h4>Live from Phil&apos;s apartment</h4>
        <LightYouTubeEmbed id="OxSzSZQMfPA" />
      </div>

      <div className="video-item">
        <h4>From the Beat Lab with Syd</h4>
        <LightYouTubeEmbed id="3FNJFJpK1CU" />
      </div>

      <div className="video-item">
        <h4>
          Ben, Professor of Sound, building a vibe w/ his fiance, Caroline
        </h4>
        <LightYouTubeEmbed id="bUxmcNQR6pg" />
      </div>

      <h2 className="major" style={{ marginTop: '2.5rem' }}>
        Leadership
      </h2>

      <div className="leader-card">
        <img src={getImageSrc(Pam1)} alt="Pam Steebler" loading="lazy" />
        <h3>COO - Pam Steebler</h3>
        <p>
          Dedicated to providing the best user experience from the time you
          inquire to the time we make your wedding a blast
        </p>
      </div>

      <div className="leader-card">
        <a href="https://willkencelhome.io">
          <img src={getImageSrc(Will1)} alt="Will Kencel" loading="lazy" />
        </a>
        <h3>CTO - Will Kencel</h3>
        <p>
          Original founder and bassist. Guiding Blue Avenue into the next decade
          by integrating tech to create an incredible user experience
        </p>
      </div>
    </>
  )
}
