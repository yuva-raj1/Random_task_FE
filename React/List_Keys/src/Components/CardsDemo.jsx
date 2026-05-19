import React, { useState } from "react";
import App from "../App.jsx"
function CardsDemo(props){
    const [value,setValue]=useState("")
    //destructing stmts;
    const {data} = props;
    const filtersearch=(event)=>{
            setValue(event.target.value)
    }
    let filteredData=data.filter(ele=>ele.state.toLowerCase().includes(value.toLowerCase()))
    return (
        <div>        
            <input type="search" onChange={filtersearch}/>
           { filteredData.length==0?
             (<h1>Not found data</h1>):
             (filteredData.map(  ele => 
                (
                    <div key={ele.id} style={{backgroundColor:"blue",margin:"5px",padding:"10px"}}>
                        <h1>{ele.state}</h1>
                        <h1>{ele.cm}</h1>
                    </div>
                ) )
        )
           }
        </div>
    )
}
export default CardsDemo;