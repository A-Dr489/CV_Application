import './App.css';

export function Skills() {

    return(
     <>
        <form className='daddy-skills'>
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "50px", width: "90%"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='skill'>Skill</label>
                    <input className='inputs' type='text' id='skill'></input>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor='level'>Level</label>
                    <select className='inputs' type='text' id='level'>
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