import styled from 'styled-components';
import colours from '../style/colours';

const Section = styled.section`
  background-color: ${props => props.backgroundColor || colours.white};
  color: ${props => props.color || colours.darkGrey};
  width: 100%;
  padding: 1.4rem 0 1.4rem 0;
  margin-bottom: 0;
`;

export default Section;
