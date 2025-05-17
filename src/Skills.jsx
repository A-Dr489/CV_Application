import './App.css';
import { useState } from 'react';

export function Skills({ id, skillez, onUpdate }) {

    function handleChange(e) {
        onUpdate(id, { [e.target.name]: e.target.value });
    }

    return(
     <>
        <form className='daddy-skills'>
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "50px", width: "90%"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='skillez'>Skill</label>
                    <input className='inputs' name='skillez' type='text' value={skillez} id='skillez' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='level'>Level</label>
                    <select className='inputs' type='text' name='level' id='level' onChange={handleChange}>
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