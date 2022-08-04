/*
On vous donne un tableau d’entiers et un entier k qui représente le nombre de rotation que doit subir le tableau.

Retourner le nouveau tableau après la rotation à droite.

*/
// O(n^k)
function rotate(table,k) {
  const tableCopy= [...table];
  for (let i = 1; i <= k; i++) {
    tableCopy.unshift(tableCopy.pop());
  }
  return tableCopy;
}