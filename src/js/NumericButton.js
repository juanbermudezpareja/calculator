import {Button} from './Button';

export class NumericButton extends Button{
    constructor(calc,div) {
        super(calc);
        
        // DIV element for a concret numeric button
        div.addEventListener("click", (e) => { this.onClick(e); });
    }
 
    onClick(evt) {    
        super.onClick(evt);
        this.calc.addDigitDisplay(evt.target.innerText) 
    }
}