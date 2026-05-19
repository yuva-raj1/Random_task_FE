import React, { useState } from "react";
import "./Appdemo.css"
function Appdemo(props){
    // const [val,setval]=useState("")
    const {demodata} =props
    const[data,setdata]=useState(demodata)
    const delbtn=(i)=>{
        let filterdata=data.filter(it=> it.id!=i)
        setdata(filterdata)
    }
//    const searchType=(ele)=> setval(ele.target.value)
//    let filteredData= data.filter(card=>card.name.toLowerCase().includes(val.toLowerCase()))
       const searchType=((ele)=>{
        let filteredData=data.filter((card)=>card.name.toLowerCase().includes(ele.target.value.toLowerCase()))
        setdata(filteredData)
       })
    return(
        <div>
            <div className="nav_bar">
                <h1>Appdemo</h1>
                <input type="search" onChange={searchType}/>
            </div>
            <div className="appcardscontainer">
                {
                 data.length==0?
                 (<h1>no data found</h1>):
                 (
                     data.map((demodata)=>(
                        <div className="appcards" key={demodata.id}>
                            <img src={demodata.image}/>
                            <h1>{demodata.name}</h1>
                            <button onClick={()=>delbtn(demodata.id)}>Delete</button>
                        </div>
                        ))
                )
                }
            </div>
        </div>
    )
}
export default Appdemo