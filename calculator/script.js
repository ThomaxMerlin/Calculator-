let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");

let calculator = {
  displayValue: "",
  firstOperand: null,
  secondOperand: null,
  operator: null,
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.textContent;
    switch (buttonText) {
      case "C":
        calculator.displayValue = "";
        calculator.firstOperand = null;
        calculator.secondOperand = null;
        calculator.operator = null;
        break;
      case "←":
        calculator.displayValue = calculator.displayValue.slice(0, -1);
        break;
      case "=":
        if (calculator.operator) {
          calculator.secondOperand = parseFloat(calculator.displayValue);
          let result = calculate(
            calculator.firstOperand,
            calculator.secondOperand,
            calculator.operator
          );
          calculator.displayValue = result.toString();
          calculator.firstOperand = null;
          calculator.secondOperand = null;
          calculator.operator = null;
        }
        break;
      default:
        if (buttonText.match(/[0-9\.]/)) {
          calculator.displayValue += buttonText;
        } else {
          if (calculator.firstOperand === null) {
            calculator.firstOperand = parseFloat(calculator.displayValue);
            calculator.operator = buttonText;
            calculator.displayValue = "";
          }
        }
    }
    display.value = calculator.displayValue;
  });
});

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
