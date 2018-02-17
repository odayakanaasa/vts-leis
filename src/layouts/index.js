import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

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

class TemplateWrapper extends Component {
  render() {
    const isHome = window.location.pathname === '/';

    const { children, data } = this.props;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link href={data.site.siteMetadata.fonts} rel="stylesheet" />
        </Helmet>
        {!isHome && <Navigation isHome={isHome} />}
        <div style={{ height: '800px' }}>{children()}</div>
        <Footer />
      </div>
    );
  }
}
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
