import React, { useState, useEffect } from "react";
import "../styles/ShowcasePopup.css"; // Move styles to a CSS file

const ShowcasePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check sessionStorage instead of localStorage
    const hasClosedPopup = sessionStorage.getItem("hasClosedPopup");
    
    // If they haven't closed it in this session, show it
    if (!hasClosedPopup) {
      setIsOpen(true);
    }
    
    // Handle escape key
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // When closing, mark in sessionStorage that they've closed it
    sessionStorage.setItem("hasClosedPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className={`popup-overlay ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
      <div className="popup-content">
        <header>
          <h2 id="showcaseEventTitle">Showcase Event</h2>
        </header>
        <section aria-labelledby="showcaseEventTitle">
          <p className="popup-text">
            Join us for a showcase on May 9th and June 11th from 7-10pm at{" "}
            <a
              href="https://www.google.com/maps/place/The+Red+Lion/@40.7284222,-73.9994518,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25991e8b3e73f:0x40bdec8381464f98!8m2!3d40.7284222!4d-73.9994518!16s%2Fm%2F0kjgdsg?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              The Red Lion
            </a>{" "}
            (151 Bleecker St, New York, NY 10012).
          </p>
          <p className="popup-text">
            To add names to the VIP list, text Pam at{" "}
            <a href="tel:8572047853" className="popup-link">
              857-204-7853
            </a>.
          </p>
        </section>
        <footer>
          <button onClick={handleClose} className="popup-close-button" aria-label="Close popup">
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ShowcasePopup;
