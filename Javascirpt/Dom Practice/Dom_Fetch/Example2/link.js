async function setInfo(){
let first=await fetch("https://jsonplaceholder.typicode.com/photos")
let second=await first.json()
getInfo(second)
}
function getInfo(info){
    let just=document.getElementsByClassName("box1")[0];
    info.forEach(element => {
        let p=document.createElement("p")
        p.innerHTML=`<h3>Id :${element.id}</h3>
                    <p>Title:${element.title}</p>
                    <img src='${element.url}'`;
        just.appendChild(p);
    });
}
setInfo();