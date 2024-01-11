import React from "react";
import Layout from '../components/layout'; // Assuming you have a Layout component
import ContactUs from '../components/ContactUs';
import { Link } from "gatsby";
import BrooklynWeddingPic1 from '../assets/images/weddingPhotos/nyc-wedding-reception-1.jpeg';
import BrooklynWeddingPic2 from '../assets/images/weddingPhotos/nyc-wedding-reception-2.jpeg';

const BrooklynWeddings = () => {
  return (
    <>
      <Layout location={"brooklyn"} style={{ align: "2%" }}>
        <h1>Blue Avenue Music</h1>
        <div style={{ "margin-left": "2%" }}>
          <h2>The Most Unforgettable Live Wedding Band in Brooklyn</h2>
          <p>
            Welcome to the home of Brooklyn's finest wedding band, where we
            bring a blend of authenticity, energy, and musical versatility to
            your special day in one of New York's most vibrant boroughs.
          </p>
        </div>
        <img
          src={BrooklynWeddingPic1}
          alt="Brooklyn Wedding Band"
          width="90%"
          style={{
            display: "block",
            margin: "0 auto", // Centers the image by setting equal margins on both sides
            borderRadius: "10px",
          }}
        />
        <br />
        <br />
        <h2>About Your Brooklyn Wedding Band: Blue Avenue Groove</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3>Our Essence: </h3>
          <p>
            As the leading wedding band in Brooklyn, we embody the unique spirit
            and diversity of Brooklyn in every performance. Our bands are a
            mosaic of the borough's rich cultural tapestry, offering an
            unparalleled musical experience.
          </p>
          <h3>Our Mission: </h3>
          <p>
            Our mission is to elevate your wedding day with top-tier music,
            transforming it into an unforgettable celebration that resonates
            with the soul of Brooklyn.
          </p>
        </div>
        <img
          src={BrooklynWeddingPic2}
          alt="Brooklyn Rooftop Wedding"
          width="90%"
          style={{
            display: "block", // Makes the image block-level
            margin: "0 auto", // Centers the image by setting equal margins on both sides
            borderRadius: "10px",
          }}
        />
        <br />
        <br />
        <h2>Our Services</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3> Dynamic Band Sizes: </h3>
          <p>
            From intimate quartets to grand 12-piece ensembles, our wedding
            bands in Brooklyn cater to every scale and style. We ensure the
            highest quality music, tailored to fit the ambiance of your
            celebration.
          </p>
          <h3>Custom Music Playlists:</h3>
          <p>
            Reflecting Brooklyn's eclectic vibe, our bands specialize in a broad
            range of genres. We work with you to create a playlist that not only
            entertains but also tells your unique love story.
          </p>
          <h3>State-of-the-Art Audio:</h3>
          <p>
            Quality sound is paramount. Our band uses professional audio setups,
            managed by experienced AV engineers, to deliver crystal-clear sound
            that elevates every performance.
          </p>
          <h3>Engaging MC Services:</h3>
          <p>
            Our band does more than just play music; we enhance the overall
            experience by proficiently handling MC duties, including announcing
            key moments like dances and cake cutting.
          </p>
          <h3>Diverse Music Genres:</h3>
          <p>
            Specializing in genres like Jazz, Funk, Soul, Pop, R&B, and Rock,
            Blue Avenue Groove captures the diverse musical landscape of
            Brooklyn, ensuring a vibrant and memorable experience for you and
            your guests.
          </p>
        </div>
        <br />
        <h2>Why Choose Blue AVenue Groove for your Brooklyn Wedding Band</h2>
        <div style={{ "margin-left": "2%" }}>
          <h3>Local Brooklyn Flavor:</h3>
          <p>
            Our band is not just in Brooklyn; we are of Brooklyn. Our
            performances capture the unique energy and soul of the borough,
            making us a top choice for wedding bands in Brooklyn.
          </p>
          <h3>Tailored to Your Style:</h3>
          <p>
            Understanding the importance of personalization, we tailor every
            aspect of our performance to align with your vision and wedding
            theme.
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
        </div>
        <br />
        <h2>Book Your Brooklyn Wedding Band Today:</h2>
        <p>
          Ready to experience the best of Brooklyn? Reach out to us via our
          contact form, email, or phone. Let's make your wedding day as unique
          and vibrant as Brooklyn itself! Don’t miss the chance to have Blue
          Avenue Groove be a part of your special day. Contact us today to
          secure your date and experience the best of live wedding music in
          Brooklyn.
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

export default BrooklynWeddings;