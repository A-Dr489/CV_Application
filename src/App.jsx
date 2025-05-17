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
  const [work, setWork] = useState([]);

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
  }
  
  function removeSkills() {
    if(skills.length !== 0) {
      setSkills((prevSkills) => prevSkills.slice(0, -1));
    }
  }

  function addWork() {
    setWork((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(), 
      title: '',
      company: '',
      place: '',
      startDate: '',
      endDate: '',
      description: ''
    }
   ]);
  }

  function updateWork(id, newData) {
    setWork((prev) =>
      prev.map((worke) =>
        worke.id === id ? { ...worke, ...newData } : worke
      )
    );
  }

  function updateCheck(ez, id) {
    if(ez) {
      setWork((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, endDate: "present" } : skill
      )
    );
    } else {
      setWork((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, endDate: "" } : skill
      )
    );
    }
  }

  function removeWork() {
    if(work.length !== 0) {
      setWork((prev) => prev.slice(0, -1));
    }
  }

  function updateEdu(id, newData) {
    setEducation((prev) =>
      prev.map((edu) =>
        edu.id == id? {...edu, ...newData} : edu
      )
    )
  }

  function updateCheek(ez, id) {
    if(ez) {
      setEducation((prev) => prev.map((edu) => edu.id == id? {...edu, endDat: "present"} : edu) );
    } else {
      setEducation((prev) => prev.map((edu) => edu.id == id? {...edu, endDat: ""} : edu) );
    }
  }

  function addEducation() {
    setEducation((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(), 
      degree: '',
      Town: '',
      uni: '',
      startDat: '',
      endDat: '',
      Descript: ''
    }
   ]);
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
            {education.map((ele) => {
              return <Education key={ele.id} id={ele.id} degree={ele.degree} Town={ele.Town} uni={ele.uni} startDat={ele.startDat} endDat={ele.endDat} Descript={ele.Descript} update={updateEdu} cheek={updateCheek}/>
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
              return <Skills key={ele.id} id={ele.id} skillez={ele.skillez} onUpdate={updateSkill} />;
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
            {work.map((ele) => {
              return <Work key={ele.id} id={ele.id} title={ele.title} company={ele.company} place={ele.place} startDate={ele.startDate} endDate={ele.endDate} description={ele.description} updateWork={updateWork} onCheek={updateCheck}/>
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
