import React from "react"
import {useState,useEffect} from "react"
import "../App.css"
function Products(){
    const [data,setData]=useState([])
    const [value,setValue]=useState("")
    const [status,setStatus]=useState(false)
    useEffect(()=>{
        async function fetchdata(){
            try {
                setStatus(true)
                let resp=await fetch("https://fakestoreapi.com/products")
                let res= await resp.json()
                setData(res)
                setStatus(false)
            } catch (error) {
                console.log(error)
                setStatus(false)
            }
        }
        fetchdata()
    },[])
    const onBtn= async (event)=>{
        if(event.target.textContent=="All"){
            setStatus(true)
                let resp=await fetch("https://fakestoreapi.com/products")
                let res= await resp.json()
                setData(res)
                setStatus(false)
        }
        else{
            setStatus(true)
                let resp=await fetch(`https://fakestoreapi.com/products/category/${event.target.textContent}`)
                let res=await resp.json()
                setData(res)
                setStatus(false)
        }
    }
    const filteredData=data.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
  return(
    <div className="products-container">
        <div className="btn-container">
        <button onClick={onBtn}>All</button>
        <button onClick={onBtn}>men's clothing</button>
        <button onClick={onBtn}>women's clothing</button>
        <button onClick={onBtn}>electronics</button>
        <button onClick={onBtn}>jewelery</button>
        </div>
        <br/>
        <input type="search" onChange={(event)=>{
            setValue(event.target.value)
        }}/> <br/><br/><br/>
        {   status?(<h1>Loading . . . </h1>):
        (   filteredData.length==0?(<h1 className="message">No product found</h1>):
            ( 
            <div className="cards-container">{
                filteredData.map((item)=>(
                    <div className="card" key={item.id}>
                        <img src={item.image} width="200px"/>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
            ) )
            }
            </div>
          )
        )  
        }
    </div>
  )
}
export default Products