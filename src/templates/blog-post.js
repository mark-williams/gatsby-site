import React from 'react';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  return (
    <div>
      <h2>This will be the template for a blog</h2>
      <p>Watch this space...</p>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`;

export default Template;
