import React from 'react';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

injectGlobal`
  ${normalize}

  html {
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
`;

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link href={data.site.siteMetadata.fonts} rel="stylesheet" />
    </Helmet>
    {children()}
  </div>
);
export default TemplateWrapper;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        fonts
      }
    }
  }
`;
