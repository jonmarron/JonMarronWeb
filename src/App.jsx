import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import FullstackFusion from './Components/FullstackFusion'
import ToolAccess from './Components/ToolAccess'
import TechStack from './Components/TechStack'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

  const getCurrentDimension = () => {
    return (
      {
        width: window.innerWidth,
        height: window.innerHeight
      }
    )
  }

function App() {
  const [count, setCount] = useState(0)
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
      <Header/>
      <FullstackFusion/>
      <TechStack/>
      <Resume/>
      <Contact/>
      <ToolAccess/>
    </>
  )
}

export default App
