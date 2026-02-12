var gpa=prompt("Enter gpa");
var act_part=prompt("Enter act part");
var com_service=prompt("Enter com_service");
if(gpa>=3.5){
console.log("Merit-Based Scholarship:");
}
else if(gpa>=3.0 && act_part==2){
    console.log("Leadership Scholarship");
}
else if(gpa>=2.5 && com_service>=100){
    console.log("Community Service Scholarship");   
}
else{
    console.log("none");
    
}