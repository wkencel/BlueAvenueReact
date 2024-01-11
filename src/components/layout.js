import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;
  let titleAdd;

  if (location && location.pathname === '/') {
    titleAdd = "| New York City"
    content = (
      <div>
        {children}
      </div>
    )
  } else if (location === "brooklyn") {
    titleAdd = "| Brooklyn";
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    );
  } else if (location === "nyc") {
    titleAdd = "| New York City";
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    );
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title + titleAdd}
            meta={[
              { name: 'description', content: 'Top Live Wedding Bands' },
              { name: 'keywords', content: 'nyc wedding, nyc wedding entertainment, nyc wedding entertainment, bk wedding entertainment, brooklyn wedding, wedding reception, wedding band, wedding entertainment' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
