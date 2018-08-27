import React from 'react';
import Link from 'gatsby-link';
import { Section } from '../components/Section';
import { SectionBody } from '../components/SectionBody';

const SecondPage = () => (
  <Section>
    <SectionBody>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </SectionBody>
  </Section>
);

export default SecondPage;
