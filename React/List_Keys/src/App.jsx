import React from "react";
import CardsDemo from "./Components/CardsDemo";
function App(){
   const data=[
        {id:1,state:"Delhi",cm:"Rekha Gupta"},
        {id:2,state:"Telangana",cm:"RevanthReddy"},
        {id:3,state:"AndhraPradesh",cm:"Chandrababu Naidu"},
        {id:4,state:"TamilNadu",cm:"VijayJoseph"},
        {id:5,state:"Kerala",cm:"Satheesan "},
        {id:6,state:"Karnataka",cm:"Siddaramaiah"},
        {id:7,state:"Dehradun",cm:"Pushkar Singh Dhami "}
    ]
  return (
    <div>
      <CardsDemo data={data}/>
    </div>
  )
}
export default App;