import React, { Component } from 'react';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleFieldChange = event => {
    const { name, value } = event.target;

    this.setState(() => ({ [name]: value }));
  };

  handleSignIn = event => {
    event.preventDefault();

    // TEST:
    console.log({ email: this.state.email, password: this.state.password });

    this.setState(() => ({ email: '', password: '' }));
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have an Account</h2>

        <span>Sign In With Your Email and Password</span>

        <form onSubmit={this.handleSignIn}>
          <input
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            required="required"
            onChange={this.handleFieldChange}
          />
          <label htmlFor="email">Email</label>

          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            required="required"
            onChange={this.handleFieldChange}
          />
          <label htmlFor="password">Password</label>

          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
