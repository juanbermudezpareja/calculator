import {Buttons} from './Buttons'

export class Calculator{
    constructor(){
        this.display = '';
        this.buttons = new Buttons(this.display);
    }
}