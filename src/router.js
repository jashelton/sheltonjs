import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './helpers'

// Routes
import { Home } from './home';
import { About } from './about';
import { Works } from './works';
import { WorkDetails } from './work-details';

export class RouterOutlet extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/works' component={Works} />
          <Route exact path='/works/:id' component={WorkDetails} />
        </div>
      </Router>
    );
  }
}