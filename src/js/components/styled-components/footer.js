import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.section`
  padding: 0.4em 0em;
  text-align: right;
`;

class Footer extends React.Component {

  render() {
    return <FooterSection>{ this.props.children }</FooterSection>;
  }

}

export default Footer