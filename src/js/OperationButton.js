import {Button} from './Button';

export class OperationButton extends Button {
    constructor(calc,div) {
        super(calc);

        // DIV element for an operation
        div.addEventListener("click", (e) => { this.onClick(e); });
    }
 
    onClick(evt) {
        super.onClick(evt);
        this.calc.setOperation(evt.target.innerText);
    }
}