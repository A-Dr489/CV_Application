import './App.css';
import { useState } from 'react';

export function Work() {
    const [isChecked, setIsChecked] = useState(false);
    const [workInfo, setWorkInfo] = useState({
        title: '',
        company: '',
        place: '',
        startDate: '',
        endDate: '',
        description: ''
    });

    function handleChange(e) {
        const {id, value} = e.target;
        setWorkInfo((prev) => ({
            ...prev,
            [id]: value
        }))
        if(!isChecked && workInfo.endDate == "present") {
            setWorkInfo((prev) => ({
                ...prev,
                endDate: ''
            }))
        }
        console.log(workInfo)
    }

    function handleOnChange(e) {
        setIsChecked(e.target.checked);
        setWorkInfo((prev) => ({
            ...prev,
            endDate: "present"
        }))
    }

    return(
     <>
        <form className='daddy-skills'>
            <div className='work-xp'>
                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5}}>
                    <label htmlFor='title'>Job Title/Possition</label>
                    <input className='inputs' type='text' id='title' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='company'>Company Name</label>
                    <input className='inputs' type='text' id='company' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='place'>City/Town</label>
                    <input className='inputs' type='text' id='place' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='startDate'>Start</label>
                    <input className='inputs' type='date' id='startDate' onChange={handleChange}></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='endDate'>End</label>
                    <div style={{display: "flex", gap: "20px"}}>
                        {isChecked? <h3>Nice</h3> : <input className='inputs' type='date' id='endDate' style={{flex: 1}} onChange={handleChange}></input>}
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label htmlFor='present'>Present</label>
                            <input type='checkbox' id='present' checked={isChecked} onChange={handleOnChange}></input>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5, marginTop: "20px"}}>
                    <label htmlFor='description'>Description</label>
                    <textarea className='inputs' style={{paddingBottom: "50px", resize: "none"}} id='description' onChange={handleChange}></textarea>
                </div>
            </div>
        </form>
     </>
    )
}