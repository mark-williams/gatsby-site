import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Section from '../components/Section';
import SectionBody from '../components/SectionBody';
import Hero from '../components/Hero';
import colours from '../style/colours';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section backgroundColor={colours.color1} color={colours.white}>
      <SectionBody>
        <h1>Hello!</h1>

        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada
          feugiat.
        </p>
      </SectionBody>
    </Section>

    <Section>
      <SectionBody>
        <h2>Services</h2>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur
          aliquet quam id dui posuere blandit. Nulla quis lorem ut libero
          malesuada feugiat.
        </p>

        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Curabitur aliquet quam id dui posuere blandit. Proin eget tortor
          risus. Donec sollicitudin molestie malesuada.
        </p>
        <Link to="/services">More...</Link>
      </SectionBody>
    </Section>
    <Section>
      <SectionBody>
        <h2>About</h2>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget
          felis porttitor volutpat.
        </p>
      </SectionBody>
    </Section>
  </Layout>
);

export default IndexPage;
