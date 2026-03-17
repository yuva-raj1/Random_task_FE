async function readdata(){
    let q=await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    let w=await q.json();
    write(w)
}
function write(info){
    let bb=document.getElementsByClassName("ford")[0];       
    let p1=document.createElement("p");   
    p1.innerHTML=`
                    <img src='${info.sprites.back_default}'>
                    <img src='${info.sprites.front_default}'>
                 
                    `;
        bb.appendChild(p1)
}
readdata();