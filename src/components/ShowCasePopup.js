import React, { useState, useEffect } from "react";

const ShowcasePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div style={popupStyle}>
        <div style={popupContentStyle}>
          <h2>Showcase Event</h2>
          <p style={textStyle}>
            Join us for a showcase on May 9th and June 11th from 7-10pm at{" "}
            <a
              href="https://www.google.com/maps/place/The+Red+Lion/@40.7284222,-73.9994518,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25991e8b3e73f:0x40bdec8381464f98!8m2!3d40.7284222!4d-73.9994518!16s%2Fm%2F0kjgdsg?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ADD8E6" }}
            >
              The Red Lion
            </a>{" "}
            (151 Bleecker St, New York, NY 10012).
          </p>
          <p style={textStyle}>
            To add names to the VIP list, text Pam at{" "}
            <a href="tel:8572047853" style={{ color: "#ADD8E6" }}>
              857-204-7853
            </a>
            .
          </p>
          <button onClick={handleClose} style={closeButtonStyle}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

const textStyle = {
  fontSize: "18px",
  lineHeight: "1.5",
  fontWeight: "bold",
  color: "#E0E0E0",
};

const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupContentStyle = {
  backgroundColor: "#333",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  maxWidth: "500px",
  width: "80%",
  color: "black",
};

const closeButtonStyle = {
  backgroundColor: "#5DADE2",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textAlign: "center",
  fontSize: "18px",
};

export default ShowcasePopup;
