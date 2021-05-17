const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelectorAll('.clear');
const numberButtons = document.querySelectorAll('.number');
const equalsButton = document.querySelectorAll('.equals');

operatorButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    var operator = e.target.id;
    console.log(operator);
  });
});

numberButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    var number = e.target.id;
    console.log(number);
  });
});

equalsButton.forEach((button) => {
  button.addEventListener('click', function (e) {
    var equals = e.target.id;
    console.log(equals);
  });
});

clearButton.forEach((button) => {
  button.addEventListener('click', function (e) {
    var clear = e.target.id;
    console.log(clear);
  });
});

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      add(a, b);
      break;
    case '-':
      subtract(a, b);
      break;
    case '/':
      divide(a, b);
      break;
    case '*':
      multiply(a, b);
      break;
  }
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}
