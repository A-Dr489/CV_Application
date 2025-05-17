import './App.css';
import { useState } from 'react';

export function Work({ id, title, company, place, startDate, endDate, description, updateWork, onCheek }) {
    const [isChecked, setIsChecked] = useState(false);

    function handleChange(e) {
        updateWork(id, { [e.target.name]: e.target.value });
        if(!isChecked && endDate == "present") {
            onCheek(false, id)
        }
    }

    function handleOnChange(e) {
        setIsChecked(e.target.checked);
        onCheek(true, id);
    }

    return(
     <>
        <form className='daddy-skills'>
            <div className='work-xp'>
                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5}}>
                    <label htmlFor='title'>Job Title/Possition</label>
                    <input className='inputs' type='text' name='title' id='title' value={title} onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='company'>Company Name</label>
                    <input className='inputs' type='text' name='company' id='company' value={company} onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='place'>City/Town</label>
                    <input className='inputs' value={place} type='text' name='place' id='place' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='startDate'>Start</label>
                    <input className='inputs' type='date' value={startDate} name='startDate' id='startDate' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='endDate'>End</label>
                    <div style={{display: "flex", gap: "20px"}}>
                        {isChecked? <h3>Nice</h3> : <input className='inputs' type='date' value={endDate} name='endDate' id='endDate' style={{flex: 1}} onChange={handleChange}></input>}
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label htmlFor='present'>Present</label>
                            <input type='checkbox' id='present' checked={isChecked} onChange={handleOnChange}></input>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5, marginTop: "20px"}}>
                    <label htmlFor='description'>Description</label>
                    <textarea className='inputs' value={description} style={{paddingBottom: "50px", resize: "none"}} name='description' id='description' onChange={handleChange}></textarea>
                </div>
            </div>
        </form>
     </>
    )
}