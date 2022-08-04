// # Créer une fonctions qui retourne a somme de 2 nombres
function calculSomme(nombre1, nombre2) {
  if (typeof nombre1 !== "number" || typeof nombre2 !== "number") {
    throw new Error("Veuillez entrer des nombres valides");
  }
  return nombre1 + nombre2;
}

// # slugify
// ex : Macbook Pro 16 M1 Max => macbook pro 16 m1 max
// http://monsite.com/produits
// http://monsite.com/produits?id=macbook-pro-16-m1-max
// slugify("macbook pro","+") => macbook+pro
// slugify("macbook pro","*") => macbook*pro
// slugify("macbook pro","-") => macbook-pro
// slugify("macbook pro","_") => macbook_pro
function slugify(str, delimiter) {
  const strToLowerCase = str.toLowerCase();
  const strToArray = strToLowerCase.split(" ");
  return strToArray.join(delimiter);
}

const slugifyV2 = function (str, delimiter) {
  const strToLowerCase = str.toLowerCase();
  const strToArray = strToLowerCase.split(" ");
  return strToArray.join(delimiter);
};