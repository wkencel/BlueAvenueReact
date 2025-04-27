import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './SEO'
import { BusinessStructuredData } from './StructuredData'

import '../assets/scss/main.scss'

const Layout = ({ children, location, title, description, image, article, keywords }) => {

  let content;
  let titleAdd;

  if (location && location.pathname === '/') {
    titleAdd = "New York City - Blue Avenue Groove";
    content = (
      <div>
        {children}
      </div>
    )
  } else if (location === "brooklyn") {
    titleAdd = "Brooklyn - Blue Avenue Groove";
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    );
  } else if (location === "nyc") {
    titleAdd = "New York City - Blue Avenue Groove";
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
          <SEO 
            title={title || data.site.siteMetadata.title + (titleAdd || '')}
            description={description || "Premium NYC wedding band serving Manhattan, Brooklyn and beyond"}
            image={image}
            article={article}
            keywords={keywords}
            pathname={typeof location === "string" ? `/${location}` : null}
          />
          <BusinessStructuredData />
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
