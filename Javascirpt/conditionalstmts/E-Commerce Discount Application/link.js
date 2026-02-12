var mem_status=prompt("Enter the type membership status");
let amount=prompt("Enter purchase amount in $");
if(mem_status=="Regular"){
    if(amount<100){
        console.log(amount-amount*0);
    }
    else if(amount>100 && amount<500){
        console.log(amount-amount*0.05);     
    }
    else if(amount>500){
        console.log(amount-amount*0.1);
    }
}
else if(mem_status=="VIP"){
    if(amount<100){
        console.log(amount-amount*0.1);
    }
    else if(amount>100 && amount<500){
        console.log(amount-amount*0.15);     
    }
    else if(amount>500){
        console.log(amount-amount*0.2);
    }
}
else{
    console.log("Invalid type");
}