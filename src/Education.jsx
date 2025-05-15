import './App.css';
import { useState } from 'react';

export function Education() {
    const [isChecked2, setIsChecked2] = useState(false);
    const [educationInfo, setEducationInfo] = useState({
        degree: '',
        Town: '',
        uni: '',
        startDat: '',
        endDat: '',
        Descript: ''
    });
    
    function handleChange(e) {
        const {id, value} = e.target;
        setEducationInfo((prev) => ({
            ...prev,
            [id]: value
        }))
        if(!isChecked2 && educationInfo.endDat == "present") {
            setEducationInfo((prev) => ({
                ...prev,
                endDat: ''
            }))
        }
        
    }

    function handleOnChange(e) {
        setIsChecked2(e.target.checked);
        setEducationInfo((prev) => ({
            ...prev,
            endDat: "present"
        }))
    }

    return(
     <>
        <form className='daddy-skills'>
            <div className='edu-xp'>
                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='degree'>Degree</label>
                    <input className='inputs' type='text' id='degree' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='Town'>City/Town</label>
                    <input className='inputs' type='text' id='Town' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5}}>
                    <label htmlFor='uni'>University/School</label>
                    <input className='inputs' type='text' id='uni' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='startDat'>Start</label>
                    <input className='inputs' type='date' id='startDat' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='endDat'>End</label>
                    <div style={{display: "flex", gap: "20px"}}>
                        {isChecked2? <h3>Nice</h3> : <input className='inputs' type='date' id='endDat' style={{flex: 1}} onChange={handleChange}></input>}
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label htmlFor='present'>Present</label>
                            <input type='checkbox' id='present' checked={isChecked2} onChange={handleOnChange}></input>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5, marginTop: "20px"}}>
                    <label htmlFor='Descript'>Description</label>
                    <textarea className='inputs' style={{paddingBottom: "50px", resize: "none"}} id='Descript' onChange={handleChange}></textarea>
                </div>
            </div>
        </form>
     </>
    )
}