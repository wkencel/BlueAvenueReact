'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CoupleChoice2018 from '@/optimized-images/wwCouplesChoice.2018.png'
import CoupleChoice2020 from '@/optimized-images/wwCouplesChoice.2020.png'
import CoupleChoice2021 from '@/optimized-images/wwCouplesChoice.2021.png'
import CoupleChoice2022 from '@/optimized-images/wwCouplesChoice.2022.png'
import { getImageSrc } from '@/lib/image'

const SocialIcon = dynamic(
  () => import('react-social-icons').then((mod) => ({ default: mod.SocialIcon })),
  { ssr: false }
)

export default function Footer({ timeout }: { timeout?: boolean }) {
  return (
    <footer id="footer" style={timeout ? { display: 'none' } : {}}>
      <SocialIcon
        url="https://www.instagram.com/blueavenuegroove/"
        bgColor="lightBlue"
        fgColor="darkRed"
      />
      <br />
      <br />
      <img
        src={getImageSrc(CoupleChoice2018)}
        alt="NY Wedding band award 2018"
        width="80px"
      />
      <img
        src={getImageSrc(CoupleChoice2020)}
        alt="NY Wedding band award 2020"
        width="80px"
        style={{ marginLeft: 10 }}
      />
      <img
        src={getImageSrc(CoupleChoice2021)}
        alt="NY Wedding band award 2021"
        width="80px"
        style={{ marginLeft: 10 }}
      />
      <img
        src={getImageSrc(CoupleChoice2022)}
        alt="NY Wedding band award 2022"
        width="80px"
        style={{ marginLeft: 10 }}
      />
      <br />
      <div style={{ textAlign: 'center' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/wedding-bands-nyc">NYC Weddings</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/brooklyn-wedding-bands">Brooklyn Weddings</Link>
      </div>
      <div>
        <Link href="/blog">Find more wedding info on our Blog</Link>
      </div>
    </footer>
  )
}
