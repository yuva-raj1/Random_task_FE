function show(){
let ip=document.getElementById("ip")
get(ip.value);
}
async function get(info){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${info}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9e7c9aeb95mshfa6f55929c0c7d7p1036fejsn06ec5092ff32',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	 let container = document.getElementById("container");

        if (result.main) {
            let temp = result.main.temp;

            // remove previous background classes
            container.classList.remove("sunny", "cloudy", "rainy");

            // add new class based on temperature
            if (temp >= 75) {
                container.classList.add("sunny");
            } 
            else if (temp >= 55) {
                container.classList.add("cloudy");
            } 
            else {
                container.classList.add("rainy");
            }

            container.innerHTML = `
                <h3>Current weather : ${temp}°C</h3>
            `;
        } 
        else {
            container.innerHTML = `<h3>City not found</h3>`;
        }

    
} catch (error) {
	console.error(error);
}
}
