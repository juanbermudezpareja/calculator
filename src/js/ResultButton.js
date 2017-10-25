import {Button} from './Button';

export class ResultButton extends Button{
    constructor(calc,div) {
        super(calc,div);
    }
 
    onClick(evt) {    
        super.onClick(evt);
        this.calc.result(); 
    }
}