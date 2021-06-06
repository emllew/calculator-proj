const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
let buttonsData = [];
let operator = '';

for (let i = 0; i < 10; i++) {
  const numberButtons = document.createElement('button');
  numbers.appendChild(numberButtons);
  numberButtons.textContent = i;
  numberButtons.classList.add('number');
  numberButtons.setAttribute('id', i);
}

for (let i = 0; i < 6; i++) {
  const opButtons = document.createElement('button');
  if (i === 0) {
    opButtons.textContent = '+';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', 'plus');
  } else if (i === 1) {
    opButtons.textContent = '-';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', 'minus');
  } else if (i === 2) {
    opButtons.textContent = '*';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', 'multiply');
  } else if (i === 3) {
    opButtons.textContent = '/';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', 'divide');
  } else if (i === 4) {
    opButtons.textContent = 'clear';
    opButtons.classList.add('clear');
    opButtons.setAttribute('id', 'clear');
  } else if (i === 5) {
    opButtons.textContent = '=';
    opButtons.classList.add('equals');
    opButtons.setAttribute('id', 'equals');
  }
  operators.appendChild(opButtons);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.classList == 'clear') {
      clear();
    }
    if (e.target.classList == 'number') {
      let n = button.id;
      number(n);
    }

    if (e.target.classList == 'operator') {
      let o = button.id;
      operatorSet(o);
    }

    if (e.target.classList == 'equals') {
      operator = buttonsData.find(
        (element) =>
          element == 'multiply' ||
          element == 'divide' ||
          element == 'plus' ||
          element == 'minus'
      );

      console.log(operator + 'is the op from equals function');
      operate(operator);
    }

    display.textContent = buttonsData;
  });
});

function operatorSet(o) {
  operator = o;
  console.log(operator);
  buttonsData.push(operator);
  console.log(...buttonsData);
}

function number(n) {
  var number = n;
  console.log(number);
  buttonsData.push(number);
  console.log(...buttonsData);
}

function clear() {
  buttonsData.splice(0, buttonsData.length);
}

function operate(operator) {
  let equalsArray = Array.from(buttonsData);
  console.log(equalsArray);

  let opIndex = equalsArray.indexOf(operator);
  console.log(opIndex + ' this is op index');

  let a = equalsArray.slice(0, opIndex).join('');
  console.log(a + "a works don't touch it");
  let b = equalsArray.slice(opIndex + 1).join('');
  console.log(b + 'this is b');
  switch (operator) {
    case 'plus':
      plus(a, b);
      console.log('the add switch works');
      break;
    case 'minus':
      minus(a, b);
      console.log('the minus switch works');
      break;
    case 'multiply':
      multiply(a, b);
      console.log('the multiply switch works');
      break;
    case 'divide':
      divide(a, b);
      console.log('the divide switch works');
      break;

    default:
      console.log('broken?');
      break;
  }
}

function plus(a, b) {
  let plus = +a + +b;
  console.log(plus);
  display.textContent = plus;
}
function minus(a, b) {
  console.log(a - b);
}

function divide(a, b) {
  console.log(a / b);
}

function multiply(a, b) {
  console.log(a * b);
}
