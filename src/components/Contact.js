import React from "react"
import EmailJS from './ContactUs.js'
import { Link } from 'gatsby';
import Calculator from './PriceCalculator'
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
      
      <nav>
        <ul>
          <h4>See how much it costs</h4>
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
          <h4>Make your booking</h4>
          <li>
            <Link to="/PriceCalculator">Purchase Request</Link>
          </li>
        </ul>
      </nav>
      <div id="price-calculator" style={{'display': 'none'}}>
        <PriceCalculator />
      </div>
      
      
      <a  href="https://calendly.com/blueavenuegroove/intro-meeting"> Set up a time with one of our product specialists</a>
      <br></br><br/>
      <p>or send us an email</p>
      <ul className="icons">
      <EmailJS />
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <p> more icons here i.e. Wedding Wire, The Knot</p>
        <p>purchase request</p>
        <PurchaseRequest />
      </ul>
     </>
    )
  }
}
function showCalculator() {
  var x = document.getElementById("price-calculator")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


export default ContactForm
