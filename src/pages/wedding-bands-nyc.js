import React from "react";
import Layout from '../components/layout'; // Assuming you have a Layout component
import ContactUs from "../components/ContactUs";
import { Link } from "gatsby";
import NYCWeddingPic from "../assets/images/weddingPhotos/nyc-wedding-reception-3.jpg";

const NYCWeddings = () => {
  return (
    <>
      <Layout location="nyc">
        <h1>Blue Avenue Groove Music</h1>
        <div style={{ "margin-left": "2%" }}>
          <h2>The Most Unforgettable Live Wedding Band in NYC</h2>
          <p>
            Welcome to Blue Avenue Groove, where the essence of live music meets
            the magic of matrimony in the heart of New York City. Our musicians
            are not just performers; they are storytellers dedicated to turning
            your wedding day into an unforgettable celebration.
          </p>
        </div>
        <br />
        <img
          src={NYCWeddingPic}
          alt="NYC Wedding Band"
          width="95%"
          style={{
            display: "block",
            margin: "0 auto", // Centers the image by setting equal margins on both sides
            borderRadius: "10px",
          }}
        />
        <br />
        <br />
        <h2>About Blue Avenue Groove, your NYC Wedding Band</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3>Our Philosophy:</h3>
          <p>
            In the bustling city of New York, Blue Avenue Groove stands out with
            a belief that music is a unifying force. Our team, hailing from
            diverse backgrounds, forms a unique family of musicians. Together,
            we're changing the narrative of wedding entertainment in NYC.
          </p>
          <h3>Our Vision:</h3>
          <p>
            Beyond traditional tunes, we're crafting a new kind of wedding band
            experience. It's about music that touches the soul and brings people
            together, transforming your special day into an extraordinary
            lifetime memory.
          </p>
        </div>
        <br />
        <h2>Our Services</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3>Customizable Band Options: </h3>
          <p>
            At Blue Avenue Groove, we offer a dynamic range of band sizes to
            perfectly fit your wedding's atmosphere. Our offerings start with a
            6-piece band and can expand up to a 12-piece ensemble, ensuring we
            deliver four hours of the highest quality music in NYC. The base
            band includes two vocalists, guitar, keys, bass, and drums,
            providing a rich, full sound that sets the tone for your special
            day.
          </p>
          <h3>Additional Instrument Options:</h3>
          <p>
            For a more lavish musical experience, we offer the option to include
            additional instruments such as another vocalist, tenor sax, trumpet,
            alto sax, and trombone. These additions not only enhance the
            richness of the sound but also add another layer of sophistication
            to your wedding entertainment.
          </p>
          <h3>Professional Audio Setup: </h3>
          <p>
            Every performance by Blue Avenue Groove is supported by a
            professional audio setup, complete with an experienced AV Engineer.
            This ensures that the sound quality is impeccable, allowing every
            note to be heard crisply and clearly, enhancing the overall
            experience.
          </p>
          <h3>Personalized Song Requests: </h3>
          <p>
            We understand the importance of personal touches at your wedding.
            Blue Avenue Groove is pleased to offer the performance of three song
            requests, which often include the first dance and parents' dances.
            These special songs are more than just music; they're the soundtrack
            to your most cherished moments.
          </p>
          <h3>Expert MC Services: </h3>
          <p>
            Beyond music, our band also provides MC services to ensure your
            reception runs smoothly. We'll handle the announcements for dances,
            cake cutting, and other key moments, keeping your guests informed
            and engaged throughout the celebration.
          </p>
          <h3>Specialized Music Genres: </h3>
          <p>
            Our repertoire is diverse and rich, specializing in genres like
            Funk, Soul, Pop/Top 40, R&B, and Rock. This variety ensures that we
            cater to a wide range of musical tastes, making your wedding
            celebration not just an event, but a memorable experience for
            everyone involved.
          </p>
        </div>
        <br />
        <h2>Why Choose Blue Avenue Groove for your NYC Wedding band?</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3>Experience in NYC Weddings:</h3>
          <p>
            Navigating the vibrant and diverse wedding scene of NYC is our
            forte. Our bands are seasoned in performing at various venues,
            understanding the pulse of the city like no other.
          </p>
          <h3>Professional and Passionate Musicians: </h3>
          <p>
            We are more than just musicians; we are artists who pour our heart
            and soul into every performance, ensuring your wedding is filled
            with moments of musical bliss.
          </p>
        </div>
        <br />
        <h2>Booking Process</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3>Consultation: </h3>
          <p>
            Your journey with us starts with a simple conversation. We listen,
            we understand, and we craft a musical experience that mirrors your
            personal taste and wedding theme.
          </p>
          <h3>Customizable Packages:</h3>
          <p>
            Our packages are designed to cater to your specific needs, whether
            you're looking for a band for just the reception or a full-day music
            experience.
          </p>
          <h3>Get in Touch: </h3>
          <p>
            Ready to make your wedding a day to remember with the best live
            wedding band in NYC? Reach out to us via our contact form, email, or
            phone. Follow our social media pages for more insights into our
            performances and updates.
          </p>
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

export default NYCWeddings;