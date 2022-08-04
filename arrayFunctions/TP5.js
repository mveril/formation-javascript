/*
On vous donne un tableau d'entiers et un entier K comme arguments. Retourner vrai si chaque entier est un multiple pair de l'entier K.
*/
// Runtime O(n)
function EveryMultiplePair(numbers,k) {
  return numbers.every(n=>n % k === 0 && n % 2 === 0 );
}