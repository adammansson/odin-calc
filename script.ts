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
display.textContent = "";

if (container) {
    container.appendChild(display)

    for (let i = 0; i < 10; i++) {
        const node = document.createElement("button");   
        node.textContent = i.toString();
        node.addEventListener("click", () => display.textContent += i.toString())
        container.appendChild(node);
    };

    ["+", "-", "*", "/", "=", "C"].forEach(op => {
        const node = document.createElement("button");   
        node.textContent = op;
        container.appendChild(node); 
    });
}
