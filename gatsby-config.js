require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Top Live Wedding Bands in NYC | Blue Avenue Groove",
    author: "Will Kencel",
    description: "Premier NYC wedding band serving Manhattan, Brooklyn and Hudson Valley with exceptional live music entertainment for weddings and corporate events",
    siteUrl: "https://www.blueavemusic.io", // Add your URL - critical for SEO
    social: {
      twitter: "@blueavegroove",
      instagram: "@blueavenuegroove",
    },
    keywords: "wedding band, NYC wedding music, live wedding entertainment, corporate events, brooklyn wedding band",
    location: "New York, NY",
    image: "/images/blue-avenue-groove-share.jpg", // This will be used as default social sharing image
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {
    //     analyzerMode: 'server',
    //     analyzerPort: '8888',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-folder-1`,
        path: `${__dirname}/src/images/`, // Path to your image folder
      },
    },
    // Image folder 2
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-folder-2`,
        path: `${__dirname}/src/assets/images/`, // Path to another image folder
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-folder-3`,
        path: `${__dirname}/src/assets/images/weddingPhotos/`, // Path to another image folder
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-folder-4`,
        path: `${__dirname}/src/assets/images/wwCouplesChoiceImages/`, // Path to another image folder
      },
    },
    // Add additional folders as needed...

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/building-icon.webp", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [`/404`, `/404.html`],
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.blueavemusic.io',
        sitemap: 'https://www.blueavemusic.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.blueavemusic.io`,
      },
    },
  ],
};
