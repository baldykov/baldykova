module.exports = {
  siteMetadata: {
    title: "baldykova",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-_KaQA8QilG3ottDPn0XsGgHd6-UP43kg-szhwGaUcuM",
        spaceId: "",
      },
    },
    "gatsby-plugin-emotion",
  ],
};
