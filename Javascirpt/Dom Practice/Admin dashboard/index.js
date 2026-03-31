async function fetchData(){
    let res=await fetch(" http://localhost:3000/Movies")
    try{
        if(!res.ok){
             throw new Error("Smthg went wrong")
    }
    let info=await res.json();
    displayInfo(info);
    }
    catch(error){
        console.log(error)
    }
}
function displayInfo(info){
    let box=document.getElementById("box");
    let movie=document.createElement("div")
    movie.innerHTML=info.map((movies)=>{
        return `
        <p>ID:${movies.id}</p>
        <p>MOVIE:${movies.id}</p>
        <button id="deletemv${movies.id}">DELETE</button>
        <button id="editmv${movies.id}">EDIT</button>`
    }).join("")
    box.appendChild(movie)
    info.forEach(movies => {
        let deletemv=document.getElementById(`deletemv${movies.id}`)
        let editmv=document.getElementById(`editmv${movies.id}`)
        deletemv.onclick=()=>{
            deleteInfo(movies.id);
        }
        editmv.onclick=()=>{
            editInfo(movies.id);
        }
    });
}
//for deleting the info
async function deleteInfo(id) {
    let ans=await fetch(`http://localhost:3000/Movies/${id}`,{"method":"Delete"})
    if(ans.ok){
        alert("Deletion Done..!")
        fetchData();
    }
    else{
        console.log("Oops smthg went wrong")
    }
    
}
//for editing the info
async function editInfo(id){
let name=document.getElementById("movieName")
let date=document.getElementById("releaseDate")
let sol=await fetch(`http://localhost:3000/Movies/${id}`)
let val=await sol.json();
// movieId.value=val.id;
if(name) name.value=val.movieName;
if(date) date.value=val.releaseDate;
}
//Save

async function saveInfo() {
    let mid=document.getElementById("id").value;
    let mvname=document.getElementById("movieName").value;
    let mvimage=document.getElementById("image").value;
    let mvdate=document.getElementById("releaseDate").value;
    let mvstatus=document.getElementById("status").value;
    let mvgenre=document.getElementById("genre").value;
    let moviesObj={
        "id":mid||Date.now().toString(),
        "movieName":mvname,
        "image":mvimage,
        "releaseDate":mvdate,
        "status":mvstatus,
        "genre":mvgenre
    }
    let mvmethod=mid?"PUT":"POST"
    let link=mid?`http://localhost:3000/Movies/${mid}`:`http://localhost:3000/Movies`
    let aansw=await fetch(link,{
        "method":mvmethod,
        "headers":{"content-type":"application/json"},
        "body":JSON.stringify(moviesObj)
    })
    if(aansw.ok){
        alert("data updated successfully...!")

    }
}
document.addEventListener("DOMContentLoaded", fetchData)