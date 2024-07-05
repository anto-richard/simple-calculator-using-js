# Simple-Calculator-Using-JS...

## Aim :

Design a Webpage using JavaScript with a minimum of five mathematical operations.

## Sample Output :

![sample img](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/e4eba523-cadf-44a8-b379-a2d116c377d5)

## Program : 

### index.html :

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="calculator">
            <div class="header">
                <p>Anto Richard. S</p>
                <p>212221240005</p>
            </div>
            <div class="display" id="display">0</div>
            <div class="buttons">
                <button onclick="clearDisplay()">AC</button>
                <button onclick="deleteLast()">DEL</button>
                <button onclick="appendOperator('^')">^</button>
                <button onclick="appendOperator('/')">/</button>
                <button onclick="appendNumber(7)">7</button>
                <button onclick="appendNumber(8)">8</button>
                <button onclick="appendNumber(9)">9</button>
                <button onclick="appendOperator('*')">*</button>
                <button onclick="appendNumber(4)">4</button>
                <button onclick="appendNumber(5)">5</button>
                <button onclick="appendNumber(6)">6</button>
                <button onclick="appendOperator('-')">-</button>
                <button onclick="appendNumber(1)">1</button>
                <button onclick="appendNumber(2)">2</button>
                <button onclick="appendNumber(3)">3</button>
                <button onclick="appendOperator('+')">+</button>
                <button onclick="appendNumber(0)">0</button>
                <button onclick="appendNumber('00')">00</button>
                <button onclick="appendDot()">.</button>
                <button onclick="calculateResult()">=</button>
                <button onclick="appendFunction('Math.sqrt')">√</button>
                <button onclick="appendFunction('Math.sin')">sin</button>
                <button onclick="appendFunction('Math.cos')">cos</button>
                <button onclick="appendFunction('Math.tan')">tan</button>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

### styles.css :

```css

body {
    display: flex;
    justify-content: center;
    background: url('https://img.freepik.com/free-vector/speed-lights-background_23-2148627267.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=ais_user') no-repeat center center/cover;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Arial', sans-serif;

    color: #ffffff;
}

.container {
    text-align: center;
}

.calculator {
    background: rgb(0, 0, 0);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 15px 30px rgb(255, 255, 255);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.header p {
    margin: 5px 0;
    font-size: 1.2em;
    color: #ffffff;
    text-shadow: 0 0 5px #ff6699, 0 0 10px #ff6699;
}

.display {
    background: rgb(255, 255, 255);
    padding: 20px;
    font-size: 2.5em;
    text-align: right;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #000000;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #000000;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    padding: 20px;
    font-size: 1.5em;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    transition: background 0.3s, box-shadow 0.3s;
    text-shadow: 0 0 5px #00cc99, 0 0 10px #00cc99;
}

button:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 15px #00cc99, 0 0 30px #00cc99;
}

button:active {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px #00cc99, 0 0 40px #00cc99;
}

```

### script.js :

```js

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

```

## Output :

#### Addition operation :

![img1](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/8af27324-46a8-44c4-8735-eec72a176027)

![img2](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/894a0a79-dab0-4bb5-b808-3c7332efe4fb)

#### Subtraction operation :

![img3](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/76747159-af49-4c7f-adfd-f4c96a7391d3)

![img4](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/a646af13-5f55-4f23-94df-d449bbf2e3fd)

#### Multiplication operation :

![img5](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/203589dd-36ad-400d-88a1-0aac49aa8cb2)

![img6](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/adfad9fa-49bf-4bd8-9c3f-e674ec12fbf5)

#### Division operation :

![img7](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/bd79d034-29b7-4703-8577-9c39dba44a77)

![img8](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/df37b382-2be8-4200-b14d-1e7aed8ece72)

####  Exponent operation :

![img9](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/20b767e8-2f17-44d6-99de-b04b3f307066)

![img10](https://github.com/anto-richard/simple-calculator-using-js/assets/93427534/5d16c16a-f76e-4e74-99e8-59d5e460ccdc)


## Result :

  Thus, to design a Webpage using JavaScript with a minimum of five mathematical operations is successfully implemented by using html, css and javascript.

