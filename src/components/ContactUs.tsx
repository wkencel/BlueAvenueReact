'use client'

import React from 'react'
import emailjs from 'emailjs-com'

export default function ContactUs() {
  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_qvsrtil',
        'template_we9ajhb',
        event.currentTarget,
        'user_OrrMkaU8MTAiz3JrnRlxo'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert(
            'Thank you for submitting your request. Looking forward to creating the experience of a lifetime for you and your guests!'
          )
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
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
          name="subject"
          placeholder="Write your subject..."
          type="text"
          required
        />
      </div>
      <div className="field">
        <textarea
          name="message"
          placeholder="Write your Message..."
          required
          rows={6}
        />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
  )
}
