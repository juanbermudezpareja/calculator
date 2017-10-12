
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
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(operator1) + parseFloat(operator2);
            break;
        case '-':
            result = parseFloat(operator1) - parseFloat(operator2);
            break;
        case '*':
            result = parseFloat(operator1) * parseFloat(operator2);
            break;
        case '/':
            result = parseFloat(operator1) / parseFloat(operator2);
            break;        
        default:
            break;
    }
    console.log(parseFloat(operator1));
    console.log(parseFloat(operator2));
    console.log(result);
    document.getElementById('calcDisplay').innerText = result;
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