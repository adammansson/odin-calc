const add = (i: number, j: number) => i + j;
const subtract = (i: number, j: number) => i - j;
const multiply = (i: number, j: number) => i * j;
const divide = (i: number, j: number) => i / j;

const operate = (operator: string, i: number, j: number) => {
    switch (operator) {
        case "+":
            return add(i, j);

        case "-":
            return subtract(i, j);

        case "*":
            return multiply(i, j);

        case "/":
            return divide(i, j);
    }
};

const container = document.querySelector("#container");
const display = document.createElement("div");
display.textContent = "0";
let storedValue = 0;
let storedOperator = "";

if (container) {
    container.appendChild(display)

    for (let i = 0; i < 10; i++) {
        const node = document.createElement("button");   
        node.textContent = i.toString();
        node.addEventListener("click", () => {
            if (display.textContent === "0" || display.textContent === storedValue.toString()) {
                display.textContent = i.toString()
            } else {
                display.textContent += i.toString()
            }
        });
        container.appendChild(node);
    };

    ["+", "-", "*", "/"].forEach(op => {
        const node = document.createElement("button");   
        node.textContent = op;
        node.addEventListener("click", () => {
            if (storedValue === 0) {
                storedValue = +display.textContent;
                storedOperator = op;
            } else {
                storedValue = operate(storedOperator, storedValue, +display.textContent);
                storedOperator = op;
                display.textContent = storedValue.toString()
            }
        });
        container.appendChild(node); 
    });

    const equals = document.createElement("button");
    equals.textContent = "=";
    equals.addEventListener("click", () => {
        storedValue = operate(storedOperator, storedValue, +display.textContent);
        display.textContent = storedValue.toString()
    });
    container.appendChild(equals);

    const clear = document.createElement("button");
    clear.textContent = "C";
    clear.addEventListener("click", () => {
        storedValue = 0;
        storedOperator = "";
        display.textContent = "0";
    });
    container.appendChild(clear);
};
