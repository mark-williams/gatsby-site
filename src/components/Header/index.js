import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainer = styled.div`
  background: #000;
  padding: 0;
  margin-bottom: 2rem;
  box-shadow: 0 0.2rem 0.8rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;

  a,
  a:visited {
    color: white;
  }
`;

const HeaderContent = styled.div`
  color: hsl(0, 0%, 92%);
  margin: 0;
  font-size: 2rem;
  padding: 1.4rem 2rem;
  a {
    color: hsl(0, 0%, 92%);
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Links = styled.ul`
  font-size: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    float: left;
    margin-left: 1.4rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">Gatsby</Link>
      <Links>
        <li>
          <Link to={'/services'}>Services</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
      </Links>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
