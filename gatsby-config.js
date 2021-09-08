module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Headless Wordpress",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `http://headlesswordpress.local/graphql`,
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
