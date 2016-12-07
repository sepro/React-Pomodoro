import React from "react";

import Timer from './timer/timer';
import Footer from './footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Timer {...this.props} />
        <Footer>&copy; Sebastian Proost</Footer>
      </div>
    );
  }
}