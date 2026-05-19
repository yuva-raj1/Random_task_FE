import { useState } from "react"
import "./calculator.css"
function Calculator(){
    const[val,setValue]=useState("")
    const sambtn=(ele)=>{
            if(  ["+","-","*","/","%"].includes( val[val.length - 1])  &&
                 ["+","-","*","/","%"].includes(ele.target.textContent) ){
                setValue(
                    val.slice(0,val.length-1)+ele.target.textContent
                )
             }
            else{
             setValue(val+ele.target.textContent)
            }
    }
    const delbtn=()=>{
        setValue(val.slice(0,val.length-1))
    }
    const evalbtn=()=>{
        setValue(eval(val).toString())
    }
    return (
        <div className="calci">
            <div className="res">
                {val}
            </div>
            <div>
                <button onClick={()=>{setValue("")}}>AC</button>
                <button onClick={delbtn}>DEL</button>
                <button onClick={sambtn}>%</button>
                <button onClick={sambtn}>/</button>
            </div>
            <div>
                <button onClick={sambtn}>9</button>
                <button onClick={sambtn}>8</button>
                <button onClick={sambtn}>7</button>
                <button onClick={sambtn}>*</button>
            </div>
            <div>
                <button onClick={sambtn}>6</button>
                <button onClick={sambtn}>5</button>
                <button onClick={sambtn}>4</button>
                <button onClick={sambtn}>-</button>
            </div>
            <div>
                <button onClick={sambtn}>3</button>
                <button onClick={sambtn}>2</button>
                <button onClick={sambtn}>1</button>
                <button onClick={sambtn}>+</button>
            </div>
            <div>
                <button onClick={sambtn}>0</button>
                <button onClick={sambtn}>00</button>
                <button onClick={sambtn}>.</button>
                <button onClick={evalbtn}>=</button>
            </div>
        </div>
    )
}
export default Calculator;