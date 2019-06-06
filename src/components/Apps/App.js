import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/Landing';
import PasswordResetPage from 'pages/PasswordReset';
import ArticlePage from 'pages/Article';
import Articles from 'components/Articles';
import Article from 'components/Article';
import PageNotFound from 'pages/Error';

import 'assets/MainStyle.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/reset-password" render={props => <PasswordResetPage {...props} />} />
          <Route exact path="/articles/" render={props => <Articles {...props} />} />
          <Route exact path="/article/" render={props => <Article {...props} />} />
          <Route exact path="/article/slug" render={props => <ArticlePage {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
