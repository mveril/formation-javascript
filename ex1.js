let age=Number.parseInt(prompt("Donner un age"));
if(age < 7) {
  alert("Trop jeune");
} else if (age <= 9){
  alert("Poussin");
} else if (age <= 11) {
  alert("Pupille");
} else if (age <= 13) {
  alert("Benjamin");
}
else if(age <= 15){
  alert("Minime");
} else if (age <= 17) {
  alert("Cadet");
}
else {
  alert("Trop grand");
}