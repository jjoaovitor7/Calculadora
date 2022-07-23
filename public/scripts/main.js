const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
let display = document.getElementById("display");
const point = document.getElementById("point");
const clear = document.getElementById("clear");

function clicked_number(e) {
  display.textContent += parseInt(e.target.textContent);
}

numbers[0].addEventListener("click", clicked_number);
numbers[1].addEventListener("click", clicked_number);
numbers[2].addEventListener("click", clicked_number);
numbers[3].addEventListener("click", clicked_number);
numbers[4].addEventListener("click", clicked_number);
numbers[5].addEventListener("click", clicked_number);
numbers[6].addEventListener("click", clicked_number);
numbers[7].addEventListener("click", clicked_number);
numbers[8].addEventListener("click", clicked_number);
numbers[9].addEventListener("click", clicked_number);

function clicked_operations(e) {
  display.textContent += e.target.textContent;
}

operations[0].addEventListener("click", clicked_operations);
operations[1].addEventListener("click", clicked_operations);
operations[2].addEventListener("click", clicked_operations);

function display_result() {
 /**
   * for operations, the value of display.textContent is taken
   * and the operations in this are executed e soon after
   * are diplayed in display, if an error occurs,
   * values are "erased".
   */
  try {
    const result = Function("return ".concat(display.textContent))();
    display.textContent = result;
  } catch (SyntaxError) {
    display.textContent = "#Error";
  }
  return display.textContent;
}

operations[3].addEventListener("click", display_result);
operations[4].addEventListener("click", clicked_operations);

// BIN2DEC
operations[5].addEventListener("click", () => {
  if (display.textContent.length != 0) {
    if (isNaN(parseInt(display.textContent, 2))) {
      display.textContent = "#Error";
    } else {
      display.textContent = parseInt(display.textContent, 2);
    }
  }
});

// DEC2BIN
operations[6].addEventListener("click", () => {
  if (display.textContent.length != 0) {
    display.textContent = parseInt(parseInt(display.textContent, 10).toString(2));
  }
});

operations[7].addEventListener("click", clicked_operations);
operations[8].addEventListener("click", clicked_operations);

clear.addEventListener("click", (e) => {
  display.textContent = "";
});

point.addEventListener("click", (e) => {
  display.textContent += ".";
});
