import React from 'react';
import Modal from 'boron/FadeModal';

import TextButton, {FixedButton} from '../styled-components/text-button';
import ConfigButton from './config-button';
import ConfigInput from './config-input';
import ConfigBody from './config-body';

import FaCog from 'react-icons/fa/cog';

const boronStyle = {
    width: '300px'
};

class Config extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        pomodoro: this.props.config.pomodoro,
        short: this.props.config.short,
        long: this.props.config.long
    };
  }

  showModal = () => {
    this.refs.modal.show();
  }

  handlePomodoroChange = (event) => {
    var value = parseInt(event.target.value);

    if (isNaN(value)) {
        this.setState({pomodoro:  0});
        event.target.select();
    } else {
        this.setState({pomodoro:  value * 60000});
    }
  }

  handleShortChange = (event) => {
    var value = parseInt(event.target.value);

    if (isNaN(value)) {
        this.setState({pomodoro:  0});
        event.target.select();
    } else {
        this.setState({short:  value * 60000});
    }
  }

  handleLongChange = (event) => {
    var value = parseInt(event.target.value);

    if (isNaN(value)) {
        this.setState({pomodoro:  0});
        event.target.select();
    } else {
        this.setState({long:  value * 60000});
    }
  }

  acceptSettings = () => {
    this.props.set_pomodoro(this.state.pomodoro);
    this.props.set_short_break(this.state.short);
    this.props.set_long_break(this.state.long);
    this.refs.modal.hide();
  }

  hideModal = () => {
    this.setState({
        pomodoro: this.props.config.pomodoro,
        short: this.props.config.short,
        long: this.props.config.long
    });

    this.refs.modal.hide();
  }

  render() {
    return (
      <div>
        <ConfigButton onClick={this.showModal}><FaCog size={46} /></ConfigButton>
        <Modal ref="modal" closeOnClick={ false }  modalStyle={ boronStyle }>
          <ConfigBody>
          <h2>Set time</h2>
            <label for="set_pomodoro">Pomodoro</label>
            <ConfigInput type="text" id="set_pomodoro" name="pomodoro" ref="pomodoro" onChange={ this.handlePomodoroChange } value={ (this.state.pomodoro/60000) }/>
            <label for="set_short_break">Short break</label>
            <ConfigInput type="text" id="set_short_break" name="short_break" onChange={ this.handleShortChange } value={ (this.state.short/60000) }/>
            <label for="set_long_break">Long break</label>
            <ConfigInput type="text" id="set_long_break" name="long_break" onChange={ this.handleLongChange } value={ (this.state.long/60000) }/>
          <hr />
          <FixedButton onClick={this.acceptSettings} primary small>Accept</FixedButton><FixedButton onClick={this.hideModal} small>Cancel</FixedButton>
          </ConfigBody>
        </Modal>
      </div>
    );
  }
}

export default Config