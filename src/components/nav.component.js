import React from 'react';
import './nav.css';

import { Router, Route } from 'react-router';
import { history } from '../helpers';
import { routerItems } from '../router-items';
import { NavLink } from 'react-router-dom';
import MdDehaze from 'react-icons/lib/md/dehaze';
import MdClose from 'react-icons/lib/md/close';

export class NavComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return(
      <div className="navigation-wrapper">
        <div className="nav-wrapper">
        { !this.state.open ? 
          <MdDehaze className="menu-icon" size={36} onClick={this.toggleMenu} />
          :
          <MdClose className="close-icon" size={36} onClick={this.toggleMenu} />
        }
        </div>
        
        { this.state.open &&
          <div className="menu">
            <div className="nav-wrapper">
              <MdClose className="close-icon" size={36} onClick={this.toggleMenu} />
            </div>

            <div className="menu-list">
              <Router history={history}>
                <div>
                  {routerItems.map((item, index) => (
                    <NavLink
                      activeClassName='is-active'
                      className="nav-link"
                      key={index}
                      exact
                      to={item.route}
                      onClick={this.toggleMenu}
                    >
                      {item.viewValue}
                    </NavLink>
                  ))}
                </div>
              </Router>
            </div>
          </div>
        }
      </div>
    );
  }
}