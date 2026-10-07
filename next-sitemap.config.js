/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.blueavenuegroove.com',
  generateRobotsTxt: true,
  outDir: './out',
  // Keep noindex utility pages out of the sitemap so it does not advertise pages
  // we have told search engines not to index (/sms-optin is SMS-consent only;
  // /services is a redirect stub).
  exclude: ['/sms-optin', '/services'],
}
