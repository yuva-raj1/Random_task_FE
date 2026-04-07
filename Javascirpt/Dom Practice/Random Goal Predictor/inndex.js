let goal=[
    {
        image:"https://static.vecteezy.com/system/resources/previews/029/291/241/large_2x/camera-man-cartoon-clip-art-ai-generative-free-png.png",
        info:"cameraman"
    },
    {
        image:"https://tse2.mm.bing.net/th/id/OIP.Hpz_v13ObL2zCb3pvemFgwHaFj?pid=Api&P=0&h=180",
        info:"Director"
    },
    {
        image:"https://static.vecteezy.com/system/resources/previews/014/849/621/original/actor-reads-the-script-movie-making-scene-vector.jpg",
        info:"Screenplay-Writer"
    },
    {
        image:"https://img.freepik.com/premium-photo/funny-kung-fu-master-cartoon-character-3d-illustration_1057-130816.jpg",
        info:"Fight master"
    },
    {
        image:"https://static.vecteezy.com/system/resources/previews/010/099/384/large_2x/actor-doing-role-acting-in-front-of-camera-free-vector.jpg",
        info:"Actor"
    }
]
let randimg=document.getElementById("randimg")
let text=document.getElementById("text")
let ip=document.getElementById("ip")
let restext=document.getElementById("restext")
function start(){
    if(ip.value==""){
        alert("Enter your name")
        return ;
    }
    restext.innerHTML="";
    let c=0;
let rand=setInterval(()=>{
let random=Math.floor(Math.random()*goal.length);
randimg.src=goal[random].image;
text.innerText=goal[random].info;
c++;
if(c==50){
    clearInterval(rand);
    restext.innerHTML=`${ip.value} future goal is ${goal[random].info}`
    ip.value="";
}
},50)
}
