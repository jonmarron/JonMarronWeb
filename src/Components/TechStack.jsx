import React from 'react'

const TechStack = () => {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,3,4,5,6];
  return (
    <section className='' id='tech-stack'>
      <h2>Tech <span className='accent-text'>Stack</span> &<br/> Design <span className='accent-text'>Toolkit</span></h2>

      <div className="logo-carousel">
        <div className="gradient start"></div>
        <div className="gradient end"></div>
        <div className='carousel'>
          {array.map(number => {
            return (
              <img src={'TechStack/techstack_icon_' +number + '.png'}></img>
              )
            })}
        </div>
      </div>
      <p>Proficient in programming languages and design software, I bring a unique blend of technical expertise and creative skills to deliver exceptional digital solutions.</p>
    </section>
    )
}

export default TechStack