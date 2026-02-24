'use client'

import React from 'react'
import emailjs from 'emailjs-com'

const inputStyles: React.CSSProperties = {
  background: 'grey',
  width: 150,
  color: 'white',
  border: '1px solid #666',
  borderRadius: '4px',
  padding: '0.5rem',
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
    <div>
      <h1>Purchase Request</h1>
      <form onSubmit={sendEmail}>
        <div className="field half first">
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div className="field half">
          <input
            name="name"
            placeholder="Name"
            type="text"
            required
          />
        </div>
        <div className="field half first">
          <input
            name="venue-name"
            placeholder="venue name"
            type="text"
            required
          />
        </div>
        <div className="field half">
          <input
            name="location"
            placeholder="city, state"
            type="text"
            required
          />
        </div>
        <div className="field half first">
          <p style={{ fontSize: '24px' }}>Date: </p>
          <input
            name="date-purchase-request"
            type="date"
            required
            style={inputStyles}
          />
        </div>
        <div>
          <h4>Reception: </h4>
          <div className="field half">
            <p style={{ float: 'left', marginTop: 0, marginBottom: 0 }}>
              start time &nbsp;&nbsp;
            </p>
            <input
              name="reception-start-time"
              type="time"
              style={inputStyles}
            />
          </div>
          <div className="field half" style={{ float: 'left' }}>
            <p style={{ float: 'left', marginTop: 0, marginBottom: 0 }}>
              end time &nbsp;&nbsp;
            </p>
            <input
              name="reception-end-time"
              type="time"
              style={inputStyles}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <h4>
          <u>if applicable</u>
        </h4>
        <div>
          <div>
            <h4>Cocktail Hr (60 min): </h4>
            <div className="field half">
              <p style={{ float: 'left', marginTop: 0, marginBottom: 0 }}>
                start time &nbsp;&nbsp;
              </p>
              <input
                name="cocktail-start-time"
                type="time"
                style={inputStyles}
              />
            </div>
            <div className="field half" style={{ float: 'left' }}>
              <p style={{ float: 'left', marginTop: 0, marginBottom: 0 }}>
                end time &nbsp;&nbsp;
              </p>
              <input
                name="cocktail-end-time"
                type="time"
                style={inputStyles}
              />
            </div>
          </div>
          <div>
            <h4>Ceremony (30 min): </h4>
            <div className="field half">
              <p style={{ float: 'left', marginTop: 0, marginBottom: 0 }}>
                start time &nbsp;&nbsp;
              </p>
              <input
                name="ceremony-start-time"
                type="time"
                style={inputStyles}
              />
            </div>
            <div className="field half" style={{ float: 'left' }}>
              <p style={{ float: 'left', marginTop: 0, marginBottom: 0 }}>
                end time &nbsp;&nbsp;
              </p>
              <input
                name="ceremony-end-time"
                type="time"
                style={inputStyles}
              />
            </div>
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
