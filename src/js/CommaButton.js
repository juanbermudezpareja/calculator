import {Button} from './Button';

export class CommaButton extends Button{
    constructor(calc,div) {
        super(calc,div);
    }
 
    onClick(evt) {    
        super.onClick(evt);
        this.calc.addDigitDisplay(evt.target.innerText) 
    }
}