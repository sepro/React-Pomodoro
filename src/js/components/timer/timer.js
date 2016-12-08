import React from 'react';

import TimeDisplay from './time-display';
import TextButton, {Wrapper} from '../text-button';

import dateFns from 'date-fns';


class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        reset_to: 'pomodoro',
        running: false,
        last_time: new Date()
    };
  }

  _decrease_time = () => {
    if (this.state.running) {
      const current_time = new Date();
      const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

      if (this.props.current_time > interval) {
            this.props.decrease_time(interval);
            this.setState({last_time: current_time}, () => {setTimeout(this._decrease_time, 100)});
      } else {
            this.props.set_time(0);
            this.setState({last_time: current_time, running: false});
            var audio = new Audio('sound/tomato-squish.mp3');
            audio.play();
      }
    }
  }

  _set_pomodoro = (ev) => {
    ev.preventDefault();

    this.setState({reset_to: 'pomodoro'});
    this.props.set_time(this.props.config.pomodoro)
  }

  _set_short_break = (ev) => {
    ev.preventDefault();

    this.setState({reset_to: 'short'});
    this.props.set_time(this.props.config.short)
  }

  _set_long_break = (ev) => {
    ev.preventDefault();

    this.setState({reset_to: 'long'});
    this.props.set_time(this.props.config.long)
  }

  _reset = (ev) => {
    ev.preventDefault();

    switch (this.state.reset_to) {
        case 'pomodoro':
            this.props.set_time(this.props.config.pomodoro);
            break;
        case 'short':
            this.props.set_time(this.props.config.short);
            break;
        case 'long':
            this.props.set_time(this.props.config.long);
            break;
        default:
            this.props.set_time(this.props.config.pomodoro);
    }

  }

  _stop = (ev) => {
    ev.preventDefault();

    const current_time = new Date();
    const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

    if (this.state.running) {
        this.props.decrease_time(interval);

        this.setState({running: false});
    }
  }

  _start = (ev) => {
    ev.preventDefault();

    const current_time = new Date();

    if (!this.state.running) {
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
              <TextButton onClick={ this._set_pomodoro } primary>Pomodoro</TextButton>
              <TextButton onClick={ this._set_short_break }>Short Break</TextButton>
              <TextButton onClick={ this._set_long_break }>Long Break</TextButton>
          </Wrapper>

          <TimeDisplay current_time={ this.props.current_time } />

          <Wrapper>
                <TextButton onClick={ this._start } primary>Start</TextButton>
                <TextButton onClick={ this._stop }>Stop</TextButton>
                <TextButton onClick={ this._reset }>Reset</TextButton>
          </Wrapper>
      </div>
    );
  }
}

export default Timer