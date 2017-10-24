import {Button} from './Button';
import {OperationButton} from './OperationButton';
import {NumericButton} from './NumericButton';
import {ResetButton} from './ResetButton';
import {ResultButton} from './ResultButton';

export class Calculator{
    constructor(){
        // DISPLAY
        this.display = '';
        this.operation = '';
        this.operator1 = '';
        this.operator2 = '';
        
        let buttonsSet = new Set();
        for (let index = 0; index < 10; index++) {
            buttonsSet.add(new NumericButton(this,document.getElementById('num' + index)));
        }
        // NUMERIC BUTTONS
        this.numericButtons = buttonsSet;

        // OPERATION BUTTONS
        this.addButton = new OperationButton(this, document.getElementById('add'));
        this.subButton = new OperationButton(this, document.getElementById('substract'));
        this.mulButton = new OperationButton(this, document.getElementById('multiply'));
        this.divButton = new OperationButton(this, document.getElementById('divide'));

        // RESET BUTTON
        this.resetButton = new ResetButton(this, document.getElementById('reset'));

        // RESULT BUTTON
        this.resultButton = new ResultButton(this,document.getElementById('result'));
    }
    addDigitDisplay(digit){
        this.display = this.display + digit;
        document.getElementById('calcDisplay').innerText = this.display;
    }
    resetDisplay(){
        this.display = '';
        document.getElementById('calcDisplay').innerText = this.display;
    }
    setOperation(oper){
        this.operation = oper;
        this.operator1 = this.display;
        this.display = '';
    }
    
    getResult(){
        this.operator2 = this.display;
        let result = 0;
        switch (this.operation) {
            case '+':
            result = this.operator1 + this.operator2;
            case '-':
            result = this.operator1 - this.operator2;
            case '*':
            result = this.operator1 * this.operator2;
            case '/':
            result = this.operator1 / this.operator2;    
            default:
            break;
        }
        console.log(result);
        console.log(this.operation);
        console.log(result);
        this.display = result;
        document.getElementById('calcDisplay').innerText = this.display;
    }
}
