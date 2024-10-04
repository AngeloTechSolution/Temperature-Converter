const user_input = document.getElementById("user_input");
const toFahrenheit = document.getElementById("radio1");
const toCelsius =document.getElementById("radio2");
const result = document.getElementById("result");
let temp;

function convertBtn(){

    if(toFahrenheit.checked){
        temp = Number(user_input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(user_input.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
}