import React from 'react'
import { reviews } from '@/data/reviews'

export function BusinessStructuredData() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Blue Avenue Groove',
    description: 'Premier NYC wedding band and event entertainment',
    url: 'https://www.blueavenuegroove.com',
    logo: 'https://www.blueavenuegroove.com/icons/icon-512x512.png',
    image: 'https://www.blueavenuegroove.com/images/blue-avenue-groove-band.webp',
    email: 'info@blueavenuegroove.com',
    telephone: '857-204-7853',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    sameAs: [
      'https://www.instagram.com/blueavenuegroove',
      'https://www.facebook.com/blueavenuegroove',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}

export function EventStructuredData({
  event,
}: {
  event: {
    name: string
    startDate: string
    endDate: string
    location: { name: string; address: string }
    description: string
    image: string
  }
}) {
  const eventData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location.name,
      address: event.location.address,
    },
    description: event.description,
    image: event.image,
    performer: {
      '@type': 'MusicGroup',
      name: 'Blue Avenue Groove',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  )
}

export function ArticleStructuredData({
  title,
  description,
  datePublished,
  url,
}: {
  title: string
  description: string
  datePublished: string
  url: string
}) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    url,
    author: {
      '@type': 'Organization',
      name: 'Blue Avenue Groove',
      url: 'https://www.blueavenuegroove.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blue Avenue Groove',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.blueavenuegroove.com/icons/icon-512x512.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  )
}

export function ReviewsStructuredData() {
  const reviewsData = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Blue Avenue Groove',
    url: 'https://www.blueavenuegroove.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      ratingCount: String(reviews.length),
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      datePublished: r.datePublished,
      reviewBody: r.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsData) }}
    />
  )
}
