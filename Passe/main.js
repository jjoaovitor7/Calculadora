const checked = {
  seg: false,
  ter: false,
  qua: false,
  qui: false,
  sex: false,
  sab: false,
  dom: false,
};

const money = document.getElementById("money");
const weeks = document.getElementById("weeks");
const half = document.getElementById("half");

let cbs_checked = [];
function set_values(e) {
  if (cbs_checked.length == 0) {
    Toastify({
      text: "Selecionar pelo menos 1 caixa de seleção.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
    }).showToast();
  } else {
    if (e.target.id != "money") {
      money.value = parseFloat(weeks.value) * cbs_checked.length * 4.5;

      if (half.checked) {
        money.value = parseFloat(money.value) / 2;
      }
    }

    if (e.target.id != "weeks") {
      weeks.value = parseInt(
        parseFloat(money.value) * ((1 / 4.5) / cbs_checked.length)
      );

      if (half.checked) {
        weeks.value = parseFloat(weeks.value) * 2;
      }
    }
  }
}

document.querySelectorAll(".week").forEach((el) => {
  el.addEventListener("click", (e) => {
    const day = el.parentElement.textContent.trim();
    const format = day.toLowerCase().substring(0, 3);
    if (el.checked) {
      cbs_checked.push(el);
      checked[format] = true;
    } else {
      const i = cbs_checked.indexOf(el.id);
      cbs_checked.splice(i, 1);
      if (i == -1) {
        checked[format] = false;
      }
    }
    set_values(e);
  });
});

money.addEventListener("input", set_values);
weeks.addEventListener("input", set_values);

half.addEventListener("click", (el) => {
  if (el.target.checked) {
    money.value = parseFloat(money.value) / 2;
    weeks.value = parseInt(weeks.value) * 2;
  }
});