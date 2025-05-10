import { useState } from 'react'
import { CoolHover } from './coolHover.jsx'
import './App.css'

function App() {
  const [position, setPosition] = useState({x: 0, y: 0});

  return (
    <>
      <div className='daddyApp' onPointerMove={e => setPosition({x: e.clientX, y: e.clientY})}>
        <CoolHover position={position}/>
      </div>
    </>
  )
}

export default App
