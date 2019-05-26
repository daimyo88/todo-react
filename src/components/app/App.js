import React from 'react';

import './App.scss';
import Login from '../login/Login'
import AppBody from '../app-body/AppBody'

import LocalStorage from '../../helpers/localStorage'

class App extends React.Component {

  constructor() {
    super();
    this.localStorage = new LocalStorage();
    this.state = {
      userName: this.localStorage.getData('name'),
      loggedIn: this.localStorage.getData('name') ? true : false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(name) {
    if(name) {
        this.setState({
          userName : name,
          loggedIn: true
        }, () => {
          this.localStorage.setData('name', this.state.userName)
        });
    }
  }

  logout() {
    this.setState({
      userName : '',
      loggedIn: false
    });
    this.localStorage.clearData('name')
  }

  render() {

    return (
      <div className="App">
        { this.state.loggedIn ? (<AppBody logout={this.logout} userName = {this.state.userName} />) : (<Login login = {this.login} />)}
      </div>
    );
  }
}

export default App;
