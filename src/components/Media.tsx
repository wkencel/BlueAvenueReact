'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import SamiAndPhil from '@/optimized-images/couple-manhattan-wedding.webp'
import Pam from '@/optimized-images/pam-steebler-singer.webp'
import GirlDancing from '@/optimized-images/girl-dancing-nyc-wedding.webp'
import OldGuy from '@/optimized-images/guest-dancing-wedding.webp'
import { getImageSrc } from '@/lib/image'

const LightYouTubeEmbed = dynamic(
  () => import('@/components/YoutubeLiteComponent'),
  { ssr: false }
)

export default function Media() {
  return (
    <>
      <h1 className="major">Media</h1>
      <span className="image main"></span>
      <h2>Check out our sound</h2>
      <br />
      <div>
        <div>
          <h3>Blue Avenue Groove Promo 2023</h3>
          <LightYouTubeEmbed id="Kt-j9h9qatk" />
        </div>
        <br />
        <br />
        <div>
          <h3>Move on Up - Curtis Mayfield -- live</h3>
          <LightYouTubeEmbed id="NtZLBObQ3PU" />
        </div>
        <br />
        <br />
        <div>
          <h3>Use me - Bill Withers -- live</h3>
          <LightYouTubeEmbed id="jw4zzH1DVM0" />
        </div>
        <br />
        <br />
        <div>
          <h3>As It Was/Take On Me -Harry Styles/A-Ha</h3>
          <LightYouTubeEmbed id="jVUzk9YT06w" />
        </div>
        <br />
        <br />
        <div>
          <h3>About Damn Time -Lizzo</h3>
          <LightYouTubeEmbed id="qQw_oftZmzI" />
        </div>
        <br />
        <br />
        <div>
          <h3>Promo Vid</h3>
          <LightYouTubeEmbed id="Kh6JXWRmLWE" />
        </div>
        <br />
        <br />
        <h3>Snaps from our shows</h3>
        <br />
        <img
          src={getImageSrc(GirlDancing)}
          alt="Girl Dancing at NYC wedding"
          width="100%"
          loading="lazy"
          style={{ borderRadius: '10px' }}
        />
        <br />
        <br />
        <img
          src={getImageSrc(OldGuy)}
          alt="Guy dancing at NYC wedding"
          width="100%"
          loading="lazy"
          style={{ borderRadius: '10px' }}
        />
        <br />
        <br />
        <img
          src={getImageSrc(SamiAndPhil)}
          alt="Sami Stevens and Phil Faconti"
          width="100%"
          loading="lazy"
          style={{ borderRadius: '10px' }}
        />
        <br />
        <br />
        <img
          src={getImageSrc(Pam)}
          alt="Pam"
          width="100%"
          loading="lazy"
          style={{ borderRadius: '10px' }}
        />
      </div>
    </>
  )
}
