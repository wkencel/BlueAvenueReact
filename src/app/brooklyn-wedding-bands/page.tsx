import type { Metadata } from 'next'
import BrooklynWeddingsContent from './content'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Award-Winning Brooklyn Wedding Band',
  description:
    'Brooklyn wedding band with 10+ years performing at The Green Building, 501 Union, Liberty Warehouse, W Loft and venues across Brooklyn. 6-12 piece band playing Funk, Soul, Pop, R&B and Motown.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/brooklyn-wedding-bands/',
  },
}

export default function BrooklynWeddingsPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <BrooklynWeddingsContent />
      </div>
      <SiteFooter />
    </div>
  )
}
