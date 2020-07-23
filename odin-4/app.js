import Calculator from "./Calculator.js"


const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const prevOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-opperand]");


const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement);


numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        calculator.appendNumber(numberBtn.innerText);
        calculator.updateDisplay();
    });
});


operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener("click", () => {
        calculator.chooseOperation(operationBtn.innerText);
        calculator.updateDisplay();
    });
});


equalsBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});


allClearBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});


deleteBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})