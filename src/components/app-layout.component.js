import React from 'react';
import './app-layout.css';

import { RouterOutlet } from '../router';
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
          <RouterOutlet />
        </main>
      </div>
    );
  }
}