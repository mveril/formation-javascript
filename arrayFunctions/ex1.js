// E1
const users1 = [
  { noms: 'Jojo Jack', age: 21 },
  { noms: 'Paul-Jules', age: 45 },
  { noms: 'Pierre Zozor', age: 67 },
  { noms: 'Gilbert Toto', age: 39 },
  { noms: 'Simon Pierre', age: 35 },
  { noms: 'Andres Iniesta', age: 70 }
];
/**
 * 1 - Avoir un tableau des users dont l'age varie entre 20-40
 */
let users2040 = users1.filter((user) => 20<= user.age && user.age <= 40)
console.log("Filtre 20<= age <= 40",users2040);
/*
 * 2 - Recuprerer le user dont noms est Pierre Zozor
*/

let pierreZozor = users1.find((user)=>user.noms==='Pierre Zozor');
console.log("Pierre Zozor :",pierreZozor);
/*
 * 3 - Recupere un tableau ne contenant que les noms des utilisateurs
 */
let userNames = users1.map(user=> user.noms);
console.log(userNames)