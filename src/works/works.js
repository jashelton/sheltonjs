import React from 'react';
import { worksService } from './works.service';

export class Works extends React.Component {
  constructor() {
    super();

    this.state = {
      allWorks: []
    };
  }

  componentDidMount() {
    this.setState({allWorks: worksService.allWorks()});
  }

  render() {
    const { allWorks } = this.state;

    return(
      <div className="page-wrapper">
        <h1>My Work</h1>

        {allWorks.map((work, index) => (
          <div key={index}>
            <div>{work.viewValue}</div>
            <div>{work.desc}</div>
          </div>
        ))}
      </div>
    );
  }
}