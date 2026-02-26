'use client'

import React from 'react'
import emailjs from 'emailjs-com'

function generateTimeOptions() {
  const options: { value: string; label: string }[] = []
  for (let h = 10; h <= 23; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour12 = h > 12 ? h - 12 : h
      const ampm = h >= 12 ? 'PM' : 'AM'
      const value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
      const label = `${hour12}:${String(m).padStart(2, '0')} ${ampm}`
      options.push({ value, label })
    }
  }
  return options
}

const timeOptions = generateTimeOptions()

function TimeSelect({ name }: { name: string }) {
  return (
    <select name={name} className="purchase-select">
      <option value="">--</option>
      {timeOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

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
          <div className="purchase-time-pair">
            <label>Start time</label>
            <TimeSelect name="reception-start-time" />
          </div>
          <div className="purchase-time-pair">
            <label>End time</label>
            <TimeSelect name="reception-end-time" />
          </div>
        </div>

        <p className="purchase-optional">
          <u>If applicable</u>
        </p>

        <div className="purchase-time-section purchase-time-section-optional">
          <h4>Cocktail Hr (60 min)</h4>
          <div className="purchase-time-pair">
            <label>Start time</label>
            <TimeSelect name="cocktail-start-time" />
          </div>
          <div className="purchase-time-pair">
            <label>End time</label>
            <TimeSelect name="cocktail-end-time" />
          </div>
        </div>

        <div className="purchase-time-section purchase-time-section-optional">
          <h4>Ceremony (30 min)</h4>
          <div className="purchase-time-pair">
            <label>Start time</label>
            <TimeSelect name="ceremony-start-time" />
          </div>
          <div className="purchase-time-pair">
            <label>End time</label>
            <TimeSelect name="ceremony-end-time" />
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
