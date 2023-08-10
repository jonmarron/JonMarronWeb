import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

  const positionsArray = ['UX/UI Designer', 'Frontend Developer', 'Backend Developer'];
  
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositionIndex(prevIndex => (prevIndex + 1) % positionsArray.length);
    }, 1500);  
    return () => clearInterval(interval)
  }, [])
  

  return (
    <header>
        <h1>Hi! My name is <span className="accent-text">Jon</span><br/>and I am a<br/><span className="accent-text">{positionsArray[currentPositionIndex]}</span></h1>
        <div className="scroll-animation">
          <FontAwesomeIcon icon={faChevronDown} size='2x'/>
        </div>
    </header>
  )
}

export default Header