import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  font-size: 12px;
  text-align: center;
  color: gray;
`;

class TextButton extends React.Component {
  handleClick = (ev) => {
    this.props.onClick(ev);
  }

  render() {
    return <Button onClick={ this.handleClick }>{ this.props.children }</Button>;
  }

}

export default TextButton