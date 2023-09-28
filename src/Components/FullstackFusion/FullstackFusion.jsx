import React from 'react'
import Competency from './Competency'
import { competencies } from '../../data/websiteData'

const FullstackFusion = () => {
  return (
    <section id='fullstack-fusion'>
      <div className="text-content">
        <h2>
        Empowering Vision and Code:<br/>The <span className="accent-text">Fullstack Fusion</span> of<br className='desktop-bp'/> Design <br className='mobile-bp'/>and Development
        </h2>
        <p>No more saying “move that to the right” to developers<b className='desktop-bp'r/> or ”that can't be done” to designers!!</p>
      </div>
      <div className="competencies">
        {competencies.map((competency, index) => {
          return (
            <Competency
              key={index}
              imagePath={competency.imagePath}
              headline={competency.headline}
              text={competency.text}
            />
          )
        })}
        
      </div>

    </section>
  )
}

export default FullstackFusion