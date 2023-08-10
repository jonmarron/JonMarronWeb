import React from 'react'

const Competency = ({imagePath, headline, text}) => {
  return (
    <div className='competency'>
      <img src={imagePath} className='competency-icon'  />
      <h3>{headline}</h3>
      <p className="bullets">{text}</p>
    </div>
  )
}

export default Competency