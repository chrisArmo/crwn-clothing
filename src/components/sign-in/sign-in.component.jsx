import React, { Component } from 'react';

import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
          <FormInput
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            label="email"
            required="required"
            handleChange={this.handleFieldChange}
          />

          <FormInput
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            required="required"
            handleChange={this.handleFieldChange}
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>

            <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
