/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintin5.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

// 1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
// atveju grąžins "users", kurie turi augintin5.
function filterDogOwers(x) {
  const JS5_1_new = users.filter((x) => x.hasDog == true);
  JS5_1_new_map = JS5_1_new.map((x) => x.name)
  for(let i=0; i<=JS5_1_new_map.length-1; i++)
  console.log(JS5_1_new_map[i])
  console.log(JS5_1_new_map);
}
filterDogOwers(users)

// 2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
// atveju grąžins masyvą su "users", kurie yra pilnamečiai.
function filterAdults(x) {
  const JS5_2_new = users.filter((x) => x.age >= 18);
  JS5_2_new_adult = JS5_2_new.map((x) => x.name)
  console.log(JS5_2_new_adult);
  console.log(JS5_2_new);
}
filterAdults(users);
