function Bin2Dec() {
  const binary = document.getElementById("binary").value;
  if (binary.length == 0) {
    return 0;
  } else if (binary.length > 8) {
    return 0;
  } else {
    binaryCalc = parseInt(binary, 2);
    if (isNaN(binaryCalc)) {
      alert("Só é permitido 0's ou 1's.");
    } else {
      alert(binaryCalc);
    }
  }
}

function Dec2Bin() {
  const decimal = document.getElementById("decimal").value;
  if (decimal.length == 0) {
    return 0;
  } else if (decimal.length > 8) {
    return 0;
  } else {
    decimalCalc = parseInt(parseInt(decimal, 10).toString(2));
    alert(decimalCalc);
  }
}

function toogleToDec2Bin(e) {
  e.preventDefault();
  document.querySelector("title").textContent = "Dec2Bin";
  document.getElementById("title-header-1").textContent = "Dec";
  document.getElementById("title-header-2").textContent = "Bin";
  document.getElementById("lbinary").setAttribute("hidden", true);
  document.getElementById("binary").setAttribute("hidden", true);
  document.getElementById("ldecimal").removeAttribute("hidden");
  document.getElementById("decimal").removeAttribute("hidden");
  document.getElementById("input-bin2dec").setAttribute("hidden", true);
  document.getElementById("input-dec2bin").removeAttribute("hidden");
}

function toogleToDarkMode() {
  if (document.getElementById("cbDarkMode").checked) {
    document.body.classList = "darkmode";
    document.querySelector("header").classList = "darkmode";
  } else {
    document.body.classList.remove("darkmode");
    document.querySelector("header").classList.remove("darkmode");
  }
}

document
  .getElementById("btn-dec2bin")
  .addEventListener("click", toogleToDec2Bin);

document
  .getElementById("cbDarkMode")
  .addEventListener("click", toogleToDarkMode);
