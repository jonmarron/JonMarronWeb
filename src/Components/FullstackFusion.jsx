import React from 'react'
import Competency from './Competency'

const FullstackFusion = () => {

  const competencies = [
    {
      imagePath: 'icon_design.svg',
      headline: 'UX/UI Design',
      text: 'Captivating designs that breathe life into brands, ensuring your online presence stands out.'
    },
    {
      imagePath: 'icon_frontend.svg',
      headline: 'Frontend Development',
      text: 'Elevate user experiences with seamless, intuitive interfaces and cutting-edge technologies.'
    },
    {
      imagePath: 'icon_backend.svg',
      headline: 'Backend Development',
      text: 'Powering web applications with robust backend architecture for security and scalability.'
    }
  ]

  return (
    <section>
      <div className="text-content">
        <h2>
        Empowering Vision and Code:<br/>The <span className="accent-text">Fullstack Fusion</span> of<br/>Design and Development
        </h2>
        <p>No more saying “move that to the right” to developers<br/> or ”that can't be done” to designers!!</p>
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