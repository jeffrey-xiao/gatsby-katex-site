const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')

exports.createPages = (args) => {
  const { createPage } = args.boundActionCreators;

  // create blog posts
  return new Promise((resolve, reject) => {
    const post = path.resolve('./src/templates/post.js');

    resolve(
      args.graphql(
      `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: post,
            context: {
              path: edge.node.frontmatter.path,
            },
          });
        });
      })
    );
  });
}

