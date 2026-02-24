import React from 'react'

export function BusinessStructuredData() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Blue Avenue Groove',
    description: 'Premier NYC wedding band and event entertainment',
    url: 'https://www.blueavemusic.io',
    logo: 'https://www.blueavemusic.io/logo.jpg',
    image: 'https://www.blueavemusic.io/band-photo.jpg',
    email: 'info@blueavemusic.io',
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
