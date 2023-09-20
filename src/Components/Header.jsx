import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHourglass2 } from '@fortawesome/free-solid-svg-icons'
import TypewriterComponent from 'typewriter-effect'

const Header = ({message}) => {

  const positionsArray = ['UX/UI Designer', 'Frontend Developer', 'Backend Developer'];
  
  return (
    <header>
        <h1>Hi! My name is <span className="accent-text">Jon</span> and<br/> I am a Vienna Based<br/><span className="accent-text">
          <TypewriterComponent
              options={{
                strings: positionsArray,
                autoStart:true,
                loop: true,
                cursorClassName: 'cursor',
                deleteSpeed: 'natural',
                pauseFor: 400
              }}
          /></span></h1>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jonladrondeguevara/ " target='_blank'><img src="Links/LinkedIn.svg" alt="" /></a>
            <a href="https://github.com/jonmarron" target='_blank'><img src="Links/GitHub.svg" alt="" /></a>
            {/* <a href="https://github.com/jonmarron" target='_blank'><img src="Links/Codepen.svg" alt="" /></a> */}
          </div>
          {message?(
            <p>{message}</p>
          ):(
            <div className="scroll-animation">
              <FontAwesomeIcon icon={faChevronDown} size='2x'/>
            </div>
          ) }
    </header>
  )
}

export default Header