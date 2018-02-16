import React, { Component } from 'react';

class NewsArticle extends Component {
  componentDidMount() {
    console.info(this.props);
  }
  render() {
    const { title, articleBody } = this.props.data.contentfulArticle;
    return (
      <div>
        <h1>{title}</h1>
        <p>{articleBody.internal.content}</p>
      </div>
    );
  }
}

export default NewsArticle;

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      slug
      articleBody {
        internal {
          content
        }
      }
    }
  }
`;
