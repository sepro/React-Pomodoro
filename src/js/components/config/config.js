import React from 'react';
import Modal from 'boron/ScaleModal';

import TextButton from '../text-button';
import ConfigButton from './config-button';
import ConfigInput from './config-input';
import ConfigBody from './config-body';
import FaCog from 'react-icons/fa/cog';

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
    this.setState({pomodoro: parseInt(event.target.value) * 60000});
  }

  handleShortChange = (event) => {
    this.setState({short: parseInt(event.target.value) * 60000});
  }

  handleLongChange = (event) => {
    this.setState({long: parseInt(event.target.value) * 60000});
  }

  acceptSettings = () => {
    this.props.set_pomodoro(this.state.pomodoro);
    this.props.set_short_break(this.state.short);
    this.props.set_long_break(this.state.long);
    this.refs.modal.hide();
  }

  hideModal = () => {
    this.refs.modal.hide();
  }

  render() {
    return (
      <div>
        <ConfigButton onClick={this.showModal}><FaCog size={46} /></ConfigButton>
        <Modal ref="modal">
          <ConfigBody>
          <h2>Set time</h2>
            <label for="set_pomodoro">Pomodoro</label>
            <ConfigInput type="text" id="set_pomodoro" name="pomodoro" onChange={ this.handlePomodoroChange } value={ (this.state.pomodoro/60000) }/>
            <label for="set_short_break">Short break</label>
            <ConfigInput type="text" id="set_short_break" name="short_break" onChange={ this.handleShortChange } value={ (this.state.short/60000) }/>
            <label for="set_long_break">Long break</label>
            <ConfigInput type="text" id="set_long_break" name="long_break" onChange={ this.handleLongChange } value={ (this.state.long/60000) }/>
          <hr />
          <TextButton onClick={this.acceptSettings} primary>Accept</TextButton><TextButton onClick={this.hideModal}>Cancel</TextButton>
          </ConfigBody>
        </Modal>
      </div>
    );
  }
}

export default Config