import React from 'react'

const Resume = () => {
  const jobs = [
    {
      name: 'Freiland Wien',
      position: 'Graphic Designer',
      duration: 'Jul 2012 - August 2012',
      imgURL: 'JobExperience/job_1.png'
    },
    {
      name: 'Silberball',
      position: 'Graphic Designer',
      duration: 'Apr 2013 - Dec 2013',
      imgURL: 'JobExperience/job_2.png'
    },
    {
      name: 'Braintribe',
      position: 'Graphic Designer',
      duration: 'Dec 2013 - Sept 2015',
      imgURL: 'JobExperience/job_3.png'
    },
    {
      name: 'Agency 4E7',
      position: 'Graphic Designer',
      duration: 'Oct 2015 - Apr 2017',
      imgURL: 'JobExperience/job_4.png'
    },
    {
      name: 'Springer & Jacoby',
      position: 'Art Director',
      duration: 'Apr 2017 - Jul 2021',
      imgURL: 'JobExperience/job_5.png'
    },
    {
      name: 'MMC Agentur',
      position: 'Online Art Director',
      duration: 'Jul 2021 - Jul 2023',
      imgURL: 'JobExperience/job_6.png'
    }
  ]
  const education = [
    {
      name: 'Ceinpro',
      position: 'Graphic Design',
      duration: 'Sept 2011 - Jul 2013',
      imgURL: 'Education/education1.png'
    },
    {
      name: 'Wifi Wien',
      position: 'Frontend Web Development',
      duration: 'Okt 2019 - Jan 2020',
      imgURL: 'Education/education2.png'
    },
    {
      name: 'Codecool',
      position: 'Fullstack Web Development',
      duration: 'Nov 2022 - Okt 2023',
      imgURL: 'Education/education3.png'
    }
  ]

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