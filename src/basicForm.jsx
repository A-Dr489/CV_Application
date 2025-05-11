import './App.css';

export function BasicForm() {

    return(
     <>
        <form className='daddy-form'>
            <div style={{borderBottom: "3px solid white", width: "90%"}}>
                <h1 style={{fontSize: 3 + "em", textAlign: "left", lineHeight: 1, marginTop: "50px"}}>Personal Details</h1>
            </div>
            <div className='personal-info'>
                <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                    <div style={{backgroundColor: 'black', width: "150px", height: "150px"}}></div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gridColumnStart: 2, gridColumnEnd: 4, paddingRight: "25px"}}>
                    <label>First Name</label>
                    <input type='text' className="inputs"></input><br /> 
                    <label>First Last</label>
                    <input type='text' className="inputs"></input>
                </div>

                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gridColumnStart: 1, gridColumnEnd: 3, paddingRight: "25px"}}>
                    <label>Email Address</label>
                    <input type='email' className="inputs"></input> <br />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <label>Address</label>
                        <input type='email' className="inputs"></input>
                    </div>
                    
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <label>Phone Number</label>
                    <input type='tel' className="inputs"></input> <br />
                    <label>Zip Code</label>
                    <input type='text' className="inputs"></input>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginLeft: "3px"}}>City/Town</label>
                    <input type='text' className="inputs"></input>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginLeft: "3px"}}>Date of Birth</label>
                    <input type='date' className="inputs"></input>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginLeft: "3px"}}>Gender</label>
                    <select className="inputs">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
        </form>   
     </>
    )
}