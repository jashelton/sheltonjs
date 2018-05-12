import React from 'react';
import { Link } from 'react-router-dom'
import { worksService } from './works.service';
import './works.css';

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

        <div className='page-content'>
          {allWorks.map((work, index) => (
            <Link to={`/works/${work.value}`} key={index}>
              <div className='item-card'>
                <div className="item-card-image-container">
                  <img src={work.img} alt={work.viewValue}/>
                </div>
                <div className="item-card-footer">{work.viewValue}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}