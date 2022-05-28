// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
// const btn4 = document.getElementById('btn4');
// const btn5 = document.getElementById('btn5');
// const btn6 = document.getElementById('btn6');
// const btn7 = document.getElementById('btn7');
// const btn8 = document.getElementById('btn8');
// const btn9 = document.getElementById('btn9');
// const btn0 = document.getElementById('btn0');

// const addBtn = document.getElementById('add');
// const subBtn = document.getElementById('subtract');
// const mulButn = document.getElementById('multiply');
// const divBtn = document.getElementById('divide');

// const eqBtn = document.getElementById('equals');

// const clrBtn = document.getElementById('clear');
// const delBtn = document.getElementById('delete');

// const decBtn = document.getElementById('decimal');
// const negBtn = document.getElementById('negative');
// const pctBtn = document.getElementById('percentage');

let displayBox = "";
let count = 0;
let num1 = "";
let num2 = "";
let operator;

for(let i = 0; i < 10; i++){
    document.getElementById('btn'+i).addEventListener('click', display);
    document.getElementById('btn'+i).addEventListener('click', op);
}

document.getElementById('add').addEventListener('click', display);
document.getElementById('subtract').addEventListener('click', display);
document.getElementById('multiply').addEventListener('click', display);
document.getElementById('divide').addEventListener('click', display);

document.getElementById('equals').addEventListener('click', eqls);

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('delete').addEventListener('click', del);

function display(e){
    displayBox += e.target.textContent;
    document.getElementById('display').textContent = displayBox;
}

function op(e){
    if(count === 0){
        num1 += e.target.textContent;
    }
}

function eqls(){
    document.getElementById('display').textContent = operate(num1, num2, operator);
}

function clear(){
    displayBox = "";
    document.getElementById('display').textContent = displayBox;
}

function del(){
    if(displayBox != ""){
        displayBox = displayBox.slice(0, -1);
        document.getElementById('display').textContent = displayBox;
    }
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
    return operator(a, b);
}

