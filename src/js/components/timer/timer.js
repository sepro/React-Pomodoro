import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimeDisplay from './time-display'

import dateFns from 'date-fns';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {running: false, last_time: new Date(), last_action: 'none'};
  }

  _decrease_time = () => {
    if (this.state.running) {
      const current_time = new Date();
      const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

      this.props.decrease_time(interval);

      this.setState({...this.state, last_time: current_time}, () => {setTimeout(this._decrease_time, 50)});
    }
  }

  _start = (ev) => {
    ev.preventDefault();

    if (this.state.last_action == 'stop') {
        /*
            Timer was stopped, reset before starting
        */
        this.props.set_time(1500000)
    }

    this.setState({...this.state, running: true, last_time: new Date(), last_action: 'start'}, () => {this._decrease_time()});
  }

  _stop = (ev) => {
    ev.preventDefault();

    if (this.state.last_action == 'start')
    {
        /*
            Timer is running, update time before stopping
        */
        const current_time = new Date();
        const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

        this.props.decrease_time(interval);
    }
  }

  _pause = (ev) => {
    ev.preventDefault();

    const current_time = new Date();
    const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

    this.props.decrease_time(interval);

    this.setState({...this.state, running: false, last_action: 'pause'});
  }

  render() {
    return (
      <div>
          <TimeDisplay current_time={ this.props.current_time } />
      </div>
    );
  }
}

export default Timer