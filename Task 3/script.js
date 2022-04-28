/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

document.querySelector("#btn").addEventListener("click", JS2_getData);
function JS2_getData(event) {
event.preventDefault();
const ENDPOINT = 'https://api.github.com/users';
fetch(ENDPOINT)
    .then(JS3_getApiRes => {
        if (JS3_getApiRes.ok) {
            document.getElementById("message").textContent=""
            return JS3_getApiRes.json();
        }
        else {
            document.getElementById("message").textContent = "Kažkas negerai"
        }
    })
    .then(JS3_getApiData => {
        let output = "";
        JS3_getApiData.forEach((item, index) => {
            const JS3_1 = document.createElement("div");
            JS3_1.innerText = (`${item.login}, ${item.avatar_url}`)
            document.getElementById("output").append(JS3_1);
        })
    })
    .catch(err => document.getElementById("message").textContent = err)
}