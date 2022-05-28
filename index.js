// const decBtn = document.getElementById('decimal');
// const negBtn = document.getElementById('negative');
// const pctBtn = document.getElementById('percentage');

let num1 = '';
let num2 = '';
let operator = '';
const displayBox = document.getElementById('display');

// Number buttons
const numButtons = document.querySelectorAll('.num');
numButtons.forEach((button) => button.addEventListener('click', displayNumber));

// Operator buttons
const opButtons = document.querySelectorAll('.op');
opButtons.forEach((button) => button.addEventListener('click', setOperator));

// Equals button
document.getElementById('equals').addEventListener('click', calculate);

// Clear buttons
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('delete').addEventListener('click', del);

function displayNumber(e){
    displayBox.textContent += e.target.textContent;
}

function setOperator(e){
    if(operator === ''){
        num1 = displayBox.textContent;
        operator = e.target.textContent;
        displayBox.textContent = '';
    }
    else{
        calculate(e);
    }
}

function calculate(e){
    if(operator === '') return;
    num2 = displayBox.textContent;
    displayBox.textContent = operate(num1, num2, operator);
    operator = '';
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, operator){
    a = Number(a);
    b = Number(b);
    if(operator === '+'){
        return add(a, b);
    }
    else if(operator === '-'){
        return subtract(a, b);
    }
    else if(operator === '*'){
        return multiply(a, b);
    }
    else if(operator === '/'){
        return divide(a, b);
    }
    else{
        return 'ERROR';
    }
}

function clear(){
    num1 = '';
    num2 = '';
    operator = '';
    displayBox.textContent = '';
}

function del(){
    if(displayBox.textContent != ''){
        displayBox.textContent = displayBox.textContent.slice(0, -1);
    }
}

