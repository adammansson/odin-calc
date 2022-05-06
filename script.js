"use strict";
const OPERATORS = ["+", "-", "*", "/"];
function add(i, j) { return i + j; }
function subtract(i, j) { return i - j; }
function multiply(i, j) { return i * j; }
function divide(i, j) { return i / j; }
function evalRPN(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        console.log(token);
        if (OPERATORS.includes(token)) {
            const rightOperand = stack.pop();
            const leftOperand = stack.pop();
            switch (token) {
                case "+":
                    stack.push(add(leftOperand, rightOperand));
                    break;
                case "-":
                    stack.push(subtract(leftOperand, rightOperand));
                    break;
                case "*":
                    stack.push(multiply(leftOperand, rightOperand));
                    break;
                case "/":
                    if (rightOperand === 0) {
                        stack.push(0);
                    }
                    else {
                        stack.push(divide(leftOperand, rightOperand));
                    }
                    break;
            }
        }
        else {
            stack.push(+token);
        }
    }
    return stack[0];
}
const container = document.querySelector("#button-container");
const output = document.querySelector("#output");
const input = document.querySelector("#input");
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "_"].forEach(c => {
    const node = document.createElement("div");
    node.classList.add("button");
    node.textContent = c;
    node.addEventListener("click", () => {
        input.textContent += c;
        output.textContent = evalRPN(input.textContent.split("_")).toString();
    });
    container.appendChild(node);
});
const clear = document.createElement("div");
clear.classList.add("button");
clear.textContent = "C";
clear.addEventListener("click", () => {
    output.textContent = "";
    input.textContent = "";
});
container.appendChild(clear);
const del = document.createElement("div");
del.classList.add("button");
del.textContent = "D";
del.addEventListener("click", () => {
    input.textContent = input.textContent.slice(0, input.textContent.length - 1);
    output.textContent = evalRPN(input.textContent.split("_")).toString();
});
container.appendChild(del);
const history_container = document.querySelector("#history-container");
const save = document.createElement("div");
save.classList.add("button");
save.textContent = "S";
save.addEventListener("click", () => {
    const node = document.createElement("div");
    node.classList.add("history-event");
    node.textContent = output.textContent;
    node.addEventListener("click", () => {
        input.textContent = node.textContent;
        output.textContent = evalRPN(input.textContent.split("_")).toString();
    });
    history_container.appendChild(node);
});
container.appendChild(save);
