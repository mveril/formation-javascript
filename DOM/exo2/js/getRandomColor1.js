function getRandomColor(){
  const colorTable = ["green", "red", "rgba(133,122,200)", "#F15025"];
  const random = Math.floor(Math.random()*colorTable.length);
  return colorTable[random];
}