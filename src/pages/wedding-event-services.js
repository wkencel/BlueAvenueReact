import React from "react";
import Layout from "../components/layout"; // Assuming you have a Layout component
import ContactUs from "../components/ContactUs";
import { Link } from "gatsby";
import SamiAndPhil from "../optimized-images/SamiPhilwmanhattan.webp";
import CocktailHour from "../optimized-images/CocktailHour.webp";
import NYCWeddingReception from "../assets/images/weddingPhotos/nyc-wedding-reception-3.jpg";

const WeddingEventServices = () => {
  return (
    <>
      <Layout location="nyc">
        <h1 className="major">Wedding Services</h1>
        <div style={{ "margin-left": "2%" }}>
          <img
            src={NYCWeddingReception}
            alt="NYC Wedding Reception"
            width="95%"
            style={{
              display: "block",
              margin: "0 auto", // Centers the image by setting equal margins on both sides
              borderRadius: "10px",
            }}
          />
          <br />
          <h1 className="major">What we offer</h1>
          <h2> Reception - base package</h2>
          <ul className="list-dash">
            <li>
              6 - 12 piece band (4 hours of the highest quality music in NYC)
              <li>
                starts 2 vocals, guitar, keys, bass, drums
                <li>
                  additions include tenor sax, trumpet, alto sax, trombone
                </li>
              </li>
            </li>
            <li>Premium audio set up with AV Engineer</li>
            <li>3 song requests (most often 1st dance & parents' dances)</li>
            <li>
              Announcing dances, cake cutting & other info during reception (aka
              MC)
            </li>
            <li>Microphone for Toasts</li>
            <li>Event Liability Insurance</li>
            <li>Specialties include: Funk, Soul, Pop/Top 40, R&B, Rock</li>
          </ul>
          <img
            src={CocktailHour}
            alt="NYC Wedding Cocktail Hour"
            width="95%"
            style={{
              display: "block",
              margin: "0 auto", // Centers the image by setting equal margins on both sides
              borderRadius: "10px",
            }}
          />
          <br />
          <h2> Cocktail hr </h2>
          <ul className="list-dash">
            <li>
              1 - 4 piece band
              <li>Small PA and 1 hr of background music</li>
              <li>
                Options:
                <li>
                  {" "}
                  1 piece - solo keys or keys/voice
                  <li>Solo keys - jazz/soft/background music</li>
                  <li>
                    Female vocals/keys - Regina Spektor/Carole King mixed with
                    soft soulful jazz
                  </li>
                </li>
                <li>
                  {" "}
                  2 piece - vocals/keys, vocals/guitar, sax/keys
                  <li>vocals/keys - jazz ballads, soft pop</li>
                  <li>vocals/guitar - less jazz oriented, more folk/indie</li>
                  <li>sax/keys - jazz standards</li>
                </li>
                <li>
                  {" "}
                  3 piece - vocals/sax/keys, sax/keys/drums, sax/keys/bass
                  <li>
                    FAV JAZZ COMBO : vocals/sax/keys - high caliber soulful
                    jazz, great chemistry between female vox & sax
                  </li>
                  <li>
                    sax/keys/drums - Instrumental jazz standards, NYC jazz scene
                    vibe
                  </li>
                  <li>
                    sax/keys/bass - Instrumental jazz standards, NYC jazz scene
                    vibe
                  </li>
                </li>
                <li>
                  {" "}
                  4 piece - vocals/guitar/bass/drums, vocals/keys/bass/drums
                  <li>
                    vocals/guitar/bass/drums - indie/folk i.e. The Band, The
                    Beatles
                  </li>
                  <li>vocals/keys/bass/drums - softer jazz oriented quartet</li>
                </li>
              </li>
            </li>
          </ul>
          <img
            src={SamiAndPhil}
            alt="NYC Wedding Ceremony"
            width="95%"
            style={{
              display: "block",
              margin: "0 auto", // Centers the image by setting equal margins on both sides
              borderRadius: "10px",
            }}
          />
          <br />
          <h2> Ceremony </h2>
          <ul className="list-dash">
            <li>
              1 - 2 piece ensemble
              <li>Mid-size PA and live music for 30 min ceremony</li>
              <li>
                Options
                <li>
                  {" "}
                  1 piece - solo keys or solo guitar
                  <li>Solo keys - traditional i.e bridal march</li>
                  <li>
                    Solo guitar - less traditional i.e. Van Morrison, Beatles
                    instrumentals
                  </li>
                </li>
                <li>
                  {" "}
                  2 piece - vocals/keys, vocals/guitar
                  <li>
                    vocals/keys - traditional leaning but with the added effect
                    of a vocalist
                  </li>
                  <li>
                    vocals/guitar - folk/indie with the added effect of a
                    vocalist
                  </li>
                </li>
              </li>
            </li>
          </ul>
        </div>
        <br />
        <h2>Book Your Date Now:</h2>
        <p>
          Don’t miss the chance to have Blue Avenue Groove be a part of your
          special day. Contact us today to secure your date and experience the
          best of live wedding music in NYC.
        </p>
        <h3>Send us a message to Book</h3>
        <ContactUs />
        <Link to="/" style={{ fontSize: "24px" }}>
          Home
        </Link>
      </Layout>
    </>
  );
};

export default WeddingEventServices;
