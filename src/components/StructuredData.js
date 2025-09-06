import React from "react"
import { Helmet } from "react-helmet"

export const BusinessStructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Blue Avenue Groove",
    "description": "Premier NYC wedding band and event entertainment",
    "url": "https://www.blueavemusic.io",
    "logo": "https://www.blueavemusic.io/logo.jpg",
    "image": "https://www.blueavemusic.io/band-photo.jpg",
    "email": "info@blueavemusic.io",
    "telephone": "857-204-7853",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "sameAs": [
      "https://www.instagram.com/blueavenuegroove",
      "https://www.facebook.com/blueavenuegroove"
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessData)}
      </script>
    </Helmet>
  )
}

export const EventStructuredData = ({ event }) => {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
      "@type": "Place",
      "name": event.location.name,
      "address": event.location.address
    },
    "description": event.description,
    "image": event.image,
    "performer": {
      "@type": "MusicGroup",
      "name": "Blue Avenue Groove"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(eventData)}
      </script>
    </Helmet>
  )
}
