'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ContactUs from './ContactUs'
import PriceCalculator from './PriceCalculator'
import PurchaseRequest from './PurchaseRequest'

const SocialIcon = dynamic(
  () => import('react-social-icons').then((mod) => ({ default: mod.SocialIcon })),
  { ssr: false }
)

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
            <SocialIcon
              url="https://www.instagram.com/blueavenuegroove/"
              bgColor="transparent"
              fgColor="#ffffff"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.facebook.com/BlueAvenueGroove/"
              bgColor="transparent"
              fgColor="#ffffff"
            />
          </li>
        </ul>
      </div>
    </>
  )
}
