import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Section from '../components/Section';
import SectionBody from '../components/SectionBody';

const Services = () => (
  <Layout>
    <Section>
      <SectionBody>
        <h1>Services</h1>
        <p>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed
          magna dictum porta. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui.
        </p>
        <p>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
          non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
          a.
        </p>
        <p>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus
          nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
          dui.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. Donec sollicitudin molestie malesuada.
          Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim.
        </p>
        <p>
          Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
          Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia
          eget consectetur sed, convallis at tellus. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus.
        </p>
        <Link to="/">Go back to the homepage</Link>
      </SectionBody>
    </Section>
  </Layout>
);

export default Services;
