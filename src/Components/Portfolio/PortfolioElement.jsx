import React from 'react'

const PortfolioElement = ({work, index}) => {
  return (
    <div className={index%2==0 ? "two-column-container" : "two-column-container reverse" }>
      <div className="column project-details">
        <div className="project-details-content">
          <div className="project-tags">
            {work.categories.map((cat, index) => {
              return (
                <div className='tag relative' key={index}>{cat}</div>
              )
            })}
          </div>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
        </div>
        <a href={work.link} target='_blank'><button className='secondary'>Visit site</button></a>
      </div>
      <div className="column">
        <img className="portfolio-image" src={work.img} alt="" />
      </div>
    </div>
  )
}

export default PortfolioElement