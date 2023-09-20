import React from 'react'
import PortfolioElement from './PortfolioElement'
import { works } from '../../data/websiteData'
const Portfolio = () => {

  
  return (
    <section className='portfolio'>
      <h2>Some <span className="accent-text">things</span> I've done</h2>
      <div className="projects">
        {works.map((work, index) => {
          return(
            <PortfolioElement key = {index} work={work} index={index}/>
          )
        })}
      </div>


    </section>
  )
}

export default Portfolio