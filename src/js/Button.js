export class Button {
    constructor(calc) {
        // Reference to the Calculator
        this.calc = calc;
        console.log("Initialization of button: " + this);
    }
    onClick(evt) {
        console.info("In onClick: this = %o", evt); 
    }
}