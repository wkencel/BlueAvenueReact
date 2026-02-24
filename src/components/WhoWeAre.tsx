'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Will1 from '@/optimized-images/WillK.headshot_1.webp'
import Pam1 from '@/optimized-images/pam1.webp'
import BandPhoto from '@/optimized-images/BlueAvenueCCphoto.webp'
import { getImageSrc } from '@/lib/image'

const LightYouTubeEmbed = dynamic(
  () => import('@/components/YoutubeLiteComponent'),
  { ssr: false }
)

export default function WhoWeAre() {
  return (
    <>
      <h2 className="major">Who We Are</h2>
      <span className="image main"></span>
      <p>
        We believe in weddings without the cheese. We believe in music as a form
        of expression that connects us together. It&apos;s brought each of us
        from different walks of life to make up the family we have in Blue Ave
        Groove today.
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
        style={{ borderRadius: '10px' }}
      />
      <br />
      <br />
      <h3>
        <u>See what the band&apos;s been up to</u>
      </h3>
      <br />
      <h4>Smooth Vibes from Bk with Sami</h4>
      <LightYouTubeEmbed id="pM75HyKUNEc" />
      <br />
      <br />
      <br />
      <h4>Live from Phil&apos;s apartment</h4>
      <LightYouTubeEmbed id="OxSzSZQMfPA" />
      <br />
      <br />
      <br />
      <h4>From the Beat Lab with Syd</h4>
      <LightYouTubeEmbed id="3FNJFJpK1CU" />
      <br />
      <br />
      <br />
      <h4>
        Ben, Professor of Sound, building a vibe w/ his fiance, Caroline
      </h4>
      <LightYouTubeEmbed id="bUxmcNQR6pg" />
      <br />
      <br />
      <br />
      <br />
      <h1>Leadership</h1>
      <br />
      <br />
      <div className="Pam" style={{ marginBottom: 32 }}>
        <img src={getImageSrc(Pam1)} alt="Pam Steebler" width="320px" />
        <h2>COO - Pam Steebler</h2>
        <p>
          Dedicated to providing the best user experience from the time you
          inquire to the time we make your wedding a blast
        </p>
      </div>
      <div className="Will">
        <a href="https://willkencelhome.io">
          <img src={getImageSrc(Will1)} alt="Will Kencel" width="320px" />
        </a>
        <h2>CTO - Will Kencel</h2>
        <p>
          Original founder and bassist. Guiding Blue Avenue into the next decade
          by integrating tech to create an incredible user experience
        </p>
      </div>
    </>
  )
}
