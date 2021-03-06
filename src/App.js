import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState(() => ({ currentUser: user }));

      console.log('User:', user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/shop" component={ShopPage} />

          <Route path="/sign-in-sign-up" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
