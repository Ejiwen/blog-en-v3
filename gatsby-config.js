/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CE37ESEP3K", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },

    // {
    //   resolve: `gatsby-remark-prismjs`,
    //   options: {
    //     classPrefix: "language-",

    //     inlineCodeMarker: null,

    //     aliases: {},

    //     showLineNumbers: false,

    //     noInlineHighlight: false,

    //     languageExtensions: [
    //       {
    //         language: "superscript",
    //         extend: "javascript",
    //         definition: {
    //           superscript_types: /(SuperType)/,
    //         },
    //         insertBefore: {
    //           function: {
    //             superscript_keywords: /(superif|superelse)/,
    //           },
    //         },
    //       },
    //     ],

    //     prompt: {
    //       user: "root",
    //       host: "localhost",
    //       global: false,
    //     },
    //     // By default the HTML entities <>&'" are escaped.
    //     // Add additional HTML escapes by providing a mapping
    //     // of HTML entities and their escape value IE: { '}': '&#123;' }
    //     escapeEntities: {},
    //   },
    // },
  ],
}
