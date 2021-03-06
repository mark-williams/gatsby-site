import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import '../style/index.css';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  min-width: 200px;
  width: 100%;
  padding: 0;
  padding-top: 4rem;
  top: 0;
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
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default TemplateWrapper;
