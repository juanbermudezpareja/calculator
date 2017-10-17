function Calculator(operator1,operator2,operation){
    this.operator1 = operator1;
    this.operator2 = operator2;
    this.operation = operation;
}

Calculator.prototype.getResult =
    function(){
        let result;
        switch (this.operation) {
            case '+':
                result = parseFloat(this.operator1) + parseFloat(this.operator2);
                break;
            case '-':
                result = parseFloat(this.operator1) - parseFloat(this.operator2);
                break;
            case '*':
                result = parseFloat(this.operator1) * parseFloat(this.operator2);
                break;
            case '/':
                result = parseFloat(this.operator1) / parseFloat(this.operator2);
                break;        
            default:
                break;
        }
        console.log(`Operation result ${result}`);
        return result;
    };

    module.exports.Calculator = Calculator;
