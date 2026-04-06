let box=document.getElementById("box");
let start=document.getElementById("start");
let end=document.getElementById("end");
let res=document.getElementById("result");
let arr=
    {
    "kukkatpally":[
        {
            "kphb":"15",
              "balnagar":"20",
              "moosapet":"25",
              "bharatnagar":"30",
              "ameerpet":"35"
              ,"jntu":"12"
        }
    ],
    "kphb":
    [  {
        "kukkatpally":"15",
        "jntu":"18",
        "balanagar":"22",
        "moosapet":"28",
        "bharatnagar":"32",
        "ameerpet":"38"       
        }
    ],
    "jntu":
    [{
        "kphb":"12",
        "kukkatpally":"18",
        "balanagar":"25",
        "moosapet":"30",
        "bharatnagar":"35",
        "ameerpet":"40"
        }
    ],
    "balanagar":
    [{
        "kukkatpally":"12",
        "kphb":"18",
        "jntu":"22",
        "moosapet":"12",
        "bharatnagar":"15",
        "ameerpet":"22"
        }
    ]
}
function fare(){
    let s=start.value;
    let d=end.value;
    if(arr[s]&&arr[s][0][d]){
        let fare=arr[s][0][d];
        res.innerHTML=
        `<p>Your charge from ${s} to ${d} is ${fare}</p>`;
    }

    else if (!s || !d) {
        res.innerHTML = "<p>Please select both stations</p>";
        return;
    }

    else if (s === d) {
        res.innerHTML = "<p>Source and destination cannot be same</p>";
        return;
    }
    else{
        res.innerHTML=`<p>Route not found</p>`;
    }
}
function clearResult() {
    res.innerHTML = "";
}
document.addEventListener("DOMContentLoaded", fare)


