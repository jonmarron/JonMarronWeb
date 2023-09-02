import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import FullstackFusion from './Components/FullstackFusion'
import ToolAccess from './Components/ToolAccess'
import TechStack from './Components/TechStack'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faBars, faX} from '@fortawesome/free-solid-svg-icons'
import MySocials from './Components/MySocials'
import Quotes from './Components/Quotes'

  const getCurrentDimension = () => {
    return (
      {
        width: window.innerWidth,
        height: window.innerHeight
      }
    )
  }

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    }
    window.addEventListener('resize', updateDimension);
    return (()=>{
      window.removeEventListener("resize",updateDimension);
    }

    )
  }, [screenSize])
  
  if (screenSize.width < 1300){
    return <Header message={'Responsivenes is still in Progress, please switch to a bigger screen.'}/>
  }

  return (
    <>
      <div className="burger-menu" onClick={() => setNavVisible(!navVisible)}>
        {navVisible? (
            <FontAwesomeIcon icon={faX} size='2x' />
          ):(
            <FontAwesomeIcon icon={faBars} size='2x' />
        )}
      </div>
      <div className={`nav ${navVisible? '': 'hidden'}`} onClick={() => setNavVisible(!navVisible)}>
            <ul>
              <a href="#">
                <li>Hi!</li>
              </a>
              <a href="#fullstack-fusion">
                <li><span className="accent-text">Fullstack </span>Fusion</li>
              </a>
              <a href="#tech-stack">
                <li>Tech <span className="accent-text">Stack</span> & Design <span className="accent-text">Toolkit</span></li>
              </a>
              <a href="#resume">
                <li>Professional <span className="accent-text">Experience & Education</span></li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
      </div>
      <div className="copyright">Hand coded with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/jonmarron" target='_blank'>Jon Ladron de Guevara</a></div>
      <Header/>
      <FullstackFusion/>
      <TechStack/>
      <Resume/>
      <Quotes/>
      <Contact/>
      {/* <MySocials/> */}
    </>
  )
}

export default App
