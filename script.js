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
let count = 0;
console.log(count + ' count from the top');
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
      count++;
      operatorSet(o);
    }

    if (e.target.classList == 'equals') {
      operator = buttonsData.find(
        (element) =>
          element == '×' || element == '÷' || element == '+' || element == '-'
      );
      console.log(operator + 'is the op from equals function');
      operate(operator, count);
    }
  });
});

function operatorSet(o) {
  operator = o;
  buttonsData.push(operator);
  console.log(...buttonsData);
  display.textContent = buttonsData.join('');
  //count the operator buttons

  if (count >= 2) {
    operate(operator, count);
    console.log(count + 'count from inside if stm in operator set');
  }
  console.log(count + ' count from inside operatorSet');
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

function operate(operator, count) {
  if (count == 1) {
    let equalsArray = Array.from(buttonsData);
    console.log(equalsArray);
    console.log(count + 'from inside the operate fn');
    let opIndex = equalsArray.indexOf(operator);
    console.log(opIndex + ' this is op index');

    let a = equalsArray.slice(0, opIndex).join('');
    console.log(a + "a works don't touch it");
    let b = equalsArray.slice(opIndex + 1).join('');
    console.log(b + 'this is b');
    switch (operator) {
      case '+':
        plus(a, b);
        console.log('the add switch works in count less than 1 ');
        break;
      case '-':
        minus(a, b);
        console.log('the minus switch works in count less than 1 ');
        break;
      case '×':
        multiply(a, b);
        console.log('the multiply switch works in count less than 1 ');
        break;
      case '÷':
        divide(a, b);
        console.log('the divide switch works in count less than 1 ');
        break;

      default:
        console.log('broken?');
        break;
    }
  } else if (count >= 2) {
    let freshArray = Array.from(buttonsData);
    console.log(freshArray);
    console.log(count + ' is count from inside the goalong fn');
    let opIndex = freshArray.indexOf(operator);
    console.log(opIndex + ' this is op index from goalong fn');

    let a = freshArray.slice(0, opIndex).join('');
    console.log(a + "a works don't touch it");
    let b = freshArray.slice(opIndex + 1, freshArray.length - 1).join('');
    console.log(b + 'this is b');
    switch (operator) {
      case '+':
        plus(a, b);
        console.log('the add switch works in count less than 1 ');
        break;
      case '-':
        minus(a, b);
        console.log('the minus switch works in count less than 1 ');
        break;
      case '×':
        multiply(a, b);
        console.log('the multiply switch works in count less than 1 ');
        break;
      case '÷':
        divide(a, b);
        console.log('the divide switch works in count less than 1 ');
        break;

      default:
        console.log('broken?');
        break;
    }
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
