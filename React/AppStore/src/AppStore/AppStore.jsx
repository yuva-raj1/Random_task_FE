import React, { useState } from "react";
import "./AppStore.css"
 function AppStore(props){
    const {data}=props
     const[val,setval]=useState(data)
    const btnclk=(ele)=>{
        if(ele.target.textContent=='All'){setval(data)}
        else{
            let filterdata=data.filter((item)=> item.category==ele.target.textContent )
            setval(filterdata)
        }
    }
    const searchType =(i)=>{
        let searchData=data.filter((card)=> card.name.toLowerCase().includes(i.target.value.toLowerCase()))
        setval(searchData)
    }
    return(
        <div>
            <div className="navigation">
                <h1>AppStore</h1>
                <input type="search" onChange={searchType} />
            </div>
            <div className="btn-container">
                <button onClick={btnclk}>All</button>
                <button onClick={btnclk}>Entertainment</button>
                <button onClick={btnclk}>Food</button>
                <button onClick={btnclk}>Travel</button>
                <button onClick={btnclk}>Finance</button>
            </div>
            <div className="cards_Container">
               { val.length==0?
                (<h1>No data found</h1>)               
               :
                (
                val.map((data)=>(
                <div className="card" key={data.id}>
                    <img src={data.image} alt={data.name}/>
                    <h5>{data.name}</h5>
                </div>
               )) )
            }
            </div>
        </div>
    )
 }
 export default AppStore;