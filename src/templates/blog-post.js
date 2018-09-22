import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  return (
    <div>
      <h2>{frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Template.propTypes = {
  data: PropTypes.object
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
