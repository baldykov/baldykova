module.exports = {
  siteMetadata: {
    title: "baldykova",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ZdjyW8meJpzNZ-ldhVMB6EJaE_VoSh-xaryOzJ_LHjs",
        spaceId: "be9hkzkklpmg",
      },
    },
    "gatsby-plugin-emotion",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};
