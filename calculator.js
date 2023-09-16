const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value.match(/[0-9]/) || value === ".") {
            currentInput += value;
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput !== "") {
                if (previousInput !== "") {
                    calculate();
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                currentInput = "";
            }
        } else if (value === "=") {
            calculate();
            operator = "";
        } else if (value === "C") {
            clear();
        } else if (value === "+/-") {
            currentInput = (parseFloat(currentInput) * -1).toString();
        } else if (value === "%") {
            currentInput = (parseFloat(currentInput) / 100).toString();
        }

        result.value = currentInput;
    });
});

function calculate() {
    if (operator === "+") {
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
    } else if (operator === "-") {
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
    } else if (operator === "*") {
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
    } else if (operator === "/") {
        if (parseFloat(currentInput) !== 0) {
            currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        } else {
            currentInput = "Error";
        }
    }
    previousInput = "";
}

function clear() {
    currentInput = "";
    previousInput = "";
    operator = "";
    result.value = "0";
}
