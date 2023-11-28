let inputBox = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")
let string = ""
let oprClicked = false; // Nouvelle variable pour suivre si un opr a été cliqué

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
