import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import './index.css';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 5rem auto;
  min-width: 200px;
  width: 70%;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 20;
  top: 5rem;
`;
const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Gatsby Site"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header style={{ marginBottom: '4rem' }} />
    <ContentWrapper>{children()}</ContentWrapper>
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
