import styled from 'styled-components';
export const Section = styled.section`
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.color || 'navy'};
  width: 100%;
  padding: 1.4rem 0 1.4rem 0;
  margin-bottom: 0;
`;
