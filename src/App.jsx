import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import FullstackFusion from './Components/FullstackFusion'
import ToolAccess from './Components/ToolAccess'
import TechStack from './Components/TechStack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <FullstackFusion/>
      <TechStack/>
      <ToolAccess/>
    </>
  )
}

export default App
