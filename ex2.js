(function() {
alert("Inscription");
let emailInscr = prompt("Entrer une adresse email : ");

let pwdInscr = prompt("Entrer un mot de passe : ");
alert("Connection");
for (var i=4;i>=0;i--)
{
    let email = prompt("Email :");
    let pwd = prompt("Mots de passe :")

    if (email === emailInscr && pwd ===pwdInscr) {
        alert("Bienvenue sur votre session !");
        return;
    }
    else {
        alert(`Vous avez saisis les mauvais identifiant il vous reste ${i} essai`);
    }
}
alert("Vous avez saisis les mauvais identifiant 5 fois, votre compte est bloqué");
})()