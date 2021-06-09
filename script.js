const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
let buttonsData = [];
let operator = '';
var colors = [
  'background: #C0D6A8; color: #484a49',
  'background: #e7f7da; color: #484a49',
  'background: #C4DFCE; color: #484a49',
  'background: #A8D5BE; color: #484a49',
];

//make the number buttons
for (let i = 0; i < 10; i++) {
  const numberButtons = document.createElement('button');
  numbers.appendChild(numberButtons);
  numberButtons.textContent = i;
  numberButtons.classList.add('number');
  numberButtons.setAttribute('id', i);
  //change styling
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  numberButtons.setAttribute('style', `${random_color}`);
  document
    .getElementById('0')
    .setAttribute('style', `order: 2;  grid-column: 2; ${random_color}`);
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
    opButtons.textContent = '×';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '*');
  } else if (i === 3) {
    opButtons.textContent = '÷';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '/');
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
      operate();
    }
  });
});

function operatorSet(o) {
  operator = o;
  buttonsData.push(operator);
  console.log(...buttonsData);
  display.textContent = buttonsData.join('');
}

function number(n) {
  var number = n;
  buttonsData.push(number);
  console.log(...buttonsData);
  display.textContent = buttonsData.join('');
}

function clear() {
  buttonsData.splice(0, buttonsData.length);
  display.textContent = '';
}

function operate() {
  var equationArray = Array.from(buttonsData);
  function getMathematicalValue(str) {
    return new Function('return ' + str)();
  }
  var answer = getMathematicalValue(equationArray.join(''));
  console.log(answer);
  display.textContent = answer;
}
