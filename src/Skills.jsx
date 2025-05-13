import './App.css';
import { useState } from 'react';

export function Skills() {
    const [skillInfo, setSkillInfo] = useState({skillez: '', level: ''});

    function handleChange(e) {
        const { id, value } = e.target;
        setSkillInfo((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    return(
     <>
        <form className='daddy-skills'>
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "50px", width: "90%"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='skillez'>Skill</label>
                    <input className='inputs' type='text' id='skillez' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='level'>Level</label>
                    <select className='inputs' type='text' id='level' onChange={handleChange}>
                        <option value={""}>Select</option>
                        <option value={"expert"}>Expert</option>
                        <option value={"experienced"}>Experienced</option>
                        <option value={"skillfull"}>Skillfull</option>
                        <option value={"intermediate"}>Intermediate</option>
                        <option value={"beginner"}>Beginner</option>
                    </select>
                </div>
            </div>
        </form>
     </> 
    )
}