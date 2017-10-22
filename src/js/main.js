var Calculator = require('./calculator');

// Calculator display
let display = '';
let operator1 = '';
let operator2 = '';
let operation = '';

function numberPressed(e){
    display = display + e.target.innerText;
    
    document.getElementById('calcDisplay').innerText = display;
}

function operationPressed(e){
    operation = e.target.innerText;
    if (operator1 === ''){
        operator1 = display;
    } 
    display = '';
}

function result (){
    operator2 = display;
    let calculator = new Calculator(operator1,operator2,operation);
    
    document.getElementById('calcDisplay').innerText = calculator.getResult();;
    display = '';
    operator1 = '';
    operator2 = '';
    operation = '';
}

function reset(){
    display = '';
    operator1 = '';
    operator2 = '';
    operation = '';
    document.getElementById('calcDisplay').innerText = '';
}