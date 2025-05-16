import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function BasicForm({basicInfo, setBasicInfo}) {
    const [submited, setSubmitied] = useState(false);
    
    useEffect(() => {
        return () => {
            if (basicInfo.imgURL) {
                URL.revokeObjectURL(basicInfo.imgURL);
            }
        };
    }, [basicInfo.imgURL]);

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

    function handleImg(e) {
        const file = e.target.files[0];
        setBasicInfo((prev) => {
            if (prev.imgURL) URL.revokeObjectURL(prev.imgURL);
            if (file?.type === 'image/png') {
                const url = URL.createObjectURL(file);
                return { ...prev, img: file, imgURL: url };
            } else {
                return { ...prev, img: '', imgURL: null };
            }
        });
    }

    return(
     <>
        <form className='daddy-form' onSubmit={handleSubmit}>
            <div style={{borderBottom: "3px solid white", width: "90%"}}>
                <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px"}}>Personal Details</h1>
            </div>
            <div className='personal-info'>
                <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                    <label htmlFor='uploadImg' className='uploadImg'>
                        <label htmlFor='uploadImg' style={{cursor: "pointer", textAlign: "center", fontSize: "1.2em"}}>Upload Image</label>
                        <input type='file' id='uploadImg' onChange={handleImg} style={{display: "none"}}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
                                <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                    </label>
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