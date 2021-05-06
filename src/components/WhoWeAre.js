import React, {Component} from "react"
import Syd1 from '../assets/images/syd1.png';
// import Pam1 from '../assets/images/pam1.png'
import Will1 from '../assets/images/WillK.headshot_1.png'

class WhoWeAre extends Component {
  render() {
    return (
      <>
      <h2 className="major">Who We Are</h2>
      <span className="image main">
      </span>
      <h3>
        Company Culture, Goals, etc.
      </h3>
      <p>
        imagine a section here, possibly two paragraphs of about 150-250 word
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <p> 
      images of band members
      </p>
      <img src={Syd1} alt="Sydney Driver" width='280px' height='380'/>
      <h2>
       CEO - Sydney Driver
      </h2>
      <p>Possibly a quote here about something that describes what we believe in but also relates to our business</p>
      <img alt="" width='320px'/>
      <h2>
        COO - TBD
      </h2>
      <p>Something about about COO's experience in industry </p>
      <a href="https://willkencelhome.io">
        <img src={Will1} alt="Will Kencel" width='320px'/>
      </a>
      <h2>
        CTO- Will Kencel
      </h2>
      <p>Original founder and bassist.  Now full time software engineer at Microsoft working on user facing technologies.   Guiding Blue Avenue's user experience into the next decade</p>
      </>
    )
  }
}

export default WhoWeAre