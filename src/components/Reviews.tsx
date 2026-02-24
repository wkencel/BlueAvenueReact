import React from 'react'
import { reviews } from '@/data/reviews'

export default function Reviews() {
  return (
    <>
      <h3>
        <u>See what past couples have said</u>
      </h3>
      {reviews.map((review, index) => (
        <React.Fragment key={index}>
          <p>
            <i>{review.body}</i>
          </p>
          <p>-{review.author}</p>
        </React.Fragment>
      ))}
      <br />
      <h3>
        <u>Check out more reviews:</u>
      </h3>
      <a href="https://www.weddingwire.com/reviews/blue-avenue-groove-brooklyn/0da4ea28bbbcfffe.html">
        <button>On Wedding Wire</button>
      </a>
      <br />
      <br />
      <a href="https://www.theknot.com/marketplace/blue-avenue-groove-brooklyn-ny-964870">
        <button>On The Knot</button>
      </a>
    </>
  )
}
