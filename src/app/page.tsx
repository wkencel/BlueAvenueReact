import type { Metadata } from 'next'
import HomeV2 from '@/components/home2/HomeV2'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/',
  },
}

export default function HomePage() {
  return <HomeV2 />
}
