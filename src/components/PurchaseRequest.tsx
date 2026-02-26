'use client'

import React from 'react'
import emailjs from 'emailjs-com'

export default function PurchaseRequest() {
  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_8frj60q',
        'template_q3mhzsa',
        event.currentTarget,
        'user_OrrMkaU8MTAiz3JrnRlxo'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert(
            'Thank you for submitting your request. Looking forward to creating the experience of a lifetime!'
          )
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="purchase-request">
      <h3>Purchase Request</h3>
      <form onSubmit={sendEmail}>
        <div className="purchase-grid">
          <div className="field">
            <input
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <div className="field">
            <input
              name="name"
              placeholder="Name"
              type="text"
              required
            />
          </div>
          <div className="field">
            <input
              name="venue-name"
              placeholder="Venue name"
              type="text"
              required
            />
          </div>
          <div className="field">
            <input
              name="location"
              placeholder="City, State"
              type="text"
              required
            />
          </div>
        </div>

        <div className="purchase-date-row">
          <label>Date:</label>
          <input
            name="date-purchase-request"
            type="date"
            required
            className="purchase-input"
          />
        </div>

        <div className="purchase-time-section">
          <h4>Reception</h4>
          <div className="purchase-time-grid">
            <label>Start time</label>
            <input
              name="reception-start-time"
              type="time"
              className="purchase-input"
            />
            <label>End time</label>
            <input
              name="reception-end-time"
              type="time"
              className="purchase-input"
            />
          </div>
        </div>

        <p className="purchase-optional">
          <u>If applicable</u>
        </p>

        <div className="purchase-time-section purchase-time-section-optional">
          <h4>Cocktail Hr (60 min)</h4>
          <div className="purchase-time-grid">
            <label>Start time</label>
            <input
              name="cocktail-start-time"
              type="time"
              className="purchase-input"
            />
            <label>End time</label>
            <input
              name="cocktail-end-time"
              type="time"
              className="purchase-input"
            />
          </div>
        </div>

        <div className="purchase-time-section purchase-time-section-optional">
          <h4>Ceremony (30 min)</h4>
          <div className="purchase-time-grid">
            <label>Start time</label>
            <input
              name="ceremony-start-time"
              type="time"
              className="purchase-input"
            />
            <label>End time</label>
            <input
              name="ceremony-end-time"
              type="time"
              className="purchase-input"
            />
          </div>
        </div>

        <ul className="actions">
          <div className="field">
            <textarea
              name="message"
              placeholder="Copy and Paste your quote from the price calculator here. Please include any other helpful info or customizations..."
              required
              rows={4}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <li>
              <input
                type="submit"
                value="Submit Purchase Request"
                className="special"
              />
            </li>
          </div>
        </ul>
      </form>
    </div>
  )
}
