'use client'

import React, { useState, useEffect } from 'react'
import '@/styles/ShowcasePopup.css'

export default function ShowcasePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('hasClosedPopup')
    if (!hasClosedPopup) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('hasClosedPopup', 'true')
  }

  if (!isOpen) return null

  return (
    <div
      className={`popup-overlay ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="popup-content">
        <header>
          <h2 id="showcaseEventTitle">Showcase Event</h2>
        </header>
        <section aria-labelledby="showcaseEventTitle">
          <p className="popup-text">
            Join us for a showcase on September 18th from 7-10pm at{' '}
            <a
              href="https://www.google.com/maps/place/The+Red+Lion/@40.7284222,-73.9994518,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              The Red Lion
            </a>{' '}
            (151 Bleecker St, New York, NY 10012).
          </p>
          <p className="popup-text">
            To add names to the VIP list, text Pam at{' '}
            <a href="tel:8572047853" className="popup-link">
              857-204-7853
            </a>
            .
          </p>
        </section>
        <footer>
          <button
            onClick={handleClose}
            className="popup-close-button"
            aria-label="Close popup"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}
