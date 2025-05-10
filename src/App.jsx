import { useState } from 'react'
import { CoolHover } from './coolHover.jsx'
import { BasicForm } from './basicForm.jsx';
import './App.css'

function App() {
  const [position, setPosition] = useState({x: 0, y: 0});
  

  return (
    <>
      <div className='daddyApp' onPointerMove={e => setPosition({x: e.pageX, y: e.pageY})}>
        <CoolHover position={position}/>
        <h1 className='welcome'>Welcome to Immortal CV maker</h1>
        <div className='shape'></div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div className='formDiv'>
              <BasicForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
