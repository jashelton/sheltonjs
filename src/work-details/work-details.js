import React from 'react';
import { worksService } from '../works';


import { iconMap } from '../helpers';
import './work-details.css';

export class WorkDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      details: {}
    };
  }

  componentDidMount() {
    const workId = this.props.match.params.id;
    this.setState({ details: worksService.getWork(workId) });
  }

  render() {
    const { details } = this.state;

    return(
      <div className="page-wrapper">
        <h1>{details.viewValue}</h1>
        <div>
          <div className="work-wrapper">
            <div className="work-image-container">
              <img src={details.img} alt={details.viewValue} />
            </div>

            <div className="work-details-container">
              <div>
                {details.desc}
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        {/* Technologies used -> full width with icons */}
        {/* Github commit history? */}
        <div className="tech-icons-container">
          {details.tech_used &&
            <div className="icon-list">
              {details.tech_used.map((tech, index) => (
                <div className="icon-list-item" key={index}>
                  {/* TODO: Add icon to mapping for when doesn't exist */}
                  <div><i className={`devicon-${iconMap[tech]}-plain`}></i></div>
                  <div>{tech}</div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    );
  }
}