import React from "react";
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0.4em 0em;
  margin-top: 0.1em;
  margin-bottom: 0.1em;
  background: rgba(0,0,0,0.75);
  border-radius: 15px;
  text-align: center;
`;


const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    margin: 1px;
    -moz-text-shadow: 1px 1px 1px rgba(0,0,0,0.75);
    -webkit-text-shadow: 1px 1px 1px rgba(0,0,0,0.75);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.75);
    width: 150px;

    &:hover {
        background-color: #2C8F30;
    }


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