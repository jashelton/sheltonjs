import React from 'react';
import './home.css';
import { ParticlesComponent } from '../components';
import Typing from 'react-typing-animation';

export class Home extends React.Component {
  render() {
    return(
      <div className="content">
        <ParticlesComponent />
        <div className="typing-container">
          <Typing speed={50}>
            <span><span className="typing-name">Justin Shelton</span> | Front End Engineer</span>
          </Typing>
        </div>
      </div>
    );
  }
}