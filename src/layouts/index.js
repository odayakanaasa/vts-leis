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
  state = {
    isHome: false
  };

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;

    const isHome = location.pathname === '/';

    this.setState({
      isHome
    });
  }

  render() {
    const { children, data } = this.props;
    const { isHome } = this.state;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link href={data.site.siteMetadata.fonts} rel="stylesheet" />
        </Helmet>
        <Navigation isHome={isHome} />
        {children()}
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
