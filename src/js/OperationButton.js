import {Button} from './Button';

export class OperationButton extends Button {
    constructor(calc,div) {
        super(calc,div);
    }
 
    onClick(evt) {
        super.onClick(evt);
        this.calc.setOperation(evt.target.innerText);
    }
}