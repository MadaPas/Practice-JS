var inputField = document.getElementById("inputField");

var a = 0;

function seven() {
    inputField.value += "7";
    a = 0;
}

function eight() {
    inputField.value += "8";
    a = 0;
}

function nine() {
    inputField.value += "9";
    a = 0;
}

function divideEl() {
    if (a == 0) {
        a = 1;
        inputField.value += "/";
    } else {
        alert("Pick a number");
    }
}

function four() {
    inputField.value += "4";
    a = 0;
}

function five() {
    inputField.value += "5";
    a = 0;
}

function six() {
    inputField.value += "6";
    a = 0;
}

function multiplication() {
    if (a == 0) {
        a = 1;
        inputField.value += "*";
    } else {
        alert("Pick a number");
    }
}

function one() {
    inputField.value += "1";
    a = 0;
}

function two() {
    inputField.value += "2";
    a = 0;
}

function three() {
    inputField.value += "3";
    a = 0;
}

function substraction() {
    if (a == 0) {
        a = 1;
        inputField.value += "-";
    } else {
        alert("Pick a number");
    }
}

function zero() {
    inputField.value += "0";
    a = 0;
}

function reset() {
    inputField.value = "";
}

function equals() {
    var x = eval(inputField.value);
    inputField.value = x;
}

function addition() {
    if (a == 0) {
        a = 1;
        inputField.value += "+";
    } else {
        alert("Pick a number");
    }
}
