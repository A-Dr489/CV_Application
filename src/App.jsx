import { useState } from 'react'
import { CoolHover } from './coolHover.jsx'
import { BasicForm } from './basicForm.jsx';
import { Skills } from './Skills.jsx';
import './App.css'

function App() {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [skills, setSkills] = useState([]);

  function addSkills() {
    setSkills((prev) => [...prev, prev.length + 1]);
  }

  return (
    <>
      <div className='daddyApp' onPointerMove={e => setPosition({x: e.pageX, y: e.pageY})}>
        <CoolHover position={position}/>
        <h1 className='welcome'>Welcome to Immortal CV maker</h1>
        <div className='shape'></div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className='basicDiv'>
              <BasicForm />
          </div>

          <div className='skillsForm'>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{borderBottom: "3px solid white", width: "90%"}}>
                  <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px", color: "white"}}>Skills</h1>
              </div>
            </div>
            {skills.map((ele, index) => {
              return <Skills key={index} />;
            })}
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{display: "flex", justifyContent: "center", width: "90%"}}>
                <button className='addMoreBtn' onClick={addSkills}>Add More Skill</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
