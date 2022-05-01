/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
// atveju grąžins visų "users" amžiaus visurkį kaip skaičių.

function getUserAverageAge(x) {
  let JS6_1 = 0;
  for (let i = 0; i <= users.length - 1; i++) {
    JS6_1 += x[i].age;
  }
  JS6_1_average = JS6_1 / users.length;
  console.log(JS6_1_average);
  return JS6_1_average;
}
getUserAverageAge(users)

// 2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
// atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].

function getUsersName(x) {
  const JS6_2_new = users.map((x) => x.name)
  console.log(JS6_2_new);
  return JS6_2_new;
}
getUsersName(users);