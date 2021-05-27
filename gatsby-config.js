const myCustomQueries = {
  mobile: '(max-width: 768px)',
};

module.exports = {
  siteMetadata: {
    title: `Insidepipe`,
    description: `Insidepipe`,
    author: `@invisual`,
    siteUrl: 'https://www.insidepipe.pt',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/logo-w.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-htaccess`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
  ],
}
