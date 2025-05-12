import './App.css';
import { useState } from 'react';

export function BasicForm() {
    const [submited, setSubmitied] = useState(false);
    const [basicInfo, setBasicInfo] = useState({
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

    function handleChange(e) {
        const { id, value } = e.target;
        setBasicInfo((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setSubmitied(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitied(true);
        if(handleFname() == "First Name*" && handleLname() == "Last Name*") {
            console.log(basicInfo);
        }
    }

    function handleFname() {
        if(basicInfo.Fname.trim().length == 0) {
            return "First name is required";
        } else if(basicInfo.Fname.trim().length < 4) {
            return "First Name Should Be At least 4 character";
        } else if(/[^a-zA-Z\s]/.test(basicInfo.Fname)) {
            return "Can't contain number or symbol";
        } else {
            return "First Name*";
        }
    }

    function handleLname() {
        if(basicInfo.Lname.length == 0) {
            return "Last name is required";
        } else if(basicInfo.Lname.length < 4) {
            return "Last Name Should Be At least 4 character";
        } else if(/[^a-zA-Z\s]/.test(basicInfo.Lname)) {
            return "Can't contain number or symbol";
        } else {
            return "Last Name*";
        }
    }

    return(
     <>
        <form className='daddy-form' onSubmit={handleSubmit}>
            <div style={{borderBottom: "3px solid white", width: "90%"}}>
                <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px"}}>Personal Details</h1>
            </div>
            <div className='personal-info'>
                <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                    <div style={{backgroundColor: 'black', width: "150px", height: "150px"}}></div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gridColumnStart: 2, gridColumnEnd: 4, paddingRight: "25px"}}>
                    <label htmlFor='Fname'>{submited? handleFname() : "First Name*"}</label>
                    <input type='text' id='Fname' value={basicInfo.Fname.trim()} className="inputs" onChange={handleChange} required></input><br /> 
                    <label htmlFor='Lname'>{submited? handleLname() : "Last Name*"}</label>
                    <input type='text' id='Lname' value={basicInfo.Lname} className="inputs" onChange={handleChange} required></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gridColumnStart: 1, gridColumnEnd: 3, paddingRight: "25px"}}>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' value={basicInfo.email} className="inputs" onChange={handleChange} required></input> <br />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <label htmlFor='address'>Address</label>
                        <input type='text' id='address' value={basicInfo.address} className="inputs" onChange={handleChange} required></input>
                    </div>
                    
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' id='phone' value={basicInfo.phone} className="inputs" onChange={handleChange} required></input> <br />
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input type='text' id='zipCode' value={basicInfo.zipCode} className="inputs" onChange={handleChange} required></input>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='city' style={{marginLeft: "3px"}}>City/Town</label>
                    <input type='text' id='city' value={basicInfo.city} className="inputs" onChange={handleChange} required></input>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='date' style={{marginLeft: "3px"}}>Date of Birth</label>
                    <input type='date' id='date' value={basicInfo.date} className="inputs" onChange={handleChange} required></input>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='gender' style={{marginLeft: "3px"}}>Gender</label>
                    <select id='gender' className="inputs" value={basicInfo.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type='submit' className='submitBtn'>Submit</button>
            </div>
        </form>   
     </>
    )
}