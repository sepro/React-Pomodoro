import React from "react";

import Config from './config/config';
import Timer from './timer/timer';
import Footer from './styled-components/footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Timer {...this.props} />
        <Config {...this.props} />
        <Footer>&copy; Sebastian Proost</Footer>
      </div>
    );
  }
}