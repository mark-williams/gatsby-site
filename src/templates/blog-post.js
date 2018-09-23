import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Section from '../components/Section';
import SectionBody from '../components/SectionBody';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  return (
    <Layout>
      <Section>
        <SectionBody>
          <Helmet title={`${frontmatter.title} (Blog)`} />
          <h2>{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </SectionBody>
      </Section>
    </Layout>
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
