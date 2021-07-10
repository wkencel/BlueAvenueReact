import React from 'react'
import PropTypes from 'prop-types'
import CoupleChoice2018 from '../images/wwcoupleschoice2018.png'
import CoupleChoice2020 from '../images/wwcoupleschoice2020.png'
const { SocialIcon } = require('react-social-icons');
const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <SocialIcon url="https://www.instagram.com/blueavenuegroove/" bgColor='lightBlue' fgColor="darkRed"/>
    <br/>
    <br/>
    <img src={CoupleChoice2018} 
      alt="NY Wedding band award" 
      width='80px'

    />
    <img src={CoupleChoice2020} 
      alt="NY Wedding band award" 
      width='80px'
      style={{'marginLeft':10}}
    />
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
