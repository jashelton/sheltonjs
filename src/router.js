import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './helpers'

// Routes
import { Home } from './home';
import { About } from './about';

export class Navigation extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}