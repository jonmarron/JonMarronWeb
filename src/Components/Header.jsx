import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import TypewriterComponent from 'typewriter-effect'

const Header = () => {

  const positionsArray = ['UX/UI Designer', 'Frontend Developer', 'Backend Developer'];
  
  return (
    <header>
      
        <h1>Hi! My name is <span className="accent-text">Jon</span><br/>and I am a<br/><span className="accent-text">
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
        <div className="scroll-animation">
          <FontAwesomeIcon icon={faChevronDown} size='2x'/>
        </div>
    </header>
  )
}

export default Header