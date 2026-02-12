var purchase_amount=prompt("Enter the amount");
if(purchase_amount<50){
    console.log("No discount "+ (amount));
}
else if(purchase_amount>=50 && purchase_amount<=100)
{
    console.log("5% discount on amount "+(purchase_amount-purchase_amount*0.05));
}
else if(purchase_amount>=101 && purchase_amount<=200)
{
    console.log("10% discount on amount "+(purchase_amount-purchase_amount*0.1));
}
else if(purchase_amount>200)
{
    console.log("15% discount on amount "+(purchase_amount-purchase_amount*0.15));
}