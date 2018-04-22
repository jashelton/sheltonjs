import React from 'react';
import './nav.css';

import HamburgerMenu from 'react-hamburger-menu';

export class NavComponent extends React.Component {
  state = {
    open: false
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return(
      <div className="nav-wrapper">
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={24}
          height={18}
          strokeWidth={1}
          rotate={0}
          color='#E5DFC5'
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    );
  }
}