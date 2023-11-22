const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
let output = "";
const specialChars = ["%", "*", "/", "-", "+", "=", ]
const calculate = (btnValue) => {
  if(btnValue == "=" && btnValue !== ""){
    input = eval(output.replace("%","/100",))
  }else if (btnValue === "AC"){
    output= ""
  } else if (btnValue === "C"){
    output = output.toString().slice(0, -1)
  } else{
    if (output === "" && specialChars)
  }
  display.value = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value)) 
})