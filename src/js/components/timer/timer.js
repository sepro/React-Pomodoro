import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

import TimeDisplay from './time-display';
import TextButton, {Wrapper} from './text-button'

import dateFns from 'date-fns';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {running: false, last_time: new Date()};
  }

  _decrease_time = () => {
    if (this.state.running) {
      const current_time = new Date();
      const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

      this.props.decrease_time(interval);

      this.setState({last_time: current_time}, () => {setTimeout(this._decrease_time, 50)});
    }
  }

  _set_pomodoro = (ev) => {
    ev.preventDefault();

    this.props.set_time(1500000)
  }

  _set_short_break = (ev) => {
    ev.preventDefault();

    this.props.set_time(300000)
  }

  _set_long_break = (ev) => {
    ev.preventDefault();

    this.props.set_time(600000)
  }

  _start_stop = (ev) => {
    ev.preventDefault();

    const current_time = new Date();
    const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

    if (this.state.running) {
        this.props.decrease_time(interval);

        this.setState({running: false});
    } else {
        this.setState({running: true, last_time: current_time}, () => {this._decrease_time()});
    }
  }

  _notify = (ev) => {
    ev.preventDefault();


  }

  render() {
    return (
      <div>
          <Wrapper>
              <TextButton onClick={ this._set_pomodoro }>Pomodoro</TextButton>
              <TextButton onClick={ this._set_short_break }>Short Break</TextButton>
              <TextButton onClick={ this._set_long_break }>Long Break</TextButton>
          </Wrapper>

          <TimeDisplay current_time={ this.props.current_time } />

          <Wrapper>
                <TextButton onClick={ this._start_stop }>Pause/Resume</TextButton>
                <TextButton onClick={ this._notify }>Test Notification</TextButton>
          </Wrapper>
      </div>
    );
  }
}

export default Timer