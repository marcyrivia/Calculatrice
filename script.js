let inputBox = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")
let string = ""
let oprClicked = false; // Nouvelle variable pour suivre si un opr a été cliqué
let switchs = document.querySelector("#icon")

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

switchs.addEventListener("click", function() {
  // Vérifiez si l'élément a la première classe
  if (switchs.classList.contains("bi-brightness-high-fill")) {
    // Si oui, supprimez la première classe et ajoutez la deuxième classe
    switchs.classList.remove("bi-brightness-high-fill");
    switchs.classList.add("bi-moon-fill");
    switchs.style.color = "black";
    container.style.backgroundColor = "#fff";
    body.style.backgroundColor = "#222225"; // Replace "yourDesiredColor" with the color you want

    // Iterate through each chiffre and set the background color
    chiffres.forEach(function(chiffre) {
      chiffre.style.backgroundColor = "white";
      chiffre.style.color = "#222225";
    });
  } else {
    // Sinon, ajoutez la première classe et supprimez la deuxième classe
    switchs.classList.add("bi-brightness-high-fill");
    switchs.classList.remove("bi-moon-fill");
    body.style.backgroundColor = "initial";
    switchs.style.color = "white";
    container.style.backgroundColor = "#222225";

    // Iterate through each chiffre and set the background color back to default
    chiffres.forEach(function(chiffre) {
      chiffre.style.backgroundColor = "initial";
      chiffre.style.color = "white";
    });
  }
});

