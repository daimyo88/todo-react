import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import './Login.scss';
import Logo from '../../assets/img/react-icon.svg'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputError : false,
      errorMessage : ''
    }
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    const name = e.target.elements.namedItem("name").value.trim();

    this.setState({
      inputError : !!name,
      errorMessage: (name) ? '' : 'Please enter your name'
     })

     this.props.login(name)
  }

  render() {
    return (
      <div className="modal-window">
      <CSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={700}
        transitionEnter={false}
        transitionLeave={false}>
          <div className="modal-inner">
            <img className="logo" src={Logo} alt="React app"/>
            <h1>Welcome to the Reactive Todo List!</h1>
            <p>please enter your name:</p>
            <form onSubmit = {this.login} >
              <input name="name" type="text" />
              {!this.state.inputError && (<div className="error-message">{this.state.errorMessage}</div>)}
              <button>OK</button>
            </form>
          </div>
      </CSSTransitionGroup>
      </div>
    )
  }
}

export default Login
