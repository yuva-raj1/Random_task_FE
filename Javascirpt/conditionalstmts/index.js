var a=prompt("Enter the type of membeership");
if(a =="Basic")
{
    console.log("Basic Membership: Access to only free books.");  
}
else if(a =="Standard"){
    console.log("Standard Membership: Access to free books and discounted paid books.");  
}
else if(a =="Premium"){
    console.log("Premium Membership: Access to all books, including exclusive content.");  
}
else{
    console.log(" membership type is invalid.");
    
}