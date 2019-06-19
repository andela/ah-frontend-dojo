import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/Landing';
import PasswordResetPage from 'pages/PasswordReset';
import PageNotFound from 'pages/Error';
import Bookmarks from 'pages/Bookmarks';


import 'assets/MainStyle.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/reset-password" render={props => <PasswordResetPage {...props} />} />
          <Route path="/bookmarks" render={props => <Bookmarks {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
