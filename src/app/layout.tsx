import type { Metadata } from 'next'
import { siteMetadata } from '@/lib/siteMetadata'
import { BusinessStructuredData } from '@/components/StructuredData'
import { Providers } from './providers'
import '@/assets/scss/main.scss'

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: '%s | Blue Avenue Groove',
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: 'Blue Avenue Groove',
    images: [
      {
        url: siteMetadata.image,
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon-32x32.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.social.twitter,
    images: [siteMetadata.image],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BusinessStructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
