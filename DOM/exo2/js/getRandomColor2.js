function getRandomColor() {
  let color = "#"
  for(let i=1;i<=6;i++){
    const random = Math.floor(Math.random()*16);
    const hexRandom = random.toString(16);
    color += hexRandom;
  }
  return color;
}