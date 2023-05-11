let first_number = document.getElementById('first_number');
let result = document.getElementById('result');
let operator = '';
let num1 = 0;
let currentResult = 0;
function handleCalculatorAction(action, value) {
  switch (action) {
    case 'number':
      first_number.value += value;
      break;
    case 'operator':
      setOperator(value);
      break;
    case 'equals':
      calculate();
      break;
    case 'clear':
      clearFields();
      break;
    default:
      console.error('Invalid action:', action);
  }
}
function setOperator(op) {
  operator = op;
  if (currentResult === 0) {
    num1 = parseFloat(first_number.value);
  } else {
    num1 = currentResult;
  }
  first_number.value = '';
}
function calculate() {
  let num2 = parseFloat(first_number.value);
  let output = 0;
  switch (operator) {
    case '+':
      output = num1 + num2;
      break;
    case '-':
      output = num1 - num2;
      break;
    case '*':
      output = num1 * num2;
      break;
    case '/':
      output = num1 / num2;
      break;
    default:
      console.error('Invalid operator:', operator);
  }
  result.innerText = output;
  operator = '';
  currentResult = output;
}
function clearFields() {
  first_number.value = '';
  result.innerText = 0;
  operator = '';
  num1 = 0;
  currentResult = 0;
}