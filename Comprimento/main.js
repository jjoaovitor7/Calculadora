const units = document.querySelectorAll(".unit");

for (let i = 0; i <= 6; i++) {
  units[i].addEventListener("input", (e) => {
    if (e.target.value < 0) {
      e.target.value *= -1;
    }

    if (i == 0) {
      for (let j = 1; j <= 6; j++) {
        const common_calc = e.target.value * parseFloat(`10e${j-1}`);
        units[j].value = parseFloat(common_calc);
      }
    } else {
      for (let j = 0; j < i; j++) {
        const common_calc = e.target.value / parseFloat(`10e${j}`);
        units[j*-1+(i-1)].value = parseFloat(common_calc);
      }

      for (let j = i+1; j <= 6; j++) {
        const common_calc = e.target.value * parseFloat(`10e${j-i-1}`);
        units[j].value = parseFloat(common_calc);
      }
    }

    const inch_calc = e.target.value / parseFloat(`2.54e${(i-5)}`);
    units[7].value = parseFloat(inch_calc);

    const mile_calc = e.target.value / parseFloat(`1.609344e${i}`);
    units[8].value = parseFloat(mile_calc);
  });
}

units[7].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 6; i++) {
    const common_calc = 2.54 * (e.target.value * parseFloat(`10e${-6+i}`));
    units[i].value = parseFloat(common_calc);
  }

  const mile_calc = e.target.value / 63360;
  units[8].value = parseFloat(mile_calc);
});

units[8].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 7; i++) {
    const common_calc = 1609344 * (e.target.value * parseFloat(`10e${-7+i}`));
    units[i].value = parseFloat(common_calc);
  }

  const inch_calc = e.target.value * 63360;
  units[7].value = parseFloat(inch_calc);
});

document.querySelector("#calc-comp #clear").addEventListener("click", (_) => {
  units.forEach((el) => {
    el.value = "";
  });
});
