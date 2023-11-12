import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ContactForm from './Contact.js'
import WhoWeAre from './WhoWeAre.js'
import Media from './Media.js'
import EventServices from './EventServices.js'
import Reviews from './Reviews.js'
import { globalContext } from "../context/context"

function Main({ article, articleTimeout, onCloseArticle, timeout, setWrapperRef }) {

  const { setStopPlay, stopPlay } = useContext(globalContext);
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
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="event-services"
        className={`${article === 'event-services' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <EventServices />
        {close}
      </article>
    
      <article
          id="media"
          className={`${article === 'media' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
      >
        <Media />
        {close}
      </article>
    
      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <WhoWeAre />
        {close}
      </article>
    
      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <ContactForm />
        {close}
      </article>

      <article
        id="contact"
        className={`${article === 'reviews' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Reviews</h2>
        <Reviews />
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