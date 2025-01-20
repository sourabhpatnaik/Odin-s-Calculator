let calDisplay = document.querySelector(".calculatorDisplay");
let calButton = document.querySelectorAll("button");

let currentDisplay = "0";
let resultDisplay = false;

// function doAdd(varA, varB) {
//   return varA + varB;
// }
// function doSubtract(varA, varB) {
//   return varA - varB;
// }
// function doMultiply(varA, varB) {
//   return varA * varB;
// }
// function doDivide(varA, varB) {
//   return varA / varB;
// }
// function doMod(varA, varB) {
//   return varA % varB;
// }

// function operate(numOne, numTwo, operator) {
//   if (operator == "+") {
//     return doAdd(numOne, numTwo);
//   } else if (operator == "-") {
//     return doSubtract(numOne, numTwo);
//   } else if (operator == "*") {
//     return doMultiply(numOne, numTwo);
//   } else if (operator == "/") {
//     return doDivide(numOne, numTwo);
//   } else if (operator == "%") {
//     return doMod(numOne, numTwo);
//   } else {
//     return "Invalid Inputs";
//   }
// }

function calculatorDisplay(val) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = val;
  } else {
    currentDisplay += val;
  }

  resultDisplay = false;

  updateDisplay();
}

function updateDisplay() {
  calDisplay.textContent = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "0";
  resultDisplay = false;

  updateDisplay();
}

function clearLastElement() {
  currentDisplay = currentDisplay.slice(0, -1);

  if (currentDisplay == "") {
    currentDisplay = "0";
  }

  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);

    currentDisplay += "\n= " + result.toString();

    updateDisplay();
  } catch (error) {
    currentDisplay += "\nError";

    updateDisplay();
  }

  resultDisplay = true;
}
