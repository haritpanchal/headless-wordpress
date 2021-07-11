module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Headless Wordpress",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost/gatsby-demo/graphql",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
