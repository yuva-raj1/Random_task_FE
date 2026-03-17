async function fetchInfo() {
    let a=await fetch("https://fakestoreapi.com/products")
    let b=await a.json();
    retrievedata(b)
}
function retrievedata(info) {
let box1=document.getElementsByClassName("box")[0]
info.forEach(e=>{
    let p=document.createElement("p")
    p.innerHTML=`<h3>Id : ${e.id}</h3>
                  <p>Price : ${e.price}</p>
                  <p>Desciption : ${e.description}</p>
                  <img src='${e.image}'>`
                  box1.appendChild(p)
});    
}
fetchInfo();