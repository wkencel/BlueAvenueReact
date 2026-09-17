import type { Metadata } from 'next'
import HomeV2 from '@/components/home2/HomeV2'

export const metadata: Metadata = {
  title: 'Homepage Preview',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/home-preview/',
  },
}

export default function HomePreviewPage() {
  return <HomeV2 />
}
