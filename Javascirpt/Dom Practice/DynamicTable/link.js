let table1=document.createElement("table");
let trow1=document.createElement("tr");
let th1=document.createElement("th")
th1.colSpan=4;
th1.innerHTML="255-5";
trow1.appendChild(th1)
table1.appendChild(trow1)
let th2=document.createElement("th")
th2.colSpan=4;
th2.innerHTML="159";
trow1.appendChild(th2)

table1.appendChild(trow1)
let trow2=document.createElement("tr");
let td2=document.createElement("td")
td2.colSpan=2;
td2.innerHTML="Samson";
trow2.appendChild(td2);
let td3=document.createElement("td")
td3.innerHTML="89"
trow2.appendChild(td3);
let td4=document.createElement("td")
td4.innerHTML="46"
trow2.appendChild(td4);
let td5=document.createElement("td")
td5.colSpan=2;
td5.innerHTML="ABC"
trow2.appendChild(td5)
let td6=document.createElement("td")
td6.innerHTML="52"
trow2.appendChild(td6)
let td7=document.createElement("td")
td7.innerHTML="26"
trow2.appendChild(td7)
table1.appendChild(trow2)

let trow3=document.createElement("tr");
let tdd=document.createElement("td");
tdd.colSpan=2;
tdd.innerHTML="Kishan";
trow3.appendChild(tdd)
let tdd1=document.createElement("td");
tdd1.innerHTML="54";
trow3.appendChild(tdd1)
let tdd2=document.createElement("td");
tdd2.innerHTML="25";
trow3.appendChild(tdd2)
let tdd3=document.createElement("td")
tdd3.colSpan=2
tdd3.innerHTML="DEF"
trow3.appendChild(tdd3)
let tdd4=document.createElement("td")
tdd4.innerHTML="43"
trow3.appendChild(tdd4)
let tdd5=document.createElement("td")
tdd5.innerHTML="35"
trow3.appendChild(tdd5)
table1.appendChild(trow3)

let trow4=document.createElement("tr");
let ttd=document.createElement("td")
ttd.colSpan=2
ttd.innerHTML="Abhishek"
trow4.appendChild(ttd)
let ttd1=document.createElement("td")
ttd1.innerHTML="52"
trow4.appendChild(ttd1)
let ttd2=document.createElement("td")
ttd2.innerHTML="21"
trow4.appendChild(ttd2)
let ttd3=document.createElement("td")
ttd3.colSpan=2
ttd3.innerHTML="Mitchell"
trow4.appendChild(ttd3)
let ttd4=document.createElement("td")
ttd4.innerHTML="17"
trow4.appendChild(ttd4)
let ttd5=document.createElement("td")
ttd5.innerHTML="11"
trow4.appendChild(ttd5)

table1.appendChild(trow4)

let trow6=document.createElement("tr");
let tdata=document.createElement("td")
tdata.colSpan=2;
tdata.innerHTML="Dhube"
trow6.appendChild(tdata)
let tdata1=document.createElement("td")
tdata1.innerHTML="26<sup>*</sup>"
trow6.appendChild(tdata1)
let tdata2=document.createElement("td")
tdata2.innerHTML="8"
trow6.appendChild(tdata2)
let tdata3=document.createElement("td")
tdata3.colSpan=2;
tdata3.innerHTML="Alen"
trow6.appendChild(tdata3)
let tdata4=document.createElement("td")
tdata4.innerHTML="9"
trow6.appendChild(tdata4)
let tdata5=document.createElement("td")
tdata5.innerHTML="7"
trow6.appendChild(tdata5)

table1.appendChild(trow6)
let trow7=document.createElement("tr");
let thh=document.createElement("th")
thh.colSpan=4
thh.innerHTML="20<sub>Overs</sub>"
trow7.appendChild(thh)
let thh1=document.createElement("th")
thh1.colSpan=4;
thh1.innerHTML="19<sub>Overs</sub>"
trow7.appendChild(thh1)
table1.appendChild(trow7)

let trow8=document.createElement("tr");
let tda1=document.createElement("td")
tda1.colSpan=4;
tda1.innerHTML="Nisham"
trow8.appendChild(tda1)
let tda2=document.createElement("td")
tda2.innerHTML="3-46"
trow8.appendChild(tda2)
let tda3=document.createElement("td")
tda3.innerHTML="4"
trow8.appendChild(tda3)
let tda4=document.createElement("td")
tda4.colSpan=4;
tda4.innerHTML="Bumrah"
trow8.appendChild(tda4)
let tda5=document.createElement("td")
tda5.innerHTML="4-15"
trow8.appendChild(tda5)
let tda6=document.createElement("td")
tda6.innerHTML="4"
trow8.appendChild(tda6)

table1.appendChild(trow8)
let trow9=document.createElement("tr");
let tdaa1=document.createElement("td")
tdaa1.colSpan=4;
tdaa1.innerHTML="Ravindra"
trow8.appendChild(tdaa1)
let tda2=document.createElement("td")
tda2.innerHTML="3-46"
trow8.appendChild(tda2)
let tda3=document.createElement("td")
tda3.innerHTML="4"
trow8.appendChild(tda3)
let tda4=document.createElement("td")
tda4.colSpan=4;
tda4.innerHTML="Bumrah"
trow8.appendChild(tda4)
let tda5=document.createElement("td")
tda5.innerHTML="4-15"
trow8.appendChild(tda5)
let tda6=document.createElement("td")
tda6.innerHTML="4"
trow8.appendChild(tda6)

table1.appendChild(trow9)
let trow10=document.createElement("tr");

table1.appendChild(trow10)
document.body.appendChild(table1)
console.log(table1)
