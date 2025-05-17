import './App.css';
import { useState } from 'react';

export function Education({id, degree, Town, uni, startDat, endDat, Descript, update, cheek}) {
    const [isChecked2, setIsChecked2] = useState(false);
    
    function handleChange(e) {
        update(id, { [e.target.name]: e.target.value });
        if(!isChecked2 && endDat == "present") {
            cheek(false, id)
        }
    }

    function handleOnChange(e) {
        setIsChecked2(e.target.checked);
        cheek(true, id);
    }

    return(
     <>
        <form className='daddy-skills'>
            <div className='edu-xp'>
                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='degree'>Degree</label>
                    <input className='inputs' type='text' value={degree} name='degree' id='degree' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='Town'>City/Town</label>
                    <input className='inputs' type='text' value={Town} name='Town' id='Town' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5}}>
                    <label htmlFor='uni'>University/School</label>
                    <input className='inputs' type='text' value={uni} name='uni' id='uni' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='startDat'>Start</label>
                    <input className='inputs' type='date' value={startDat} name='startDat' id='startDat' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='endDat'>End</label>
                    <div style={{display: "flex", gap: "20px"}}>
                        {isChecked2? <h3>Nice</h3> : <input className='inputs' type='date' value={endDat} name='endDat' id='endDat' style={{flex: 1}} onChange={handleChange}></input>}
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label htmlFor='present'>Present</label>
                            <input type='checkbox' id='present' checked={isChecked2} onChange={handleOnChange}></input>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5, marginTop: "20px"}}>
                    <label htmlFor='Descript'>Description</label>
                    <textarea className='inputs' style={{paddingBottom: "50px", resize: "none"}} value={Descript} name='Descript' id='Descript' onChange={handleChange}></textarea>
                </div>
            </div>
        </form>
     </>
    )
}