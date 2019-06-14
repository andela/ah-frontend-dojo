import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/Landing';
import PageNotFound from 'pages/Error';
import ArticleRating from 'pages/Rating';

import 'assets/MainStyle.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/rating/:slug" render={props => <ArticleRating {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
