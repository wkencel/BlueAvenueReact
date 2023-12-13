require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Top Live Wedding Bands New York City | Blue Avenue Groove ",
    author: "Will Kencel",
    description:
      "NY wedding band - serving NYC, hudson valley with amazing wedding entertainment",
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
  ],
};
