export class Button {
    constructor(calc,div) {
        // Reference to the Calculator
        this.calc = calc;
        
        // DIV element for a generic button
        div.addEventListener("click", (e) => { this.onClick(e); });
    }
    onClick(evt) {
        console.info(`Ac: ${this.calc.accumulator} \nDisplay: ${this.calc.display} \nOperator: ${this.calc.operation}`); 
        
    }
}