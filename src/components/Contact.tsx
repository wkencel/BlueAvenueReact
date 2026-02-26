'use client'

import React, { useState } from 'react'
import ContactUs from './ContactUs'
import PriceCalculator from './PriceCalculator'
import PurchaseRequest from './PurchaseRequest'

export default function ContactForm() {
  const [showCalculator, setShowCalculator] = useState(false)
  const [showPurchaseRequest, setShowPurchaseRequest] = useState(false)

  return (
    <>
      <div>
        <p>Tell us about your big day and we&apos;ll put together a custom quote for you. We&apos;d love to hear your vision!</p>
        <ul className="icons">
          <ContactUs />
          <nav>
            <ul>
              <h3>See how much it costs</h3>
              <li>
                <button onClick={() => setShowCalculator(!showCalculator)}>
                  Price Calculator
                </button>
              </li>
              <br />
              {showCalculator && <PriceCalculator />}
              <br />
              <h3>Make your booking</h3>
              <li>
                <button
                  onClick={() => setShowPurchaseRequest(!showPurchaseRequest)}
                >
                  Purchase Request
                </button>
              </li>
            </ul>
          </nav>
          {showPurchaseRequest && <PurchaseRequest />}
          <li>
            <a
              href="https://www.instagram.com/blueavenuegroove/"
              className="icon fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/BlueAvenueGroove/"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
