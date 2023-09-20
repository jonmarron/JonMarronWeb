import React from 'react'
import { education, jobs } from '../data/websiteData';

const Resume = () => { 
  jobs.reverse();
  education.reverse();
  
  return (
    <section id='resume'>
      <div className="two-column-container">
        <div className="column">
          <h2>Professional <span className="accent-text">Experience</span></h2>
          <ul className='jobs'>
            {jobs.map((job, index)=>{
              return (
                <li key={index} className="job">
                  <div className="company-logo">
                    <img src={job.imgURL}/>
                  </div>
                  <div className="job-description">
                    <p className='position'>{job.position}</p>
                    <p className='company-name'>{job.name}</p>
                  </div>
                  <div className="location-time">
                    <p>{job.duration}</p>
                  </div>
                </li>
              )
            } )}
          </ul>
        </div>
        <div className="column">
          <h2>Relevant <span className="accent-text">Education</span></h2>
          <ul className='jobs'>
            {education.map((job, index)=>{
              return (
                <li key={index} className="education">
                  <div className="company-logo">
                    <img src={job.imgURL}/>
                  </div>
                  <div className="job-description">
                    <p className='position'>{job.position}</p>
                    <p className='company-name'>{job.name}</p>
                  </div>
                  <div className="location-time">
                    <p>{job.duration}</p>
                  </div>
                </li>
              )
            } )}
          </ul>
        </div>
      </div>


    </section>
    )
}

export default Resume