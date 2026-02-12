var day=prompt("Enter the day");
switch(day){
    case "Monday": console.log("Start your week strong!");
                    break;
    case "Tuesday": console.log("Keep going!");break;
    case "Wednesday": console.log("Halfway there!");break;
    case "Thursday": console.log("Almost the weekend!");break;
    case "Friday": console.log("Happy Friday!");break;
    case "Saturday":
    case "Sunday":
         console.log("Enjoy your weekend!");break;
    default:
        console.log("Not a valid day");
}