import PropTypes from 'prop-types'
import React from 'react'
import ContactForm from './Contact.js'
import WhoWeAre from './WhoWeAre.js'
import Media from './Media.js'
import EventServices from './EventServices.js'
import Reviews from './Reviews.js'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
        id="event-services"
        className={`${this.props.article === 'event-services' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
        >
          <EventServices />
          {close}
        </article>
      
        <article
        id="media"
        className={`${this.props.article === 'media' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
        >
          <Media />
          {close}
        </article>
      
        <article
        id="about"
        className={`${this.props.article === 'about' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
        >
        <WhoWeAre />
          {close}
        </article>
      
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
          >
          <h2 className="major">Contact</h2>
          <ContactForm />
          {close}
        </article>

        <article
        id="contact"
        className={`${this.props.article === 'reviews' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
        >
        <h2 className="major">Reviews</h2>
        <Reviews />
        {close}
      </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
