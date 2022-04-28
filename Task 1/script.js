/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", JS1_getData);

function JS1_getData(event) {
    event.preventDefault();
    let JS1_1 = document.querySelector("#search").value;
    document.querySelector("#output").textContent = `${JS1_1*2}lb, ${JS1_1/0.001}g, ${JS1_1*35.274}oz`;
}