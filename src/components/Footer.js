import React from 'react'
import PropTypes from 'prop-types'
import CoupleChoice2018 from '../assets/images/wwCouplesChoiceImages/wwCouplesChoice.2018.png'
import CoupleChoice2020 from '../assets/images/wwCouplesChoiceImages/wwCouplesChoice.2020.png'
import CoupleChoice2021 from '../assets/images/wwCouplesChoiceImages/wwCouplesChoice.2021.png'
import CoupleChoice2022 from '../assets/images/wwCouplesChoiceImages/wwCouplesChoice.2022.png'

const { SocialIcon } = require('react-social-icons');

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <SocialIcon url="https://www.instagram.com/blueavenuegroove/" bgColor='lightBlue' fgColor="darkRed"/>
    <br/>
    <br/>
    <img src={CoupleChoice2018} 
      alt="NY Wedding band award 2018" 
      width='20%'

    />
    <img src={CoupleChoice2020} 
      alt="NY Wedding band award 2020" 
      width='20%'
      style={{'marginLeft':10}}
    />
    <img src={CoupleChoice2021} 
      alt="NY Wedding band award 2021" 
      width='20%'
      style={{'marginLeft':10}}
    />
    <img src={CoupleChoice2022} 
      alt="NY Wedding band award 2022" 
      width='20%'
      style={{'marginLeft':10}}
    />
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
