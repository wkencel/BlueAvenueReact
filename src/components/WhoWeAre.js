import React from "react"
import Syd1 from '../assets/images/syd1.png';
import Sami1 from '../assets/images/Sami1.png'
import Will1 from '../assets/images/WillK.headshot_1.png'

class WhoWeAre extends React.Component {
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
        imagine a lengthy section here, possibly two paragraphs of about 150-250 word
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
      <img src={Sami1} alt="Sami Stevens" width='320px'/>
      <h2>
        COO/CFO - Sami Stevens
      </h2>
      <p>Something about sami and here solo stuff here</p>
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