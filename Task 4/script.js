/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
    .then(JS4_getApiRes => {
        if (JS4_getApiRes.ok) {
            return JS4_getApiRes.json();
        }
        else {
            document.getElementById("output").textContent = "Kažkas negerai"
        }
    })
    .then(JS4_getApiData => {
        let output = "";
        JS4_getApiData.forEach((item, index) => {
            const JS4_1 = document.createElement("div");
            const JS4_2 = document.createElement("div");
            const JS4_3 = document.createElement("div");
            JS4_1.innerText = (`${item.brand}`)
            JS4_2.innerText = (`${item.models}`)
            JS4_3.append(JS4_1, JS4_2)
            document.getElementById("output").append(JS4_3);
        })
    })
    .catch(err => document.getElementById("message").textContent = err)
