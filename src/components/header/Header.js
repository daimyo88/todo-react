import React from 'react';
import './Header.scss';

class Header extends React.Component {

  render() {
    return (
      <header className="app-header">
          <h1>Welcome {this.props.userName }!
            { this.props.userName && ((<span onClick={this.props.logout} className="logout">(log out)</span>))}
          </h1>
            <h3>Here are your tasks for today:</h3>
      </header>
    )
  }
}

export default Header;
