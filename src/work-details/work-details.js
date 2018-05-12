import React from 'react';
import { worksService } from '../works';


import { iconMap } from '../helpers';
import MdBrokenImage from 'react-icons/lib/md/broken-image';
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
        <div className="work-wrapper">
          <div className="work-image-container">
            <img src={details.img} alt={details.viewValue} />
          </div>

          <div className="work-details-container">
            <div className="description-content">
              <h2>Description</h2>
              <div className="">
                {details.desc}
              </div>
            </div>

            <div className="status-content">
              <h2>Status Updates</h2>
              {details.status &&
                <ul>
                  {details.status.map((s, index) => (
                    <li key={index}>{s.viewValue} - {s.date}</li>
                  ))}
                </ul>
              }
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
                  <div>
                    {iconMap[tech] ? <i className={`devicon-${iconMap[tech]}-plain`}></i>
                     : <MdBrokenImage size={50} />
                    }
                  </div>
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