import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, image, article, keywords, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            keywords
            social {
              twitter
              instagram
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname || ""}`
  const metaKeywords = keywords || site.siteMetadata.keywords

  return (
    <Helmet
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaImage
          ? [
              {
                property: "og:image",
                content: `${site.siteMetadata.siteUrl}${metaImage}`,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
              {
                name: "twitter:image",
                content: `${site.siteMetadata.siteUrl}${metaImage}`,
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )}
    >
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  )
}

export default SEO
