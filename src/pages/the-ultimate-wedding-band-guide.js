import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import ContactUs from "../components/ContactUs";
import UltimateWeddingBandGuideImage1 from "../assets/images/blogImages/the-ultimate-wedding-band-guide_img1.webp";
import UltimateWeddingBandGuideImage2 from "../assets/images/blogImages/the-ultimate-wedding-band-guide_img5.jpeg";
import UltimateWeddingBandGuideImage3 from "../assets/images/blogImages/the-ultimate-wedding-band-guide_img3.jpeg";
// import BlogPostImage from "../assets/images/weddingPhotos/blog-post-image.jpg"; // Update with your image path

const pageStyles = {
  marginLeft: "2%",
  fontFamily: "'Lora', serif", // Updated to Lora for better readability
  color: "#333",
};

const headingStyles = {
  fontFamily: "'Playfair Display', serif", // Adds a touch of sophistication
  color: "#5DADE2", // A sophisticated, less fruity pink
};

const subHeadingStyles = {
  fontFamily: "'Playfair Display', serif", // Consistency with headings
  color: "#B2BEC3", // A brighter, vibrant blue
};

const h2Styles = {
  color: "#8094a0", // A bit brighter than the paragraph color
  fontFamily: "'Merriweather', serif",
};

const paragraphStyles = {
  lineHeight: "1.75", // Slightly increased for better readability
  marginBottom: "20px",
  color: "#6c757d", // A darker shade for softer contrast
  fontSize: "20px",
  fontFamily: "'Lora', serif",
};

const linkStyle = {
  fontSize: "32px",
  fontWeight: "600",
  marginLeft: "10px",
  textDecoration: "none",
  color: "#6c757d", // Matching the subheadings
};

const imageStyle = {
  borderRadius: "10px",
  marginBottom: "20px",
};

const strongTagStyle = {
  color: "#8094a0", // Matching the h2 header color
  fontSize: "20px",
};

const UltimateWeddingBandGuide = () => {
  return (
    <Layout location="nyc">
      <Helmet>
        <title>
          The Ultimate Wedding Band Guide | Selecting the Perfect Soundtrack for
          Your Big Day
        </title>
        <meta
          name="description"
          content="Dive into our comprehensive guide to choosing the ultimate wedding band that aligns with your style, theme, and musical preferences, ensuring an unforgettable soundtrack for your big day."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div style={{ pageStyles }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={headingStyles}>The Ultimate Wedding Band Guide</h1>
          <h2 style={subHeadingStyles}>
            Selecting the Perfect Soundtrack for Your Big Day
          </h2>
          <br />
          <img
            src={UltimateWeddingBandGuideImage1}
            alt="Ultimate wedding entertainment guide image"
            width="70%"
            style={imageStyle}
          />
          {/*<img
          src={BlogPostImage}
          alt="NYC Wedding Band"
          width="95%"
          style={{
            display: "block",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        />*/}
          <br />
          <br />
          <p
            style={{
              ...paragraphStyles,
              fontSize: "22px",
            }}
          >
            Planning your wedding day includes creating a magical musical
            atmosphere.
          </p>
          <p
            style={{
              ...paragraphStyles,
              fontSize: "22px",
            }}
          >
            Our Ultimate Wedding Band Guide is here to help you ensure your
            musical backdrop is as perfect as your love story.
          </p>
        </div>
        <br />
        <br />

        <h2 style={h2Styles}>Introduction:</h2>
        <p style={paragraphStyles}>
          Your wedding day: a symphony of love, joy, and celebration. And what
          better way to underscore this beautiful harmony than with the perfect
          wedding band? Music does more than fill the air with melody; it
          enhances moments, evokes emotions, and creates memories that last a
          lifetime. That’s why we’ve curated this essential guide, ensuring
          every chord and note of your wedding music beautifully harmonizes with
          the essence of your special day.
        </p>

        <br />
        <h2 style={h2Styles}>Understanding Your Musical Taste and Theme</h2>
        <p style={paragraphStyles}>
          Before you start your search, have a heart-to-heart about your musical
          preferences. Are you fans of classic hits, or is your playlist more
          about the latest chart-toppers? Maybe you’re into jazz, soul, or the
          irresistible rhythms of Latin music? Your chosen genre will set the
          tone for the entire celebration, influencing the atmosphere and energy
          of your big day.
        </p>

        <br />
        <h2 style={h2Styles}>Key Considerations When Choosing Your Wedding Band</h2>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Repertoire Range:</strong> Ensure the band’s playlist is
          versatile, catering to all your favorite tunes and capable of
          appealing to the diverse musical tastes of your guests.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Band Dynamics:</strong> The size of the band is crucial. Think
          about your venue’s space, the number of guests, and the intimacy you
          desire. Whether it’s a quartet or a full-scale band, the right
          ensemble will make a big difference.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Experience and Professionalism:</strong> A band experienced in
          weddings knows how to set the pace, interact with guests, and keep the
          party going. Check their reviews, ask for references, and possibly
          watch them perform live before making a decision.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Personalization and Flexibility:</strong> Can the band
          customize their performance to your taste? Whether it’s learning your
          special song or adapting their setlist to your preferences,
          flexibility is key to personalizing your celebration.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Logistical Details:</strong> Consider the practicalities—sound
          checks, equipment, space requirements, and breaks. Clarify these ahead
          of time to avoid any day-of hiccups.
        </p>

        <img
          src={UltimateWeddingBandGuideImage2}
          alt="Ultimate wedding entertainment guide image 2"
          width="60%"
          style={{ borderRadius: "10px" }}
        />
        <p></p>
        <h2 style={h2Styles}>Making the Most of Your Wedding Band Experience</h2>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Plan Ahead:</strong> Popular bands book up fast, especially
          during peak wedding season. Start your search early to secure your
          first choice and avoid last-minute stress.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Communication is Key:</strong> Share your vision, favorite
          songs, and any no-play tunes with the band. The more they know about
          your preferences, the better they can tailor their performance to your
          expectations.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Think Beyond the Playlist:</strong> A great band does more
          than play music; they create an atmosphere. Discuss how they engage
          with the audience, their attire, and any special performances they can
          deliver.
        </p>
        <p style={paragraphStyles}>
          <strong style={strongTagStyle}>Backup Plans:</strong> Ensure the band has a contingency plan
          for unexpected situations, like illness or equipment failure. You want
          peace of mind knowing that the show will go on, no matter what.
        </p>

        <br />
        <h2 style={h2Styles}>Encore: Wrapping It Up</h2>
        <p style={paragraphStyles}>
          Choosing the right wedding band is about striking a chord that
          resonates with your personal love story and elevating your celebration
          to an unforgettable experience. With careful consideration, open
          communication, and a dash of excitement, you’re set to create a
          soundtrack that echoes the joy, love, and promise of your new
          beginning together.
        </p>
        <p style={paragraphStyles}>
          As you embark on this harmonious journey, remember that music is more
          than just background noise—it's the heartbeat of your celebration, a
          reflection of your journey, and a harbinger of your future together.
          Let the music play, and let love lead the way to a lifetime of
          beautiful melodies and cherished memories.
        </p>

        <br />
        <h2 style={h2Styles}>Book Your Ultimate Wedding Band Today:</h2>
        <p style={paragraphStyles}>
          Ready to experience the best of Brooklyn? Reach out to us via our
          contact form, email, or phone. Let's make your wedding day as unique
          and vibrant as Brooklyn itself! Don’t miss the chance to have Blue
          Avenue Groove be a part of your special day. Contact us today to
          secure your date and experience the best of live wedding music in
          Brooklyn.
        </p>
        <h3>Send us a message to Book</h3>
        <ContactUs />

        <Link to="/" style={linkStyle}>
          Home
        </Link>
      </div>
    </Layout>
  );
};

export default UltimateWeddingBandGuide;
