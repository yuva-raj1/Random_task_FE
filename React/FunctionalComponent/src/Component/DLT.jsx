import { useState } from "react"

function DLT(){
    const[mode,setMode]=useState(false)
    const btn=()=>{
        setMode(!mode)
    }
    return(
        <div style={{backgroundColor:mode?"black":"white",
                     padding:"20px",height:"100vh"
        }}>
            <h1 style={{color:mode?"white":"black"}}>This is about functional component</h1>
            <button onClick={btn}>{mode?"Light Mode":"Dark Mode"}</button>
        </div>
    )
}
export default DLT