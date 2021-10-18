import React from "react"
import EmailJS from './ContactUs.js'
// import { Link } from 'gatsby';
// import Calculator from './PriceCalculator'
import PriceCalculator from './PriceCalculator'
import PurchaseRequest from './PurchaseRequest'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonDisabled: true,
      message: { fromEmail: "", subject: "", body: "" },
      submitting: false,
      error: null,
    }
  }

  onChange = event => {
    const name = event.target.getAttribute("name")
    this.setState({
      message: { ...this.state.message, [name]: event.target.value },
    })
  }
  render() {
    return (
     <>
      <div>{this.state.error}</div>
      
      <a  href="https://calendly.com/blueavenuegroove/intro-meeting"> Click Here to Schedule a Meeting</a>
      <br></br><br/>
      <p>or send us an email</p>
      <ul className="icons">
      <EmailJS />
      <nav>
        <ul>
        <p>---------------------------------------------------------------------------------------------------------------</p>
          <h3>See how much it costs</h3>
          <li>
            <button
            id="price-button"
            onClick={() => {showCalculator()
            }}
          >
            Price Calculator
          </button>
          </li>
          <br/>
          <div id="price-calculator" style={{'display': 'none'}}>
            <PriceCalculator />
          </div>
          <br/>
          <p>---------------------------------------------------------------------------------------------------------------</p>
          <h3>Make your booking</h3>
          <li>
            <button
            id="purchase-request-button"
            onClick={() => {showPurchaseRequest()
            }}
          >
            Purchase Request
          </button>
          </li>
        </ul>
      </nav>
      <div id="purchase-request" style={{'display': 'none'}}>
        <PurchaseRequest />
      </div>

        <li>
          <a href="https://www.instagram.com/blueavenuegroove/" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/BlueAvenueGroove/" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
     </>
    )
  }
}
function showCalculator() {
  let x = document.getElementById("price-calculator")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showPurchaseRequest() {
  let x = document.getElementById("purchase-request")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


export default ContactForm
