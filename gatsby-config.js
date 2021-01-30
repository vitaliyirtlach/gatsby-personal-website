module.exports = {
  siteMetadata: {
    title: `Vitaliy Irtlach`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vitaliy Irtlach",
        short_name: "Vitaliy Irtlach",
        start_url: "/",
        background_color: "black",
        theme_color: "white",
        display: "standalone",
        icon: "static/favicon.webp"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
  ],
}