import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
   return (
    <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
   )
}
export default Counter;