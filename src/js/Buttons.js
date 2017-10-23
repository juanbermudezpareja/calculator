import {Button} from './Button';

export class Buttons {
    constructor(display) {
        let buttonsSet = new Set();
        for (let index = 0; index < 10; index++) {
            buttonsSet.add(new Button(this,document.getElementById('num' + index)));
        }
        this.buttons = buttonsSet;
        this.display = display;
    }


}