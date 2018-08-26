import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const HeaderContainer = styled.div`
  background: #000;
  padding: 0;
  margin-bottom: 2rem;
  box-shadow: 0 0.2rem 0.8rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderContent = styled.div`
  color: hsl(0, 0%, 92%);
  margin: 0;
  font-size: 2rem;
  padding: 1.4rem 2rem;
  a {
    color: hsl(0, 0%, 92%);
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">Gatsby</Link>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
