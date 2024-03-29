import PropTypes from 'prop-types'
import React from 'react'
import Buildings from '../optimized-images/buildings2.webp'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
  <div className="logo">
  <img src={Buildings} width='200%' style={{'marginTop':'-55%', 'marginLeft':'-50%'}} alt="Blue Avenue Groove logo NYC"/>
      
    </div>
    <div className="content">
      <div className="inner">
        <h1>Blue Avenue Groove</h1>
        
        <p>
          Bringing people together{' '}
        </p>
      </div>           
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('event-services')
            }}
          >
            Events
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('media')
            }}
          >
            Media
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            People
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
        <button
          onClick={() => {
            props.onOpenArticle('reviews')
          }}
        >
          Reviews
        </button>
      </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
