let currentDisplay = '';

document.querySelector('#display').value = currentDisplay;

function appendValue(value) {
    currentDisplay += value;
    document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function calculate() {
    let result = eval(currentDisplay);
    currentDisplay = result;
    document.querySelector('#display').value = currentDisplay;
}