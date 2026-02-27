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
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Blue Avenue Groove on Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                verticalAlign: 'middle',
              }}
            >
              <svg viewBox="0 0 64 64" width="30" height="30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path d="M32 12.1c6.5 0 7.3 0 9.8.1 2.4.1 3.7.5 4.6.9 1.2.4 2 1 2.9 1.9.9.9 1.4 1.7 1.9 2.9.3.9.8 2.2.9 4.6.1 2.6.1 3.3.1 9.8s0 7.3-.1 9.8c-.1 2.4-.5 3.7-.9 4.6-.4 1.2-1 2-1.9 2.9-.9.9-1.7 1.4-2.9 1.9-.9.3-2.2.8-4.6.9-2.6.1-3.3.1-9.8.1s-7.3 0-9.8-.1c-2.4-.1-3.7-.5-4.6-.9-1.2-.4-2-1-2.9-1.9-.9-.9-1.4-1.7-1.9-2.9-.3-.9-.8-2.2-.9-4.6-.1-2.6-.1-3.3-.1-9.8s0-7.3.1-9.8c.1-2.4.5-3.7.9-4.6.4-1.2 1-2 1.9-2.9.9-.9 1.7-1.4 2.9-1.9.9-.3 2.2-.8 4.6-.9 2.5-.1 3.3-.1 9.8-.1zm0-4.4c-6.6 0-7.5 0-10.1.1-2.6.1-4.4.5-6 1.1-1.6.6-3 1.5-4.4 2.9-1.4 1.4-2.3 2.7-2.9 4.4-.6 1.5-1 3.4-1.1 6-.1 2.6-.1 3.5-.1 10.1s0 7.5.1 10.1c.1 2.6.5 4.4 1.1 6 .6 1.6 1.5 3 2.9 4.4 1.4 1.4 2.7 2.3 4.4 2.9 1.5.6 3.4 1 6 1.1 2.6.1 3.5.1 10.1.1s7.5 0 10.1-.1c2.6-.1 4.4-.5 6-1.1 1.6-.6 3-1.5 4.4-2.9 1.4-1.4 2.3-2.7 2.9-4.4.6-1.5 1-3.4 1.1-6 .1-2.6.1-3.5.1-10.1s0-7.5-.1-10.1c-.1-2.6-.5-4.4-1.1-6-.6-1.6-1.5-3-2.9-4.4-1.4-1.4-2.7-2.3-4.4-2.9-1.5-.6-3.4-1-6-1.1-2.6-.1-3.5-.1-10.1-.1z" />
                <path d="M32 20.4a11.6 11.6 0 1 0 0 23.2 11.6 11.6 0 0 0 0-23.2zm0 19.1a7.5 7.5 0 1 1 0-15.1 7.5 7.5 0 0 1 0 15.1z" />
                <circle cx="44.2" cy="19.8" r="2.7" />
              </svg>
              <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
                Follow Blue Avenue Groove on Instagram
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/BlueAvenueGroove/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Blue Avenue Groove on Facebook"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                verticalAlign: 'middle',
              }}
            >
              <svg viewBox="0 0 64 64" width="38" height="38" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" />
              </svg>
              <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
                Follow Blue Avenue Groove on Facebook
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
