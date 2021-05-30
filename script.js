const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelectorAll('.clear');
const numberButtons = document.querySelectorAll('.number');
const equalsButton = document.querySelectorAll('.equals');
const display = document.querySelector('.display');

const buttonsData = [];

numberButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    let number = e.target.id;
    console.log(number);
    buttonsData.push(number);
    console.log(buttonsData);
  });
});
equalsButton.forEach((button) => {
  button.addEventListener('click', function (e) {
    let equals = e.target.id;
    console.log(equals);
  });
});

clearButton.forEach((button) => {
  button.addEventListener('click', function (e) {
    let clear = e.target.id;
    console.log(clear);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    let operator = e.target.id;
    console.log(operator);
  });
});
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
