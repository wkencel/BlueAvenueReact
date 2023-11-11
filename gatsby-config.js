module.exports = {
  siteMetadata: {
    title: 'Blue Avenue Groove Wedding band site',
    author: 'Will Kencel',
    description: 'NY wedding band - serving NYC, hudson valley with amazing wedding entertainment',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/building-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
