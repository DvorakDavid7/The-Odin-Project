const containerSize = 500;
let currentSize = 16;
let mode = "black";

const container = document.querySelector(".container");
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

const newGridBtn = document.querySelector("#new-grid");
const resetBtn = document.querySelector("#reset");
const randomColorBtn = document.querySelector("#random-color");
const blackColorBtn = document.querySelector("#black-color");

newGridBtn.addEventListener("click", generateNewGrid);
resetBtn.addEventListener("click", () => drawGrid(currentSize))
randomColorBtn.addEventListener("click", () => modeSwitch("random"));
blackColorBtn.addEventListener("click", () => modeSwitch("black"));

drawGrid(currentSize);

function drawGrid(squaresOnRow) {
    container.innerHTML = "";
    for (let i = 0; i < Math.pow(squaresOnRow, 2); i++) {
        let div = document.createElement("div");
        div.style.width = `${containerSize / squaresOnRow - 2}px`;
        div.style.height = `${containerSize / squaresOnRow - 2}px`;
        if (mode === "black") {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            });
        }
        else if (mode === "random") {
            div.addEventListener("mouseover", () => {
                let r = () => Math.random() * 256 >> 0;
                let color = `rgb(${r()}, ${r()}, ${r()})`;
                div.style.backgroundColor = color;
            });
        }
        container.appendChild(div);
    }
}


function generateNewGrid() {
    let size = "";
    let promptText = "Please enter grid size";
    while (1) {
        size = parseInt(prompt(promptText, "16"));
        if (!size) {
            promptText = "Enter only number";
            continue;
        }
        else if (size <= 0 || size > 64) {
            promptText = "Enter only number between 1 and 64";
            continue;
        }
        else
            break;
    }
    currentSize = parseInt(size);
    drawGrid(parseInt(size));
}


function modeSwitch(_mode) {
    mode = _mode;
    drawGrid(currentSize);
}
