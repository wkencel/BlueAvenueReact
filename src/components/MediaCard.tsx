'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const LightYouTubeEmbed = dynamic(
  () => import('@/components/YoutubeLiteComponent'),
  {
    ssr: false,
    loading: () => <div className="shimmer-placeholder" />,
  }
)

type MediaCardProps = {
  title: string
  videoId: string
}

export default function MediaCard({ title, videoId }: MediaCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <LightYouTubeEmbed id={videoId} />
    </div>
  )
}
