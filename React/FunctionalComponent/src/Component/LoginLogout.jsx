import { useState } from "react";

function LoginLogout(){
    const[val,setValue]=useState(false)
    const btn=()=>{
        setValue(!val)
    }
    return (
        <div>
             <h1>{val?"This is Login page":"This is Logout page"}</h1>
             <button onClick={btn}>{val?"Logout":"Login"}</button>
        </div>
    )
}
export default LoginLogout;