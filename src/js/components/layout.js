import React from "react";

import Timer from './timer/timer'

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Timer {...this.props} />
      </div>
    );
  }
}