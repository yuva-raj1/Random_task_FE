var day=prompt("Enter the day");
if(day=="weekday")
{
    var age=prompt("Enter age:");
    if(age>=65 || age<12)
    {
        console.log("$"+(12-12*0.5)+" Receives 50% discount on standard price of 12$");
    }
}
else if(day=="weekend"){
     var age=prompt("Enter age:");
     if(age>=65 || age<12)
    {
        console.log("$"+15-15*0.3+" Receives 30% discount on standard price of 15$");
    }
}