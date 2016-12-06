import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  _format_time = (t) => {
    var time = dateFns.format(t, "mm:ss");
    var msec = dateFns.format(t, "SS");

    if (msec.length < 2) {
      return time + '.0' + msec;
    } else {
      return time + '.' + msec;
    }


  }

  render() {
    return (
      <div>
          <div className="timer">
            <div className="timer-text">{ this._format_time(this.props.current_time) }</div>
            <ReactCSSTransitionGroup component="div" transitionName={ this.state.last_action } transitionEnterTimeout={300} transitionLeave={false}>
              <span
			    key={ this.state.last_action }
				className= { this.state.last_action + "-icon" } >

			  </span>
            </ReactCSSTransitionGroup>
          </div>
          <div className="timer-controls">
            <button className="button play-button" onClick={ this._start } disabled={ this.state.running } /> <button className="button pause-button" onClick={ this._pause } disabled={ !this.state.running } /> <button className="button stop-button" onClick={ this._stop } />
          </div>
      </div>
    );
  }
}

export default Timer