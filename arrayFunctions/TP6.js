/*
On vous donne un tableau d'entiers et un tableau plus court contenant une séquence d'entiers comme arguments. 
Retourner vrai si la séquence d'entiers peut être trouvée dans le premier tableau.

*/
// Runtime O(n+m)
function includes(numbers1,numbers2) {
  const sep =",";
  return numbers1.join(sep).includes(numbers2.join(sep));
}