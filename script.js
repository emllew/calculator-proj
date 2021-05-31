const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelectorAll('.clear');
const buttons = document.querySelectorAll('button');
const equalsButton = document.querySelectorAll('.equals');
const display = document.querySelector('.display');

const buttonsData = [];

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'number') {
      let number = e.target.innerHTML;
      console.log(number);
      buttonsData.push(number);
      console.log(buttonsData);
    }
    if (e.target.id === 'clear') {
      buttonsData.splice(0, buttonsData.length);
    }
    if (e.target.id === 'operator') {
      let operator = e.target.innerHTML;
      buttonsData.push(operator);
    }
    display.innerHTML = buttonsData;
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
