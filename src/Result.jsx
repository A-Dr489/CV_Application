import './App.css';

export function Result({ basic, education, skills, work }) {

    return(
     <>
        <div className='daddy-PDF'>
            <div>
                {basic.imgURL != null? <div className='personal'>
                    <img className='img-CV' src={basic.imgURL}></img>
                    <div style={{marginTop: "10px"}}>
                        <h1 style={{margin: "0px", lineHeight: "13px"}}>{basic.Fname && basic.Lname? basic.Fname + " " + basic.Lname : "Name"}</h1>
                        <p>{basic.email} | {basic.phone} | {basic.gender} | {basic.date}</p>
                        <p>{basic.address}</p>
                    </div>
                </div> : <div className='personal' style={{textAlign: "center"}}>
                    <div style={{marginTop: "10px"}}>
                        <h1 style={{margin: "0px", lineHeight: "13px"}}>{basic.Fname && basic.Lname? basic.Fname + " " + basic.Lname : "Name"}</h1>
                        <p>{basic.email} | {basic.phone} | {basic.gender} | {basic.date}</p>
                        <p>{basic.address}</p>
                    </div>
                </div>}
            </div>

            <div className='edu'>
                <div style={{display: "flex", borderBottom: "1px solid black", width: "90%"}}>
                    <h2 style={{lineHeight: 0, fontWeight: "normal"}}>Education</h2>
                </div>

                {education.map((data) => {
                    return <div className='edu-content'>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2 style={{lineHeight: "12px", fontWeight: "normal"}}>{data.uni}</h2>
                        <p>{data.startDat} - {data.endDat}</p>
                    </div>
                    
                    <p style={{lineHeight: 0, margin: 0, paddingBottom: "30px", fontSize: "1.4em"}}>{data.degree}</p>
                    <p style={{lineHeight: 0, margin: 0, paddingBottom: "20px"}}>{data.Town}</p>
                    <p>{data.Descript}</p>
                </div>
                })}
            </div>

            <div className='sk'>
                <div style={{display: "flex", borderBottom: "1px solid black", width: "90%"}}>
                    <h2 style={{lineHeight: 0, fontWeight: "normal"}}>Skills</h2>
                </div>

                <div className='skill-grid'>
                    {skills.map((data) => {
                        return <p>{data.skillez}: {data.level}</p>
                    })}
                </div>
            </div>

            <div className='wk'>
                <div style={{display: "flex", borderBottom: "1px solid black", width: "90%"}}>
                    <h2 style={{lineHeight: 0, fontWeight: "normal"}}>Experience</h2>
                </div>

                {work.map((data) => {
                    return <div style={{width: "90%"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2 style={{lineHeight: "12px", fontWeight: "normal"}}>{data.title}</h2>
                        <p>{data.startDate} - {data.endDate}</p>
                    </div>
                    <h2 style={{ fontWeight: "normal", fontSize: "large", margin: 0}}>{data.company}</h2>
                    <p>{data.place}</p>
                    <p style={{marginBottom: "50px"}}>{data.description}</p>
                </div>
                })}
            </div>
            
        </div>
     </>
    )
}