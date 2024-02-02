//Tania Schulz

const MESSAGE = document.querySelector(".message");
const ACCEPT = document.querySelector("#accept");
let MAXTEMPS = document.querySelectorAll(".max-temp");
let MINTEMPS = document.querySelectorAll(".min-temp");

ACCEPT.addEventListener("click", function() {
    MESSAGE.style.display = "none";
});

function loadAlert(){
    alert("Loading weather report...")
}

// cambia las temperaturas segun el sistema seleccionado
function changeTemp(){
    let value = document.querySelector("#select-temp").value;
    
    if (value != null){
        if (value == "fahrenheit"){
            MAXTEMPS.forEach((i) => {
                let num = toFahrenheit(i.innerText);
                i.innerText = num.toFixed(1);
            });
            MINTEMPS.forEach((i) => {
                let num = toFahrenheit(i.innerText);
                i.innerText = num.toFixed(1);
            });
        }
        else {
            MAXTEMPS.forEach((i) => {
                let num = toCelsius(i.innerText);
                i.innerText = num.toFixed();
            });
            MINTEMPS.forEach((i) => {
                let num = toCelsius(i.innerText);
                i.innerText = num.toFixed();
            });
        }
    }
}

function toFahrenheit(c){
    let num = c * (9/5) + 32;
    console.log(num);
    return num;
}

function toCelsius(f){
    return (f - 32) * (5/9);
}


