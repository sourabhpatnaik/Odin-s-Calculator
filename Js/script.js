let calDisplay = document.querySelector(".calculatorDisplay")

function doAdd(varA, varB) {
  return varA + varB;
}
function doSubtract(varA, varB) {
  return varA - varB;
}
function doMultiply(varA, varB) {
  return varA * varB;
}
function doDivide(varA, varB) {
  return varA / varB;
}
function doMod(varA, varB) {
  return varA % varB;
}

function operate(numOne, numTwo, operator) {
  if (operator == "+") {
    return doAdd(numOne, numTwo);
  } else if (operator == "-") {
    return doSubtract(numOne, numTwo);
  } else if (operator == "*") {
    return doMultiply(numOne, numTwo);
  } else if (operator == "/") {
    return doDivide(numOne, numTwo);
  } else if (operator == "%") {
    return doMod(numOne, numTwo);
  } else {
    return "Invalid Inputs";
  }
}


calDisplay.textContent = "00"