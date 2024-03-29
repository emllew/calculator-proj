const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
let buttonsData = [];
let operator = '';
let opButtonPressCount = 0;
var colors = [
  'background: #c4e0a6; color: #484a49',
  'background: #ddf7c8; color: #484a49',
  'background: #afe0c1; color: #484a49',
  'background: #7ec29f; color: #484a49',
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
    opButtons.textContent = '*';
    opButtons.classList.add('operator');
    opButtons.setAttribute('id', '*');
  } else if (i === 3) {
    opButtons.textContent = '/';
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
      opButtonPressCount = 0;
    }
    if (e.target.classList == 'number') {
      let n = button.id;
      number(n);
    }

    if (e.target.classList == 'operator') {
      let o = button.id;
      operatorClick(o);
    }

    if (e.target.classList == 'equals') {
      equals();
    }
  });
});

function operatorClick(o) {
  operator = o;
  buttonsData.push(operator);
  opButtonPressCount++;

  if (opButtonPressCount > 1) {
    //make a new array from the first 2 numbers (a and b)
    let secondOperatorArray = Array.from(buttonsData.slice(0, -1));
    console.log(secondOperatorArray + 'this is on second operator press');
    //find the operator in the array, a is before it and b is after it
    let opLocation = secondOperatorArray.findIndex(function (op) {
      return op === '+' || op === '-' || op === '*' || op === '/';
    });
    console.log(opLocation + ' this is op location');
    let calculatedOp = secondOperatorArray.at(opLocation);
    let aArray = secondOperatorArray.slice(0, opLocation);
    console.log(aArray + ' this is aArray');
    let bArray = secondOperatorArray.slice(opLocation + 1);
    console.log(bArray + ' this is bArray');
    let a = aArray.join('');
    console.log(a + ' this is a from the join');
    let b = bArray.join('');

    let result = operate(a, b, calculatedOp);

    let length = secondOperatorArray.length;

    buttonsData.splice(0, length, result);

    console.log(
      buttonsData +
        ' << this is after the splice, and this >> is the opbutton count >> ' +
        opButtonPressCount
    );
  }
  display.textContent = buttonsData.join('');
}

function equals() {
  let o = buttonsData.find(function (op) {
    return op === '+' || op === '-' || op === '*' || op === '/';
  });
  let opLocation = buttonsData.findIndex(function (op) {
    return op === '+' || op === '-' || op === '*' || op === '/';
  });
  console.log(opLocation + ' this is op location');
  let aArray = buttonsData.slice(0, opLocation);
  console.log(aArray + ' this is aArray');
  let bArray = buttonsData.slice(opLocation + 1);
  console.log(bArray + ' this is bArray');
  let a = aArray.join('');
  console.log(a + ' this is a from the join');
  let b = bArray.join('');
  let result = operate(a, b, o);
  display.textContent = result;
  buttonsData.splice(0, buttonsData.length, result);
  opButtonPressCount = 0;
}

function number(n) {
  buttonsData.push(n);
  console.log(buttonsData + ' this is from number fn');
  display.textContent = buttonsData.join('');
}

function clear() {
  buttonsData.splice(0, buttonsData.length);
  display.textContent = '';
}

function operate(a, b, o) {
  switch (o) {
    case '+':
      return parseInt(a) + parseInt(b);

    case '-':
      return parseInt(a) - parseInt(b);

    case '*':
      return parseInt(a) * parseInt(b);

    case '/':
      return parseInt(a) / parseInt(b);
  }
}
