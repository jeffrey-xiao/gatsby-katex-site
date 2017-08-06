import React from 'react';
require('katex/dist/katex.css');

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default PostTemplate;
export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
