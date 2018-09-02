import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/hero.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Hero = () => <Wrapper />;

export default Hero;
