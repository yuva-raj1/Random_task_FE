let b1=document.getElementById("action")
b1.addEventListener("click",actionPerformer)
function actionPerformer(){
    let value=document.getElementById("content").value;
    let fromvalue=document.getElementById("from").value;
    let tovalue=document.getElementById("to").value;

     fetch(`https://v6.exchangerate-api.com/v6/c0e44ac57c6c7e7bb962f278/latest/${fromvalue}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let rate = data.conversion_rates[tovalue];
            let converted = value * rate;
            document.getElementById("result").value =
                value + " " + fromvalue + " = " + converted + " " + tovalue;
            // document.getElementById("result").value = converted.toFixed(2);
        })
        .catch(function(error) {
            console.log(error);
            alert("Error fetching data");
        });
    
}