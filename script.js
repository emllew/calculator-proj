const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
let buttonsData = [];
let operator = '';
var colors = [
  'background: #A9D6BF; color: #484a49',
  'background: #5C7358; color: #eff2ed',
  'background: #BED3AC; color: #484a49',
  'background: #EAEBEF; color: #484a49',
];

//make the number buttons
for (let i = 0; i < 10; i++) {
  const numberButtons = document.createElement('button');
  numbers.appendChild(numberButtons);
  numberButtons.textContent = i;
  numberButtons.classList.add('number');
  numberButtons.setAttribute('id', i);
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  numberButtons.setAttribute('style', `${random_color}`);
}

//make the operator buttons
for (let i = 0; i < 6; i++) {
  const opButtons = document.createElement('button');
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  opButtons.setAttribute('style', `${random_color}`);
  if (i === 0) {
    opButtons.textContent = '+';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '+');
  } else if (i === 1) {
    opButtons.textContent = '-';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '-');
  } else if (i === 2) {
    opButtons.textContent = '*';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '×');
  } else if (i === 3) {
    opButtons.textContent = '/';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '÷');
  } else if (i === 4) {
    opButtons.textContent = 'clear';
    opButtons.classList.add('clear');
    opButtons.setAttribute('id', 'clear');
  } else if (i === 5) {
    opButtons.textContent = '=';
    opButtons.classList.add('equals');
    opButtons.setAttribute('id', '=');
  }
  operators.appendChild(opButtons);
}
//add the event listeners to all buttons
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
          element == '×' || element == '÷' || element == '+' || element == '-'
      );
      console.log(operator + 'is the op from equals function');
      operate(operator);
    }
  });
});

function operatorSet(o) {
  operator = o;
  console.log(operator);
  buttonsData.push(operator);
  console.log(...buttonsData);
  display.textContent = buttonsData.join('');
}

function number(n) {
  var number = n;
  console.log(number);
  buttonsData.push(number);
  console.log(...buttonsData);
  display.textContent = buttonsData.join('');
}

function clear() {
  buttonsData.splice(0, buttonsData.length);
  display.textContent = '';
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
    case '+':
      plus(a, b);
      console.log('the add switch works');
      break;
    case '-':
      minus(a, b);
      console.log('the minus switch works');
      break;
    case '×':
      multiply(a, b);
      console.log('the multiply switch works');
      break;
    case '÷':
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
  let minus = a - b;
  display.textContent = minus;
}

function divide(a, b) {
  let divide = a / b;
  display.textContent = divide;
}

function multiply(a, b) {
  let multiply = a * b;
  display.textContent = multiply;
}
