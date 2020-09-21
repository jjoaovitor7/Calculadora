const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');

const sum = document.getElementById('+');
const subt = document.getElementById('-');
const mult = document.getElementById('x');
const div = document.getElementById('/'); 
const equals = document.getElementById('=');

let display = document.querySelector(".display");

function oneClicked() {
    display.innerHTML += '<p>1</p>';
}

function twoClicked() {
    display.innerHTML += '<p>2</p>';
}

function threeClicked() {
    display.innerHTML += '<p>3</p>';
}

function fourClicked() {
    display.innerHTML += '<p>4</p>';
}

function fiveClicked() {
    display.innerHTML += '<p>5</p>';
}

function sixClicked() {
    display.innerHTML += '<p>6</p>';
}

function sevenClicked() {
    display.innerHTML += '<p>7</p>';
}

function eightClicked() {
    display.innerHTML += '<p>8</p>';
}

function nineClicked() {
    display.innerHTML += '<p>9</p>';
}

function zeroClicked() {
    display.innerHTML += '<p>0</p>';
    console.log(display.textContent);
}

function sumClicked() {
    display.innerHTML += '<p>+</p>';
}

function subtClicked() {
    display.innerHTML += '<p>-</p>';
}

function multClicked() {
    display.innerHTML += '<p>*</p>';
}

function divClicked() {
    display.innerHTML += '<p>/</p>';
}

function equalsClicked() {
    let op = eval(display.textContent);
    display.innerHTML = '<p>' + op + '</p>';
}


one.addEventListener("click", oneClicked);
two.addEventListener("click", twoClicked);
three.addEventListener("click", threeClicked);
four.addEventListener("click", fourClicked);
five.addEventListener("click", fiveClicked);
six.addEventListener("click", sixClicked);
seven.addEventListener("click", sevenClicked);
eight.addEventListener("click", eightClicked);
nine.addEventListener("click", nineClicked);
zero.addEventListener("click", zeroClicked);

sum.addEventListener("click", sumClicked);
subt.addEventListener("click", subtClicked);
mult.addEventListener("click", multClicked);
div.addEventListener("click", divClicked);
equals.addEventListener("click", equalsClicked);
