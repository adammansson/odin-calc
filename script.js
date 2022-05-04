"use strict";
const add = (i, j) => i + j;
const subtract = (i, j) => i - j;
const multiply = (i, j) => i * j;
const divide = (i, j) => i / j;
const operate = (operator, i, j) => {
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
display.textContent = "";
if (container) {
    container.appendChild(display);
    for (let i = 0; i < 10; i++) {
        const node = document.createElement("button");
        node.textContent = i.toString();
        node.addEventListener("click", () => display.textContent += i.toString());
        container.appendChild(node);
    }
    ;
    ["+", "-", "*", "/", "=", "C"].forEach(op => {
        const node = document.createElement("button");
        node.textContent = op;
        container.appendChild(node);
    });
}
