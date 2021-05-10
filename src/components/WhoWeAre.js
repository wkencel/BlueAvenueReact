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
      <p>
        We believe in weddings without the cheese.  We believe in music as a form of expression that connects us together.  It’s brought each of us from different walks of life to make up the family we have in Blue Ave Groove today.
      </p>
      <p>
        Like anything we do, we strive not to “go through the motions” with each song, but to give you part of us.  We’re building a better version of what it means to be a “wedding band”: filled with music from the soul, bringing friends and family together for the experience of a lifetime.      
      </p>
      <br/>
      <h3> 
        <u>
          See what the band's been up to
        </u>
      </h3>
      <br/>
      <h4>J Hoard's latest</h4>
      <iframe
          width="100%"
          height='400px'
          src="https://www.youtube.com/embed/9molxoqHp-M"
          title="test"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          autoplay
          />
      <br/>
      <br/>
      <br/>
      <h4>Smooth Vibes from Bk with Sami</h4>
      <iframe
          width="100%"
          height='400px'
          src="https://www.youtube.com/embed/pM75HyKUNEc"
          title="test"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          autoplay
          />
      <br/>
      <br/>
      <br/>
      <h4>Live from Phil's apartment</h4>
      <iframe
          width="100%"
          height='400px'
          src="https://www.youtube.com/embed/OxSzSZQMfPA"
          title="test"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          autoplay
          />
      <br/>
      <br/>
      <br/>
      <h4>From the Beat Lab with Syd</h4>
      <iframe
          width="100%"
          height='400px'
          src="https://www.youtube.com/embed/3FNJFJpK1CU"
          title="test"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          autoplay
          />
      <br/>
      <br/>
      <br/>
      <h4>Ben, Professor of Sound, building a vibe w/ his fiance, Caroline</h4>
      <iframe
          width="100%"
          height='400px'
          src="https://www.youtube.com/embed/bUxmcNQR6pg"
          title="test"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          autoplay
          />

      <br/>
      <br/>
      <br/>
      <br/>
      <h1> 
        Leadership
      </h1>
      <br/>
      <br/>
      <img src={Syd1} alt="Sydney Driver" width='280px' height='380'/>
      <h2>
       CEO - Sydney Driver
      </h2>
      <p>Possibly a quote here about something that describes what we believe in but also relates to our business</p>
      <img alt="" width='320px'/>
      <a href="https://willkencelhome.io">
        <img src={Will1} alt="Will Kencel" width='320px'/>
      </a>
      <h2>
        CTO/COO - Will Kencel
      </h2>
      <p>Original founder and bassist. Guiding Blue Avenue into the next decade by integrating tech to create an inicredible user experience</p>
      </>
    )
  }
}

export default WhoWeAre