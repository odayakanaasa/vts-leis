const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const newsArticleTemplate = path.resolve('src/pages/news-article.js');
    resolve(
      graphql(
        `
          {
            allContentfulArticle(limit: 10) {
              edges {
                node {
                  slug
                  title
                  articleBody {
                    internal {
                      content
                    }
                  }
                  date
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        console.info(result);
        result.data.allContentfulArticle.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: newsArticleTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
      })
    );
  });
};
