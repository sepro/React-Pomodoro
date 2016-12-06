import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

import TimeDisplay from './time-display';
import TextButton from './text-button'

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

  _start_pomodoro = (ev) => {
    ev.preventDefault();

    this.props.set_time(1500000)

    this.setState({running: true, last_time: new Date()}, () => {this._decrease_time()});
  }

  _start_short_break = (ev) => {
    ev.preventDefault();

    this.props.set_time(300000)

    this.setState({running: true, last_time: new Date()}, () => {this._decrease_time()});
  }

  _start_long_break = (ev) => {
    ev.preventDefault();

    this.props.set_time(600000)

    this.setState({running: true, last_time: new Date()}, () => {this._decrease_time()});
  }

  _pause_resume = (ev) => {
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

  render() {
    return (
      <div>
          <TimeDisplay current_time={ this.props.current_time } />
          <TextButton onClick={ this._start_pomodoro }>Pomodoro</TextButton>
          <TextButton onClick={ this._start_short_break }>Short Break</TextButton>
          <TextButton onClick={ this._start_long_break }>Long Break</TextButton>
          <TextButton onClick={ this._pause_resume }>Pause/Resume</TextButton>
      </div>
    );
  }
}

export default Timer