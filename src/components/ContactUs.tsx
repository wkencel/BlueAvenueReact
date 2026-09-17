'use client'

import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { trackLead } from '@/lib/analytics'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [venue, setVenue] = useState('')
  const [guests, setGuests] = useState('')
  const [message, setMessage] = useState('')

  function resetForm() {
    setName('')
    setEmail('')
    setPhone('')
    setEventDate('')
    setVenue('')
    setGuests('')
    setMessage('')
  }

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Fold every field into the message body so the band receives all details
    // even if the EmailJS template only renders {{message}}. The individual
    // params are also sent for a future template upgrade.
    const summary = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      `Event date: ${eventDate || '—'}`,
      `Venue: ${venue || '—'}`,
      `Guest count: ${guests || '—'}`,
      '',
      'Message:',
      message || '—',
    ].join('\n')

    const templateParams = {
      from_name: name,
      name,
      email,
      reply_to: email,
      phone,
      event_date: eventDate,
      venue,
      guests,
      subject: `New booking inquiry — ${name || 'Website'}${
        eventDate ? ` — ${eventDate}` : ''
      }`,
      message: summary,
    }

    emailjs
      .send(
        'service_qvsrtil',
        'template_we9ajhb',
        templateParams,
        'user_OrrMkaU8MTAiz3JrnRlxo'
      )
      .then(
        (result) => {
          console.log(result.text)
          trackLead('contact_form')
          alert(
            'Thank you for submitting your request. Looking forward to creating the experience of a lifetime for you and your guests!'
          )
          resetForm()
        },
        (error) => {
          console.log(error.text)
          alert(
            'Sorry, something went wrong sending your message. Please email us directly or try again.'
          )
        }
      )
  }

  return (
    <form onSubmit={sendEmail}>
      <div className="field half first">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          placeholder="Your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="field half">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          placeholder="you@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field half first">
        <label htmlFor="cf-phone">Phone</label>
        <input
          id="cf-phone"
          name="phone"
          placeholder="(000) 000-0000"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="field half">
        <label htmlFor="cf-date">Event date</label>
        <input
          id="cf-date"
          name="event_date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div className="field half first">
        <label htmlFor="cf-venue">Venue (if booked)</label>
        <input
          id="cf-venue"
          name="venue"
          placeholder="e.g. The Green Building"
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
      </div>
      <div className="field half">
        <label htmlFor="cf-guests">Guest count</label>
        <input
          id="cf-guests"
          name="guests"
          placeholder="e.g. 120"
          type="number"
          min={0}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-message">Your message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Tell us about your day — the vibe, must-play songs, or any questions..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Check Your Date" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" onClick={resetForm} />
        </li>
      </ul>
    </form>
  )
}
