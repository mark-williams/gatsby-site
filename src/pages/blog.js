import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Section } from '../components/Section';
import { SectionBody } from '../components/SectionBody';

const BlogItem = ({ item }) => <div>{item.frontmatter.title}</div>;
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
          <div>
            {posts.map(({ node }) => (
              <BlogItem key={node.id} item={node} />
            ))}
          </div>
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
