function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    let result;
    switch(op) {
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        
    }
    return result;
}

function displayResult(num) {
    const display = document.querySelector('.display');
    display.textContent = num;
}

let displayText = '';
let num1 = 0;
let num2 = 0;
let op;
const zero = document.querySelector('.num0');
const one = document.querySelector('.num1')
const two = document.querySelector('.num2')
const three = document.querySelector('.num3')
const four = document.querySelector('.num4')
const five = document.querySelector('.num5')
const six = document.querySelector('.num6')
const seven = document.querySelector('.num7')
const eight = document.querySelector('.num8')
const nine = document.querySelector('.num9')

zero.addEventListener('click', () => {
    displayText += 0;
    displayResult(displayText);
});

one.addEventListener('click', () => {
    displayText += 1;
    displayResult(displayText);
});

two.addEventListener('click', () => {
    displayText += 2;
    displayResult(displayText);
});

three.addEventListener('click', () => {
    displayText += 3;
    displayResult(displayText);
});

four.addEventListener('click', () => {
    displayText += 4;
    displayResult(displayText);
});

five.addEventListener('click', () => {
    displayText += 5;
    displayResult(displayText);
});

six.addEventListener('click', () => {
    displayText += 6;
    displayResult(displayText);
});

seven.addEventListener('click', () => {
    displayText += 7;
    displayResult(displayText);
});

eight.addEventListener('click', () => {
    displayText += 8;
    displayResult(displayText);
});

nine.addEventListener('click', () => {
    displayText += 9;
    displayResult(displayText);
});


const clear = document.querySelector('.clear');
const multi = document.querySelector('.multiply');
const div = document.querySelector('.divide');
const sub = document.querySelector('.subtract');
const addition = document.querySelector('.add');
const equals = document.querySelector('.equals');

clear.addEventListener('click', () => {
    displayText = ''
    displayResult(displayText);
    num1 = 0;
    num2 = 0;
});

multi.addEventListener('click', () => {
    num1 = parseInt(displayText);
    op = '*';
    displayText = '';
    displayResult(displayText);
});

div.addEventListener('click', () => {
    num1 = parseInt(displayText);
    op = '/';
    displayText = '';
    displayResult(displayText);
});

sub.addEventListener('click', () => {
    num1 = parseInt(displayText);
    op = '-';
    displayText = '';
    displayResult(displayText);
});

addition.addEventListener('click', () => {
    num1 = parseInt(displayText);
    op = '+';
    displayText = '';
    displayResult(displayText);
});

equals.addEventListener('click', () => {
    num2 = parseInt(displayText);
    if((num2 === 0 && op === '/') || isNaN(num1)) {
        displayText = '';
        displayResult("ERROR");
    }
    else {
        displayText ='' + operate(op, num1, num2);
        displayResult(displayText);
    }
})

