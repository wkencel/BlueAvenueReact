'use client'

import React from 'react'
import MediaCard from '@/components/MediaCard'
import SamiAndPhil from '@/optimized-images/couple-manhattan-wedding.webp'
import Pam from '@/optimized-images/pam-steebler-singer.webp'
import GirlDancing from '@/optimized-images/girl-dancing-nyc-wedding.webp'
import OldGuy from '@/optimized-images/guest-dancing-wedding.webp'
import { getImageSrc } from '@/lib/image'

const videos = [
  { title: 'Blue Avenue Groove Promo', videoId: 'Kt-j9h9qatk' },
  { title: 'Move on Up - Curtis Mayfield -- live', videoId: 'NtZLBObQ3PU' },
  { title: 'Use me - Bill Withers -- live', videoId: 'jw4zzH1DVM0' },
  { title: 'As It Was/Take On Me -Harry Styles/A-Ha', videoId: 'jVUzk9YT06w' },
  { title: 'About Damn Time -Lizzo', videoId: 'qQw_oftZmzI' },
  { title: 'Promo Vid 2', videoId: 'Kh6JXWRmLWE' },
]

export default function Media() {
  return (
    <>
      <h1 className="major">Media</h1>
      <span className="image main"></span>
      <h2>Check out our sound</h2>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {videos.map((video) => (
          <MediaCard
            key={video.videoId}
            title={video.title}
            videoId={video.videoId}
          />
        ))}
      </div>
      <br />
      <h3>Snaps from our shows</h3>
      <br />
      <img
        src={getImageSrc(GirlDancing)}
        alt="Girl Dancing at NYC wedding"
        width={GirlDancing.width}
        height={GirlDancing.height}
        loading="lazy"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      <br />
      <br />
      <img
        src={getImageSrc(OldGuy)}
        alt="Guy dancing at NYC wedding"
        width={OldGuy.width}
        height={OldGuy.height}
        loading="lazy"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      <br />
      <br />
      <img
        src={getImageSrc(SamiAndPhil)}
        alt="Sami Stevens and Phil Faconti"
        width={SamiAndPhil.width}
        height={SamiAndPhil.height}
        loading="lazy"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      <br />
      <br />
      <img
        src={getImageSrc(Pam)}
        alt="Pam"
        width={Pam.width}
        height={Pam.height}
        loading="lazy"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </>
  )
}
