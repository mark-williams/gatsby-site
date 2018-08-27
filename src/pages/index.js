import React from 'react';
import Link from 'gatsby-link';
import { Section } from '../components/Section';
import { SectionBody } from '../components/SectionBody';
import Hero from '../components/Hero';

const IndexPage = () => (
  <div>
    <Hero />
    <Section>
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
      </SectionBody>

      <SectionBody>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget
          felis porttitor volutpat.
        </p>

        <Link to="/page-2/">Go to page 2</Link>
      </SectionBody>
    </Section>
  </div>
);

export default IndexPage;
