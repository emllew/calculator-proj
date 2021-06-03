const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');
let buttonsData = [];

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'number') {
      let number = e.target.innerHTML;
      console.log(number);
      buttonsData.push(number);
      console.log(buttonsData.slice());
    }
    if (e.target.id === 'clear') {
      buttonsData.splice(0, buttonsData.length);
    }
    if (e.target.id === 'operator') {
      let operator = e.target.innerHTML;
      buttonsData.push(operator);
    }

    if (e.target.id === 'equals') {
      console.log(operator + 'operator is this from equals');
      let opIndex = buttonsData.findIndex((operator) => {
        if (
          operator == '*' ||
          operator == '/' ||
          operator == '+' ||
          operator == '='
        ) {
          return true;
        }
        return false;
      });
      console.log(opIndex);
      let a = buttonsData.splice(0, opIndex);
      a.join((delimiter = ','));
      console.log(a + 'is this a from the switches');
      let b = buttonsData.splice(opIndex + 1);
      b.join((delimiter = ','));
      console.log(b + 'is this b from the switches');
      switch (operator) {
        case '+':
          add(a, b);
          console.log('the add switch works');
          break;
        case '-':
          minus(a, b);
          break;
        case '*':
          multiply(a, b);
          break;
        case '/':
          divide(a, b);
          break;

        default:
          console.log('broken?');
          break;
      }
    }
    display.innerHTML = buttonsData;
  });
});

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
