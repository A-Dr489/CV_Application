import './App.css';
import { useState } from 'react';

export function Work() {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange(e) {
        setIsChecked(e.target.checked);
    }

    return(
     <>
        <form className='daddy-skills'>
            <div className='work-xp'>
                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5}}>
                    <label htmlFor='title'>Job Title/Possition</label>
                    <input className='inputs' type='text' id='title' ></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='cName'>Company Name</label>
                    <input className='inputs' type='text' id='cName' ></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='place'>City/Town</label>
                    <input className='inputs' type='text' id='place' ></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 3}}>
                    <label htmlFor='startDate'>Start</label>
                    <input className='inputs' type='date' id='startDate' ></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 3, gridColumnEnd: 5}}>
                    <label htmlFor='endDate'>End</label>
                    <div style={{display: "flex", gap: "20px"}}>
                        {isChecked? <h3>Nice</h3> : <input className='inputs' type='date' id='endDate' style={{flex: 1}} ></input>}
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label htmlFor='present'>Present</label>
                            <input type='checkbox' id='present' checked={isChecked} onChange={handleOnChange}></input>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", gridColumnStart: 1, gridColumnEnd: 5, marginTop: "20px"}}>
                    <label htmlFor='des'>Description</label>
                    <textarea className='inputs' style={{paddingBottom: "50px", resize: "none"}} id='des'></textarea>
                </div>
            </div>
        </form>
     </>
    )
}