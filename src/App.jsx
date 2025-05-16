import { useState } from 'react'
import { CoolHover } from './coolHover.jsx'
import { BasicForm } from './basicForm.jsx';
import { Work } from './Work.jsx';
import { Skills } from './Skills.jsx';
import { Education } from './Education.jsx';
import './App.css'

function App() {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [basicInfo, setBasicInfo] = useState({
          img: null,
          imgURL: null,
          Fname: '',
          Lname: '',
          email: '',
          address: '',
          phone: '',
          zipCode: '',
          city: '',
          date: '', 
          gender: ''
      });

  function addSkills() {
  setSkills((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      skillez: '',
      level: ''
    }
  ]);
}

  function updateSkill(id, newData) {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, ...newData } : skill
      )
    );
    console.log(skills);
  }
  
  function removeSkills() {
    if(skills.length !== 0) {
      setSkills((prevSkills) => prevSkills.slice(0, -1));
    }
  }

  function addWork() {
    setWork((prev) => [...prev, prev.length + 1]);
  }

  function removeWork() {
    if(work.length !== 0) {
      setWork((prev) => prev.slice(0, -1));
    }
  }

  function addEducation() {
    setEducation((prev) => [...prev, prev.length + 1]);
  }

  function removeEducation() {
    if(education.length !== 0) {
      setEducation((prev) => prev.slice(0, -1));
    }
  }

  return (
    <>
      <div className='daddyApp' onPointerMove={e => setPosition({x: e.clientX, y: e.clientY})}>
        <CoolHover position={position}/>
        <h1 className='welcome'>Welcome to Immortal CV maker</h1>
        <div className='shape'></div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className='basicDiv'>
              <BasicForm basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          </div>

            <div className='educationForm'>
              <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{borderBottom: "3px solid white", width: "90%"}}>
                  <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px", color: "white"}}>Education</h1>
              </div>
            </div>
            {education.map((ele, index) => {
              return <Education key={index}/>
            })}
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{display: "flex", justifyContent: "center", width: "90%", gap: "20px"}}>
                <button className='addMoreBtn' onClick={addEducation}>Add Education</button>
                <button className='removeBtn' onClick={removeEducation}>Delete</button>
              </div>
            </div>
            </div>

          <div className='skillsForm'>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{borderBottom: "3px solid white", width: "90%"}}>
                  <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px", color: "white"}}>Skills</h1>
              </div>
            </div>
            {skills.map((ele) => {
              return <Skills key={ele.id} id={ele.id} skillez={ele.skillez} level={ele.level} onUpdate={updateSkill} />;
            })}
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{display: "flex", justifyContent: "center", width: "90%", gap: "20px"}}>
                <button className='addMoreBtn' onClick={addSkills}>Add a Skill</button>
                <button className='removeBtn' onClick={removeSkills}>Delete</button>
              </div>
            </div>
          </div>

          <div className='workForm'>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{borderBottom: "3px solid white", width: "90%"}}>
                  <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px", color: "white"}}>Work Experience</h1>
              </div>
            </div>
            {work.map((ele, index) => {
              return <Work key={index}/>
            })}
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{display: "flex", justifyContent: "center", width: "90%", gap: "20px"}}>
                <button className='addMoreBtn' onClick={addWork}>Add Work Experience</button>
                <button className='removeBtn' onClick={removeWork}>Delete</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
