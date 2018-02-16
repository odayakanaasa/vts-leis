require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Lego Studio - VTSSN',
    author: 'VTSSN',
    description: 'De lego studio by VTSSN',
    fonts: 'https://fonts.googleapis.com/css?family=Lato:300,400,700|Poppins:700'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
