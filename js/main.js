const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

const sum = document.getElementById("+");
const subt = document.getElementById("-");
const mult = document.getElementById("x");
const div = document.getElementById("/");
const equals = document.getElementById("=");
const clear = document.getElementById("c");
const point = document.getElementById(".");

let display = document.querySelector(".display");

function oneClicked() {
  display.textContent += 1;
}

function twoClicked() {
  display.textContent += 2;
}

function threeClicked() {
  display.textContent += 3;
}

function fourClicked() {
  display.textContent += 4;
}

function fiveClicked() {
  display.textContent += 5;
}

function sixClicked() {
  display.textContent += 6;
}

function sevenClicked() {
  display.textContent += 7;
}

function eightClicked() {
  display.textContent += 8;
}

function nineClicked() {
  display.textContent += 9;
}

function zeroClicked() {
  display.textContent += 0;
}

function sumClicked() {
  display.textContent += "+";
}

function subtClicked() {
  display.textContent += "-";
}

function multClicked() {
  display.textContent += "*";
}

function divClicked() {
  display.textContent += "/";
}

function equalsClicked() {
  try {
    let aux = eval(display.textContent);
    display.textContent = aux;
  } catch (SyntaxError) {
    display.textContent = "";
  }
}

function clearClicked() {
  display.textContent = "";
}

function pointClicked() {
  display.textContent += ".";
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
clear.addEventListener("click", clearClicked);
point.addEventListener("click", pointClicked);
