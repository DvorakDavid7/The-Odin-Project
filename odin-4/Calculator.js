

export default class Calculator {

    constructor(prevOperandTextElement, currentOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.prevOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    /**
     * 
     * @param {String} number 
     */
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    /**
     * 
     * @param {String} operation 
     */
    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.prevOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;
        const num1 = parseFloat(this.prevOperand);
        const num2 = parseFloat(this.currentOperand);
        if (isNaN(num1) || isNaN(num2)) return;

        switch (this.operation) {
            case "+":
                computation = num1 + num2;
                break;
            case "-":
                computation = num1 - num2;
                break;
            case "*":
                computation = num1 * num2;
                break;
            case "/":
                computation = num1 / num2;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.prevOperand = "";
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation !== undefined) {
            this.prevOperandTextElement.innerText = `${this.prevOperand} ${this.operation}`;
        }
        else {
            this.prevOperandTextElement.innerText = this.prevOperand;
        }
    }
}