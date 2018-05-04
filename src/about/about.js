import React from 'react';
import { aboutService } from './about.service';

export class About extends React.Component {
  constructor() {
    super();

    this.state = {
      aboutItems: []
    }
  }

  componentDidMount() {
    this.setState({ aboutItems: aboutService.allItems() });
  }

  render() {
    const { aboutItems } = this.state;

    return(
      <div className="page-wrapper">
        <h1>About</h1>

        {aboutItems.map((item, index) => (
          <div key={index}>
            <div>{item.viewValue}</div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    );
  }
}