async function fetchInfo() {
    let ans=await fetch("http://localhost:3000/Movies")
    try{
        if(!ans.ok){
            throw new Error("Smthg went wrong")
        }
        let info=await ans.json();
        displayInfo(info)
    }
    catch(error){
        console.log(error)
    }
}
function displayInfo(info){
    let box=document.getElementById("box")
    info.forEach(element => {
        let mv=document.createElement("div")
        mv.className="movie-card";
        mv.innerHTML=`
        <p>Id:${element.id}</p>
        <h3>Movie:${element.movieName}</h3>
        <img src="${element.image}" width="250px">
        <h4>Date:${element.releaseDate}</h4>
        <p>Status:${element.status}</p>
        <p>Genre:${element.genre}</p>
        
        `
       box.appendChild(mv);
    });
}
document.addEventListener("DOMContentLoaded",fetchInfo)