module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'blog-posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        parserPlugins: [
          'remark-math',
        ],
        plugins: [
          'gatsby-remark-katex',
        ],
      },
    },
  ],
};
