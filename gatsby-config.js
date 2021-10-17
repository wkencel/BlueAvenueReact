module.exports = {
  siteMetadata: {
    title: 'Blue Avenue Groove',
    author: 'Will Kencel',
    description: 'Blue Avenue Groove\'s official homesite for weddings and entertainment and tristate area for Funk, Motown and Soul',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-template',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
