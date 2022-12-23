const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operation");
const display = document.getElementById("display");

window.addEventListener("keypress", (e) => {
  if (e.key.match(/[0-9]/g)) {
    display.textContent += parseInt(e.key);
  }

  if (e.key.match(/[-*+()/.]/g)) {
    display.textContent += e.key;
  }

  if (e.key == "=") {
      try {
        const result = Function("return ".concat(display.textContent))();
        display.textContent = result;
      } catch (SyntaxError) {
        display.textContent = "#Error";
      }
  }
});

for (let i = 0; i < 10; i++) {
  digits[i].addEventListener("click", (e) => {
    display.textContent += parseInt(e.target.textContent);
  });

  digits[i].addEventListener("keypress", (e) => {
    if (i == parseInt(e.key)) {
      display.textContent += parseInt(e.target.textContent);
    }
  });
}

for (let i = 10; i < 13; i++) {
  digits[i].addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
  })
}

for (let i = 0; i < operations.length; i++) {
  if (i == 3) {
    operations[i].addEventListener("click", (e) => {
      try {
        const result = Function("return ".concat(display.textContent))();
        display.textContent = result;
      } catch (SyntaxError) {
        display.textContent = "#Error";
      }
    });
  } else if (i == operations.length - 1) {
    operations[i].addEventListener("click", (e) => {
      display.textContent = "";
    });
  } else {
    operations[i].addEventListener("click", (e) => {
      display.textContent += e.target.textContent;
    });
  }
}

let ctx_menu_isActive = false;
document.getElementById("specific").addEventListener("click", (e) => {
  if (ctx_menu_isActive == false) {
    e.target.innerHTML += `<div id="ctx-menu">
<button id="bin2dec" class="operation">BIN2DEC</button>
<button id="dec2bin" class="operation">DEC2BIN</button>
</div>`;

    const ctx_menu = document.getElementById("ctx-menu");
    ctx_menu.style.left = `${e.clientX}px`;
    ctx_menu.style.top = `${e.clientY}px`;

    document.getElementById("bin2dec").addEventListener("click", (e) => {
      if (display.textContent.length != 0) {
        if (isNaN(parseInt(display.textContent, 2))) {
          display.textContent = "#Error";
        } else {
          display.textContent = parseInt(display.textContent, 2);
        }
      }
    });

    document.getElementById("dec2bin").addEventListener("click", (e) => {
      if (display.textContent.length != 0) {
        display.textContent = parseInt(parseInt(display.textContent, 10).toString(2));
      }
    })
    ctx_menu_isActive = true;
  } else {
    const ctx_menu = document.getElementById("ctx-menu");
    ctx_menu.remove();
    ctx_menu_isActive = false;
  }
});
