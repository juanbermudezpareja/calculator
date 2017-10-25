import {Button} from './Button';
import {OperationButton} from './OperationButton';
import {NumericButton} from './NumericButton';
import {ResetButton} from './ResetButton';
import {ResultButton} from './ResultButton';

export class Calculator{
    constructor(){
        // DISPLAY
        this.display = 0;
        this.operation = '+';
        this.accumulator = 0;
        
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
        this.display = parseInt(this.display + digit);
        this.refresh();
    }
    resetDisplay(){
        this.display = 0;
        this.accumulator = 0;
        this.operation = '+';

        this.refresh();
    }
    setOperation(oper){
        this.accumulator = this.getResult(this.accumulator, this.operation, this.display);
        this.display = this.accumulator;
        this.refresh();
        
        this.display = 0;
        this.operation = oper;
    }
    result(){
        this.accumulator = this.getResult(this.accumulator, this.operation, this.display);
        this.display = this.accumulator;
        this.refresh();
        
        this.display = 0;
    }
    
    // private
    getResult(op1, ope, op2){
        let result = 0;
        switch (ope) {
            case '+':
            result = parseInt(op1) + parseInt(op2);
            break;
            case '-':
            result = op1 - op2;
            break;
            case '*':
            result = op1 * op2;
            break;
            case '/':
            result = op1 / op2;    
            break;
            default:
            break;
        }
        console.log(`\nResult: ${result}`);
        return result;
    }

    //private
    refresh(){
        document.getElementById('calcDisplay').innerText = this.display;
    }
}
