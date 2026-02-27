import React from 'react'
import { reviews } from '@/data/reviews'

export default function Reviews() {
  return (
    <>
      <h3 className="major">See what past couples have said</h3>
      {reviews.map((review, index) => (
        <blockquote key={index} className="review-card">
          <p>{review.body}</p>
          <cite>&mdash; {review.author}</cite>
        </blockquote>
      ))}
      <h3 className="major">Check out more reviews</h3>
      <a href="https://www.weddingwire.com/reviews/blue-avenue-groove-brooklyn/0da4ea28bbbcfffe.html" className="button">
        On Wedding Wire
      </a>
      &nbsp;&nbsp;
      <a href="https://www.theknot.com/marketplace/blue-avenue-groove-brooklyn-ny-964870" className="button">
        On The Knot
      </a>
    </>
  )
}
