function ToggleSidebar() {
    const myDiv = document.getElementById('myDiv');
    console.log(myDiv)
    if (myDiv.classList.contains('invisible')) {
        myDiv.classList.remove('invisible');
        myDiv.classList.add('visible');
    } else {
        myDiv.classList.remove('visible');
        myDiv.classList.add('invisible');
    }
}

function Solve(val) {
    var v = document.getElementById('res');
    if (val.includes('²')) {
        v.value = v.value * v.value
    }
    else if (val.includes('#')) {
        CalculateOneDividedByX(v)
    }
    else if (val.includes('√')) {
        CalculateSquareRoot(v, val)
    }
    else if (Number(v.value) == 0 && Number(val) == 0) {
        v.value = "0"
    }
    else {
        v.value += val;
    }
}

function CalculateOneDividedByX(v) {
    if (v.value === '') {
        v.value = "Cannot divide by zero"
    }
    else if (v.value.length >= 1) {
        v.value = 1 / Number(v.value)
    }
    else if (v.value == "0") {
        v.value = "Cannot divide by zero"
    }
}

function CalculateSquareRoot(v, val) {
    v.value += val;
    if (v.value === '√') {
        v.value = Math.sqrt(0)
    }
    else if (v.value.includes('√') && v.value.length > 1) {
        number = v.value.replace('√', '')
        v.value = Math.sqrt(number)
    }
    else if (v.value.includes('√') && val !== '√') {
        v.value = Math.sqrt(val)
    }
}

function Result() {
    console.log(document.getElementById('res').value)
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});