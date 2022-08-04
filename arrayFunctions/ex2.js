const users = [
  {
    id: 1,
    sexe: 'M',
    nom: 'Lisangola',
    prenom: 'Bondjali',
    nationalite: 'Allemande'
  },
  {
    id: 2,
    sexe: 'M',
    nom: 'Alain',
    prenom: 'Stanislas',
    nationalite: 'Bresilienne'
  },
  { id: 3, sexe: 'M', nom: 'Kavov', prenom: 'Joseph', nationalite: 'Russe' },
  {
    id: 4,
    sexe: 'M',
    nom: 'Jean',
    prenom: 'Jonathan',
    nationalite: 'Francaise'
  },
  {
    id: 5,
    sexe: 'F',
    nom: 'Lisangola',
    prenom: 'Alain',
    nationalite: 'Italienne'
  },
  {
    id: 6,
    sexe: 'F',
    nom: 'Sakura',
    prenom: 'Josephine',
    nationalite: 'Bresilienne'
  },
  { id: 7, sexe: 'M', nom: 'Le Blanc', prenom: 'Axel', nationalite: 'Italienne' },
  {
    id: 8,
    sexe: 'M',
    nom: 'Alison',
    prenom: 'Murdoch',
    nationalite: 'Somalienne'
  },
  { id: 9, sexe: 'F', nom: 'Zarosky', prenom: 'Semia', nationalite: 'Russe' },
  {
    id: 10,
    sexe: 'F',
    nom: 'Ali',
    prenom: 'Laurene',
    nationalite: 'Algerienne'
  }
];

// 1 - Trouver le nombre des Algeriens dans notre collection
let algeriens = users.filter(user => user.nationalite === "Algerienne");
console.log("Nombre d'algerien :", algeriens.length);
//2 - Trouver toutes les personnes dont les prenoms se terminent par a
let endWithA = users.filter(user => user.prenom.endsWith("a")); 
console.log("Le nom se termine par a pour :", endWithA)
//3 - Avoir la liste tous toutes les noms
let names = users.map(user => user.nom);
console.log(names);
//4 - La liste de tous les hommes russes
let russemen = users.filter(user => user.sexe === "M" && user.nationalite === "Russe")
console.log(russemen);
//5 - La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes
let kwemen = users.filter(({nom,sexe}) => nom.startsWith("K") && sexe==="F")
console.log(kwemen);
//5 - La liste de tous les hommes dont les noms commencent par M
let mmen = users.filter(({nom,sexe}) => sexe==="M" && nom.startsWith("M"))
console.log(mmen);
