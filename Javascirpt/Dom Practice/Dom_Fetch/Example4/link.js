async function viewdata(){
    let res=await fetch("https://dummyjson.com/todos")
    let res3=await res.json();
    callanothermethod(res3.todos);
}
function callanothermethod(info){
    let cont=document.getElementsByClassName("add")[0];
   
    info.forEach(element => {
         let displaycontent=document.createElement("p")
        displaycontent.innerHTML=`<h3>Todo : ${element.todo}</h3>
                                  <p>Status:${element.completed}</p>
                                  <p>Id : ${element.userId}</p>`;
    cont.appendChild(displaycontent);
    });
 
}
viewdata();