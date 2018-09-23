import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Section from '../components/Section';
import SectionBody from '../components/SectionBody';

const SecondPage = () => (
  <Layout>
    <Section>
      <SectionBody>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </SectionBody>
    </Section>
  </Layout>
);

export default SecondPage;
