import React, { Component } from "react"
import BandPhoto from '../optimized-images/BlueAvenueCCphoto.webp';
import { Link } from "gatsby";

class EventServices extends Component {
  render() {
    return (
      <>
        <h2 className="major">Event Services</h2>
        <br/>
        <Link to="/nycweddings">NYC Weddings</Link>
        <Link to="/brooklynweddings">Brooklyn Weddings</Link>
        <h2>What we offer</h2>
        <h3> Reception - base package</h3>
        <ul>
          <li>
            6 - 12 piece band (4 hours of the highest quality music in NYC)
              <li>
                starts 2 vocals, guitar, keys, bass, drums
                  <li>additions include tenor sax, trumpet, alto sax, trombone</li>
              </li>
          </li>
          <li>Pro audio set up with AV Engineer</li>
          <li>3 song requests (most often 1st dance & parents' dances)</li>
          <li>Announcing dances, cake cutting & other info during reception (aka MC)</li>
          <li>Specialities include: Funk, Soul, Pop/Top 40, R&B, Rock</li>
        </ul>
        <img src={BandPhoto} alt="Blue Ave full band" width='100%'/>
        <h4> Cocktail hr </h4>
        <ul>
          <li>
            1 - 4 piece band
              <li>
                Small PA and 1 hr of background music
              </li>
              <li>
                Options: 
                  <li> 1 piece - solo keys or keys/voice
                    <li>Solo keys - jazz/soft/background music</li>
                    <li>Female vocals/keys - Regina Spektor/Carole King mixed with soft soulful jazz</li>
                  </li>
                  <li> 2 piece - vocals/keys, vocals/guitar, sax/keys
                    <li>vocals/keys - jazz ballads, soft pop</li>
                    <li>vocals/guitar - less jazz oriented, more folk/indie</li>
                    <li>sax/keys - jazz standards</li>
                  </li>
                  <li> 3 piece - vocals/sax/keys, sax/keys/drums, sax/keys/bass
                    <li>FAV JAZZ COMBO : vocals/sax/keys - high caliber soulful jazz, great chemistry between female vox & sax</li>
                    <li>sax/keys/drums - Instrumental jazz standards, NYC jazz scene vibe</li>
                    <li>sax/keys/bass - Instrumental jazz standards, NYC jazz scene vibe</li>
                  </li>
                  <li> 4 piece - vocals/guitar/bass/drums, vocals/keys/bass/drums
                    <li>vocals/guitar/bass/drums - indie/folk i.e. The Band, The Beatles</li>
                    <li>vocals/keys/bass/drums - softer jazz oriented quartet</li>
                  </li>
              </li>
          </li>
        </ul>

        <h4> Ceremony </h4>
        <ul>
          <li>
            1 - 2 piece ensemble
              <li>
                Mid-size PA and live music for 30 min ceremony
              </li>
              <li>
                Options
                  <li> 1 piece - solo keys or solo guitar
                    <li>Solo keys - traditional i.e bridal march</li>
                    <li>Solo guitar - less traditional i.e. Van Morrison, Beatles instrumentals</li>
                  </li>
                  <li> 2 piece - vocals/keys, vocals/guitar
                    <li>vocals/keys - traditional leaning but with the added effect of a vocalist</li>
                    <li>vocals/guitar - folk/indie with the added effect of a vocalist</li>
                  </li>
              </li>
          </li>
        </ul>

        <a href='https://docs.google.com/spreadsheets/d/1U4fJlgAtdRjQKzBbRz1U-c0-5hjIY9OVANt_CEp53YM/edit?usp=sharing'>
          <button>Repertoire</button>
        </a>
        <br></br>
        <br/>
        <h3>-list of booked dates coming soon-</h3>
        <h4>until then, please inquiry about dates directly</h4>
        <br/>
        <br/>
        <p>
        Go to our Contact Page to find out about pricing and booking!
        </p>
      </>
    )
  }
}
  
  export default EventServices