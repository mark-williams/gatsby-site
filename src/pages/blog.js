import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { Section } from '../components/Section';
import { SectionBody } from '../components/SectionBody';

const BlogPage = () => (
  <Layout>
    <Section>
      <SectionBody>
        <h1>Blog</h1>
        <p>List of blogs here...</p>
        <Link to="/">Go back to the homepage</Link>
      </SectionBody>
    </Section>
  </Layout>
);

export default BlogPage;
