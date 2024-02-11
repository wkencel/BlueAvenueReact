import React, { Component } from "react"
import BrideAndGroom from '../optimized-images/Leibel-Band-2.webp'
import { Link } from "gatsby"
import ContactUs from "./ContactUs"
class EventServices extends Component {
  render() {
    return (
      <>
        <h2 className="major">
          <Link to="/wedding-event-services">Event Services</Link>
        </h2>
        <p>
          Elevate your wedding experience with our band's comprehensive music
          offerings, meticulously crafted to cater to each key moment of your
          special day. From the exchange of vows to the final dance, we provide
          complete entertainment solutions.
        </p>
        <img
          src={BrideAndGroom}
          alt="Happy Bride and Groom"
          width="100%"
          style={{ borderRadius: "10px" }}
        />
        <p>
          Our Reception Package sets the stage for an unforgettable evening,
          complete with event liability insurance for peace of mind, a premium
          sound system for crystal clear audio and a professional sound engineer
          to ensure perfect acoustics. Included in this package are a dedicated
          toast microphone, expert MC services to facilitate the evening's
          events, and four hours of captivating music, personalized with three
          song requests of your choosing.
        </p>
        <p>
          In addition to all those offerings, we bring ambiance to your cocktail
          hour with versatile ensembles that create the perfect background for
          mingling and celebrating. Our skilled musicians are adept at setting
          the mood with an array of styles suited to your taste. For your
          ceremony, we offer an intimate and bespoke music experience with
          options ranging from solo instrumental performances to lovely duets.
          Whether you prefer traditional melodies or a more contemporary
          soundtrack, our musicians will provide a harmonious backdrop for the
          moment you say "I do."
        </p>
        <p>
          From the first note of your ceremony to the joyful soundtrack of your
          reception, let our band complete the magic of your wedding day with
          our impeccable event services.
        </p>
        <h4>Find out more about our wedding offerings here</h4>
        <h2 className="major">
          <Link to="/wedding-event-services" style={{ color: "#0099FF" }}>
            Wedding Event Services
          </Link>
        </h2>
        <h4>Click here for a list of some of the songs we cover</h4>
        <a href="https://docs.google.com/spreadsheets/d/1U4fJlgAtdRjQKzBbRz1U-c0-5hjIY9OVANt_CEp53YM/edit?usp=sharing">
          <button>Repertoire</button>
        </a>
        <br></br>
        <br />
        <h4>Inquiry about dates here</h4>
        <ContactUs />
        <br />
        <br />
        <p>Go to our Contact Page to find out about pricing and booking!</p>
      </>
    );
  }
}
  
  export default EventServices