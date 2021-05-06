import React from "react"
// import ImageGallery from './Instagram.js'
import JonDancing from '../assets/images/JonDancing.jpeg'
import SamiAndPhil from '../assets/images/SamiPhilwmanhattan.jpeg'
import Pam from '../assets/images/Pam.jpeg'

class Media extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Media</h2>
        <span className="image main">
        </span>
        <p>
        Video, instagram, photos
        </p>
        <h3>
          Clips
        </h3>
        <div>
        <div id="first_column">
          <iframe
          width="100%"
          height='400px'
          src="https://www.youtube.com/embed/Na7bKp9VVRE"
          title="test"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          autoplay
          />
        </div>
        <br/>
        <div id="second_column">
          <iframe 
          width="100%" 
          height='400px'
          src="https://www.youtube.com/embed/EMkF_DONCSk" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen />
        </div>
        <br/>
        <div id="third_column">
          <iframe 
          width="100%" 
          height='400px' 
          src="https://www.youtube.com/embed/jw4zzH1DVM0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen />
          <br>
            </br>
          <br />
          <h3>
            Snaps from our shows
          </h3>
          <br/>
            <img src={JonDancing} alt="J Hoard" width='100%'/>
          <br/>
          <br/>
            <img src={SamiAndPhil} alt="Sami Stevens and Phil Faconti" width='100%'/>
          <br/>
          <br/>
            <img src={Pam} alt="Pam" width='100%'/>
        </div>
      </div>
      </>
      )
    }
  }
  
  export default Media