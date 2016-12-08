import styled from 'styled-components';

const ConfigButton = styled.button`
    background-color: "#b5b5b5";
    border: none;
    color: white;
    width: 48px;
    height: 48px;
    padding: 1px;
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


    &:hover {
        background-color: "##a5a5a5";
    }

`;

export default ConfigButton;