let num1 = '';
let num2 = '';
let operator = '';
let needReset = false;
const currentDisplay = document.getElementById('display');

// Number buttons
const numButtons = document.querySelectorAll('.num');
numButtons.forEach((button) => button.addEventListener('click', displayNumber));

// Operator buttons
const opButtons = document.querySelectorAll('.op');
opButtons.forEach((button) => button.addEventListener('click', setOperator));

// Buttons
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('decimal').addEventListener('click', addDecimal);

// Keyboard
window.addEventListener('keydown', keyboardInput);

// Display
function displayNumber(e){
    if(needReset){
        currentDisplay.textContent = '';
        needReset = false;
    }
    currentDisplay.textContent += e.target.textContent;
}

function setOperator(e){
    if(operator != ''){
        calculate(e);
    }
    num1 = currentDisplay.textContent;
    operator = e.target.textContent;
    needReset = true;
}

function calculate(){
    if(operator == '' || needReset){
        return;
    }
    num2 = currentDisplay.textContent;
    let result = operate(num1, num2, operator)
    currentDisplay.textContent = Math.round(result * 10000) / 10000;;
    operator = '';
}

function addDecimal(){
    if(needReset){
        currentDisplay.textContent = '';
        needReset = false;
    }
    if(currentDisplay.textContent === ''){
        currentDisplay.textContent = '0';
    }
    if(currentDisplay.textContent.includes('.')){
        return;
    }
    currentDisplay.textContent += '.';
}

// Operations
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
        return '';
    }
}

// Clearing
function clear(){
    num1 = '';
    num2 = '';
    operator = '';
    currentDisplay.textContent = '';
}

function del(){
    if(currentDisplay.textContent != ''){
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    }
}

// Keyboard support
function keyboardInput(e){
    if(e.key >= 0 && e.key <= 9){
        displayKeyboard(e);
    }
    else if(e.key === '.'){
        addDecimal();
    }
    else if(e.key === '=' || e.key === 'Enter'){
        calculate();
    }
    else if(e.key === 'Backspace'){
        del();
    }
    else if(e.key === 'Escape'){
        clear();
    }
}

function displayKeyboard(e){
    if(needReset){
        currentDisplay.textContent = '';
        needReset = false;
    }
    currentDisplay.textContent += e.key;
}
