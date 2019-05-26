import React from 'react';

import Header from '../header/Header'

class AppBody extends React.Component {
  render() {
    return (
      <Header logout={this.props.logout} userName = {this.props.userName} />
    )
  }
}

export default AppBody;
