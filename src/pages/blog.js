import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Section } from '../components/Section';
import { SectionBody } from '../components/SectionBody';

const BlogsList = styled.div`
  margin-bottom: 2rem;
`;

const BlogItem = ({ item }) => (
  <div>
    <Link to={item.frontmatter.path}>{item.frontmatter.title}</Link>
  </div>
);
BlogItem.propTypes = {
  item: PropTypes.object
};

const BlogsPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Section>
        <SectionBody>
          <h1>Blog</h1>
          <BlogsList>
            {posts.map(({ node }) => (
              <BlogItem key={node.id} item={node} />
            ))}
          </BlogsList>
          <Link to="/">Go back to the homepage</Link>
        </SectionBody>
      </Section>
    </Layout>
  );
};

BlogsPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query BlogsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`;

export default BlogsPage;
