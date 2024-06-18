// script.js

const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        let result = display.value;
        result = result.replace(/√/g, 'Math.sqrt');
        result = result.replace(/\^/g, '**');
        display.value = eval(result);
    } catch (error) {
        display.value = 'Error';
    }
}
