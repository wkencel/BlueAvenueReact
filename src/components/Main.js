import PropTypes from 'prop-types'
import React, { useContext, Suspense, lazy } from 'react'
// import ContactForm from './Contact.js'
// import WhoWeAre from './WhoWeAre.js'
// import Media from './Media.js'
// import EventServices from './EventServices.js'
// import Reviews from './Reviews.js'
import { globalContext } from "../context/context"
const Media = lazy(() => import('./Media.js'));
const EventServices = lazy(() => import('./EventServices.js'));
const ContactForm = lazy(() => import('./Contact.js'));
const WhoWeAre = lazy(() => import('./WhoWeAre.js'));
const Reviews = lazy(() => import('./Reviews.js'));


function Main({ article, articleTimeout, onCloseArticle, timeout, setWrapperRef }) {

  const { setStopPlay } = useContext(globalContext);
  let close = (
    <div
      className="close"
      onClick={() => {
        setStopPlay(true)
        onCloseArticle();
      }}
    ></div>
  );

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: "flex" } : { display: "none" }}
    >
      <article
        id="event-services"
        className={`${article === "event-services" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <EventServices />
        </Suspense>
        {close}
      </article>

      <article
        id="media"
        className={`${article === "media" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Media />
        </Suspense>
        {close}
      </article>

      <article
        id="about"
        className={`${article === "about" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <WhoWeAre />
        </Suspense>
        {close}
      </article>

      <article
        id="contact"
        className={`${article === "contact" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Contact</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
        {close}
      </article>

      <article
        id="contact"
        className={`${article === "reviews" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Reviews</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Reviews />
        </Suspense>
        {close}
      </article>
    </div>
  );
};

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;