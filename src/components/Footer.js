import React from "react";
import PropTypes from "prop-types";
import CoupleChoice2018 from "../optimized-images/wwCouplesChoice.2018.png";
import CoupleChoice2020 from "../optimized-images/wwCouplesChoice.2020.png";
import CoupleChoice2021 from "../optimized-images/wwCouplesChoice.2021.png";
import CoupleChoice2022 from "../optimized-images/wwCouplesChoice.2022.png";
import { Link } from "gatsby";

const { SocialIcon } = require("react-social-icons");

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <SocialIcon
      url="https://www.instagram.com/blueavenuegroove/"
      bgColor="lightBlue"
      fgColor="darkRed"
    />
    <br />
    <br />
    <img src={CoupleChoice2018} alt="NY Wedding band award 2018" width="80px" />
    <img
      src={CoupleChoice2020}
      alt="NY Wedding band award 2020"
      width="80px"
      style={{ marginLeft: 10 }}
    />
    <img
      src={CoupleChoice2021}
      alt="NY Wedding band award 2021"
      width="80px"
      style={{ marginLeft: 10 }}
    />
    <img
      src={CoupleChoice2022}
      alt="NY Wedding band award 2022"
      width="80px"
      style={{ marginLeft: 10 }}
    />
    <br />
    <div style={{ textAlign: "center" }}>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/wedding-bands-nyc">NYC Weddings</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/brooklyn-wedding-bands">Brooklyn Weddings</Link>
    </div>
    <div>
      <Link to="/blog">Find more wedding info on our Blog</Link>
    </div>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
