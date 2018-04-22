import React from 'react';

import { Navigation } from '../router';
import { NavComponent } from './';

export class AppLayout extends React.Component {
  state = {
    open: false
  };

  render() {
    return(
      <div>
        <NavComponent />
        <main>
          <Navigation />
        </main>
      </div>
    );
  }
}