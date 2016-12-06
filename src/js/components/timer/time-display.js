import React from "react";
import styled from 'styled-components';

import dateFns from 'date-fns';

const Time = styled.h1`
  font-size: 96px;
  text-align: center;
  color: white;
  -moz-text-shadow: 2px 2px 1px #000;
  -webkit-text-shadow: 2px 2px 1px #000;
  text-shadow: 2px 2px 1px #000;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: rgba(0,0,0,0.5);
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