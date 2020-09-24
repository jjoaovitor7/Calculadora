// variables
// numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

// operations
const sum = document.getElementById("sum");
const subt = document.getElementById("subt");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const equals = document.getElementById("equals");

// clear
const clear = document.getElementById("clear");

// point, in decimal
const point = document.getElementById("point");

let display = document.querySelector(".display");
//----------

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
  /**
   * for operations, the value of display.textContent is taken
   * and the operations in this are executed e soon after
   * are diplayed in display, if an error occurs,
   * values are "erased".
   */
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
