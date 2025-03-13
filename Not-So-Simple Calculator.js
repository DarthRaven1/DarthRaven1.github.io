let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
  if (waitingForSecondOperand) {
    displayValue = number;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? number : displayValue + number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (operator) {
    const result = calculate(firstOperand, parseFloat(displayValue), operator);
    displayValue = String(result);
    firstOperand = result;
  }
  operator = op;
  waitingForSecondOperand = true;
  updateDisplay();
}

function calculateResult() {
  if (operator) {
    const result = calculate(firstOperand, parseFloat(displayValue), operator);
    displayValue = String(result);
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
  }
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return secondOperand === 0 ? 'Error' : firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

function clearDisplay() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

function toggleSign() {
    displayValue = String(parseFloat(displayValue) * -1);
    updateDisplay();
}

function calculatePercentage() {
    displayValue = String(parseFloat(displayValue) / 100);
    updateDisplay();
}

updateDisplay();