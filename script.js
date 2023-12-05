let inputBox = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")
let string = ""
let oprClicked = false; // Nouvelle variable pour suivre si un opr a été cliqué
let switchs = document.querySelector("#icon")
const secretCode = "23152631619"


buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.innerText;

    if (buttonText === "=") {
      string = String(eval(string))
      inputBox.value = string
      oprClicked = false; // Réinitialise la variable après le calcul
    } else if (buttonText === "AC") {
      string = ""
      inputBox.value = string
      oprClicked = false; // Réinitialise la variable
    } else if (buttonText === "DEL") {
      string = string.substring(0, string.length - 1)
      inputBox.value = string
      oprClicked = false; // Réinitialise la variable
    } else if (event.target.id === "plusMinus") {
      string = String(-eval(string))
      inputBox.value = string
    } else if (event.target.classList.contains("opr") && !oprClicked) {
      string += buttonText
      inputBox.value = string
      oprClicked = true; // Désactive les opr après un clic
    } else if (!event.target.classList.contains("opr")) {
      string += buttonText
      inputBox.value = string
    }
  });
});





var body = document.body;
var container = document.querySelector(".container");
var chiffres = document.querySelectorAll(".chiffre");
let oprs = document.querySelectorAll(".opr");
let deletes = document.querySelectorAll(".delete"); // Ajout de la sélection des boutons avec la classe 'delete'


switchs.addEventListener("click", function() {
  // Vérifie si l'icône a la première classe
  if (switchs.classList.contains("bi-brightness-high-fill")) {
    // Si oui, supprime la première classe et ajoute la deuxième classe
    switchs.classList.remove("bi-brightness-high-fill");
    switchs.classList.add("bi-moon-fill");
    switchs.style.color = "black";
    container.style.backgroundColor = "#fff";
    inputBox.style.color = "black";
    body.style.backgroundColor = "#222225"; // Remplacez "votreCouleurSouhaitée" par la couleur que vous souhaitez

    // Parcours chaque chiffre et définis la couleur de fond
    chiffres.forEach(function(chiffre) {
      chiffre.style.backgroundColor = "white";
      chiffre.style.color = "#222225";
    });

    // Parcours chaque opr et définis la couleur de fond en blanc
    oprs.forEach(function(opr) {
      opr.style.backgroundColor = "white";
    });

    // Parcours chaque delete et définis la couleur de fond en blanc
    deletes.forEach(function(deleteBtn) {
      deleteBtn.style.backgroundColor = "white";
    });
  } else {
    // Sinon, ajoute la première classe et supprime la deuxième classe
    switchs.classList.add("bi-brightness-high-fill");
    switchs.classList.remove("bi-moon-fill");
    inputBox.style.color = "white";
    body.style.backgroundColor = "white";
    switchs.style.color = "white";
    container.style.backgroundColor = "#222225";

    // Parcours chaque chiffre et rétablis la couleur de fond par défaut
    chiffres.forEach(function(chiffre) {
      chiffre.style.backgroundColor = "#222225";
      chiffre.style.color = "white";
    });

    // Parcours chaque opr et rétablis la couleur de fond à la valeur initiale
    oprs.forEach(function(opr) {
      opr.style.backgroundColor = "#222225";
    });

    // Parcours chaque delete et rétablis la couleur de fond à la valeur initiale
    deletes.forEach(function(deleteBtn) {
      deleteBtn.style.backgroundColor = "#222225";
    });
  }
});

