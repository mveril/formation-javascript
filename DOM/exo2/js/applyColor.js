function applyRandomColor() {
  const color = getRandomColor()
  applyColor(color);
}

function applyColor(color) {
  const colorText=document.querySelector('#color-text')
  colorText.innerText=color;
  document.body.style.backgroundColor=color;
}