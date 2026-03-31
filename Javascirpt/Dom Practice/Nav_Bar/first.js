let navbar=[
    {
        id:"1",
        named:"home"
    },
    {
        id:"2",
        named:"About"
    },
    {
        id:"3",
        named:"Projects"
    },
    {
        id:"4",
        named:"Services"

    }
];
const div=document.createElement("div");
div.id="done";
for(i=0;i<navbar.length;i++){
    let p=document.createElement("p");
    p.innerHTML=`<a>${navbar[i].named}</a>`;
    div.appendChild(p);
}
document.body.appendChild(div)
console.log(div)
