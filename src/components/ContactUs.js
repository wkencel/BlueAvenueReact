import React from "react"
import PriceCalculator from './PriceCalculator'
import emailjs from "emailjs-com"
import {  Form, Input,  TextArea, Grid } from "semantic-ui-react"
import { Link } from 'gatsby';
require('dotenv').config();
let serviceId = process.env.YOUR_SERVICE_ID
let templateId = process.env.YOUR_TEMPLATE_ID
let userId = process.env.YOUR_USER_ID


export default function ContactUs(props) {
  function sendEmail(event) {
    event.preventDefault()

    emailjs
      .sendForm(
        serviceId,
        templateId,
        event.target,
        userId
      )
      .then(
        result => {
          console.log(result.text)
          alert('thank you for submitting your request.  Looking forward to creating the experience of a lifetime!')
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
      <Grid centered>
        <Grid.Column computer={80} mobile={16}>
          <form onSubmit={sendEmail}>
            <div className="field half first">
              <input
              control={Input}
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
              required
              />
            </div>
            <div className="field half">
              <input
              control={Input}
              label="Subject"
              name="subject"
              placeholder="Write your subject..."
              type="text"
              required
              />
            </div>
            <Form.Field
              control={TextArea}
              label="Message"
              name="message"
              placeholder="Write your Message..."
              required
            />
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <nav>
      <ul>
        <li>
          <button
            id="price-button"
            onClick={() => {showCalculator()
            }}
          >
            Price Calculator
          </button>
        </li>

        <li>
        </li>
        <button
          id="price-button"
          onClick={() => {
          }}
        >
        <Link width='100px' to="/PriceCalculator">gatsby link for the price calculator</Link>
        </button>
      </ul>
    </nav>
          <div id="price-calculator">
            <PriceCalculator />
          </div>
        </Grid.Column>
      </Grid>

  )
}

function showCalculator() {
  var x = document.getElementById("price-calculator")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}