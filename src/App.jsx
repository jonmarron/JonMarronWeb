import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import FullstackFusion from './Components/FullstackFusion/FullstackFusion'
import ToolAccess from './Components/ToolAccess'
import TechStack from './Components/TechStack'
import Resume from './Components/Resume'
import Contact from './Components/Contact/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faBars, faX} from '@fortawesome/free-solid-svg-icons'
import Reviews from './Components/Reviews/Reviews'
import Portfolio from './Components/Portfolio/Portfolio'

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
  
  // if (screenSize.width < 1300){
  //   return <Header message={'Responsivenes is still in Progress, please switch to a bigger screen.'}/>
  // }

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
              <a href="#portfolio">
                <li>My <span className="accent-text">Works</span></li>
              </a>
              <a href="#resume">
                <li>Professional <span className="accent-text">Experience & Education</span></li>
              </a>
              {/* <a href="#reviews">
                <li>What <span className="accent-text">people</span> say</li>
              </a> */}
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
      </div>
      <Header/>
      <FullstackFusion/>
      <TechStack/>
      <Portfolio/>
      <Resume/>
      <Reviews/>
      <Contact/>
      <div className="copyright">Hand coded with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/jonmarron" target='_blank'>Jon Ladron de Guevara</a></div>
    </>
  )
}

export default App
