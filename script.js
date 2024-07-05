let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === 0) return;
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' || isNaN(currentInput.slice(-1))) return;
    currentInput += operator;
    display.innerText = currentInput;
}

function appendFunction(func) {
    currentInput += func + '(';
    display.innerText = currentInput;
}

function appendDot() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = currentInput.replace('^', '**');
        // Evaluate trigonometric functions and replace them with their results
        currentInput = currentInput.replace(/Math\.(sqrt|sin|cos|tan)\(([^)]+)\)/g, (_, func, expr) => {
            return Math[func](eval(expr));
        });
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
