import React from 'react';
import './particles.css';

import Particles from 'react-particles-js';

export class ParticlesComponent extends React.Component {
  render() {
    return(
      <Particles className='Particles'
        params={{
          particles: {
            number: {
              value: '80',
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#000000'
            },
            line_linked: {
              color: '#91C7A9',
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 250,
                size: 8,
                duration: 2,
                opacity: 0.25,
                speed: 2
              },
              push: {
                particles_nb: 4
              }
            }
          }
        }}
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#252120'
        }}
      />
    );
  }
}