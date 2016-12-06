import React from "react";
import styled from 'styled-components';

import dateFns from 'date-fns';

const Time = styled.h1`
  font-size: 128px;
  text-align: center;
  color: white;
  -moz-text-shadow: 1.5px 1.5px 1px rgba(0,0,0,0.5);
  -webkit-text-shadow: 1.5px 1.5px 1px rgba(0,0,0,0.5);
  text-shadow: 1.5px 1.5px 1px rgba(0,0,0,0.5);

  @media (max-width: 500px) {
    font-size: 96px;
  }

  @media (max-width: 436px) {
    font-size: 64px;
  }

   @media (max-width: 342px) {
    font-size: 48px;
  }
`;

const Wrapper = styled.section`
  padding: 4em 0em;
  background: rgba(128,128,128,0.6);
  border-radius: 15px;
`;

class TimeDisplay extends React.Component {

  _format_time = (t) => {
    var time = dateFns.format(t, "mm:ss");

    return time;
  }

  render() {
    return (
        <Wrapper>
            <Time>{ this._format_time(this.props.current_time) }</Time>
        </Wrapper>
        );
  }

}

export default TimeDisplay