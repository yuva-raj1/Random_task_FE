import React from "react";
import AppStore  from "./AppStore/AppStore";
import Appdemo from "./Appdemo/Appdemo";

const data= 
  [
  {
    "id": 1,
    "name": "Netflix",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    "id": 2,
    "name": "Spotify",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    "id": 3,
    "name": "YouTube",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
  },
  {
    "id": 4,
    "name": "Disney Plus",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
  },
  {
    "id": 5,
    "name": "Amazon Prime",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
  },

  {
    "id": 6,
    "name": "Swiggy",
    "category": "Food",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
  },
  {
    "id": 7,
    "name": "Zomato",
    "category": "Food",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
  },
  {
    "id": 8,
    "name": "Dominos",
    "category": "Food",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg"
  },
  {
    "id": 9,
    "name": "Burger King",
    "category": "Food",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg"
  },
  {
    "id": 10,
    "name": "KFC",
    "category": "Food",
    "image": "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg"
  },

  {
    "id": 11,
    "name": "Uber",
    "category": "Travel",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  },
  {
    "id": 12,
    "name": "Ola",
    "category": "Travel",
    "image": "https://imgs.search.brave.com/8h9IckpZx2_47vp5m-RDBZqRhR0GcgbPgwtteNHKMbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvb2xhLWxv/Z28tcG5nX3NlZWts/b2dvLTMwNjUyNS5w/bmc"  },
  {
    "id": 13,
    "name": "Airbnb",
    "category": "Travel",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
  },
  {
    "id": 14,
    "name": "MakeMyTrip",
    "category": "Travel",
    "image": "https://imgs.search.brave.com/I19DhAFrXtFPIZDO-3gooHqytwRo1Po5sYePnx4qT9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvbWFrZW15dHJp/cC5zdmc" 
   },
  {
    "id": 15,
    "name": "Booking.com",
    "category": "Travel",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg"
  },

  {
    "id": 16,
    "name": "PhonePe",
    "category": "Finance",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
  },
  {
    "id": 17,
    "name": "Google Pay",
    "category": "Finance",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
  },
  {
    "id": 18,
    "name": "Paytm",
    "category": "Finance",
    "image": "https://imgs.search.brave.com/2no-J2YuHP5CiS0KCoBRho1ifIzMaGO7pF2xrm4NChg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L1BheXRtX0xvZ28t/NTAweDI2Ny5qcGc" 
   },
  {
    "id": 19,
    "name": "PayPal",
    "category": "Finance",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
  },
  {
    "id": 20,
    "name": "Coinbase",
    "category": "Finance",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Coinbase.svg"
  }

]

const demodata=[
  {
     "id": 1,
    "name": "Disney Plus",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"  
  },
  {
   "id": 2,
    "name": "Netflix",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
  },
  {
    "id": 3,
    "name": "YouTube",
    "category": "Entertainment",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
  },
  {
   "id": 4,
    "name": "PhonePe",
    "category": "Finance",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" 
  },
  {
    
    "id": 5,
    "name": "Google Pay",
    "category": "Finance",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
  }
]


 function App(){
  return(
    <div>
      <AppStore  data={data}/>
      {/* <Appdemo demodata={demodata}/> */}
    </div>
  )
 }
 export default App;