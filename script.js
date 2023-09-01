let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("#result");

btn.addEventListener("click", () => {
    let countryName = input.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].area)
            console.log(data[0].population)
            console.log(data[0].maps);
            console.log(data[0].region);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name); //use to print object keys 
            console.log(data[0].flag);
            div.innerHTML = `
            <div>
            <h4>Currency : ${data[0].currencies[Object.keys(data[0].currencies)].name}</h4>
            </div>
            <div><h4>Population : ${data[0].population}</h4></div>
            <div><h4>Area : ${data[0].area}</h4></div>
            <div><h4>Region : ${data[0].region}</h4></div>
           `;
        })
        .catch((err) => {
            console.log("Error occured", err);
        });
});