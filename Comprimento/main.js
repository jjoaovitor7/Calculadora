const units = document.querySelectorAll(".unit");

units[0].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 1; i <= 6; i++) {
    const common_sn = (10 ** i);
    const common_calc = e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_sn = 2.54e-5;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 1.609344;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[1].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  const common_calc = e.target.value * 10e-2;
  units[0].value = parseFloat(common_calc.toFixed(15));

  for (let i = 2; i <= 6; i++) {
    const common_sn = 10 ** (i - 1);
    const common_calc = e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_sn = 2.54e-4;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 16.09344;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[2].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 1; i++) {
    const common_sn = 10 ** (-(i + 1));
    const common_calc = e.target.value * common_sn;
    units[i * -1 + 1].value = parseFloat(common_calc.toFixed(15));
  }

  for (let i = 3; i <= 6; i++) {
    const common_sn = 10 ** (i - 2);
    const common_calc = e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_sn = 2.54e-3;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 160.9344;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[3].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 2; i++) {
    const common_sn = 10 ** (-(i + 1));
    const common_calc = e.target.value * common_sn;
    units[i * -1 + 2].value = parseFloat(common_calc.toFixed(15));
  }

  for (let i = 4; i <= 6; i++) {
    const common_sn = 10 ** (i - 3);
    const common_calc = e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_sn = 2.54e-2;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 1609.344;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[4].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 3; i++) {
    const common_sn = 10 ** (-(i + 1));
    const common_calc = e.target.value * common_sn;
    units[i * -1 + 3].value = parseFloat(common_calc.toFixed(15));
  }

  for (let i = 5; i <= 6; i++) {
    const common_sn = 10 ** (i - 4);
    const common_calc = e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_sn = 2.54e-1;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 16093.44;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[5].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 4; i++) {
    const common_sn = 10 ** (-(i + 1));
    const common_calc = e.target.value * common_sn;
    units[i * -1 + 4].value = parseFloat(common_calc.toFixed(15));
  }

  units[6].value = parseFloat((e.target.value * 10).toFixed(15));

  const inch_sn = 2.54;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 160934.4;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[6].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 5; i++) {
    const common_sn = 10 ** (-(i + 1));
    const common_calc = e.target.value * common_sn;
    units[i * -1 + 5].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_sn = 25.4;
  const inch_calc = e.target.value / inch_sn;
  units[7].value = parseFloat(inch_calc.toFixed(15));

  const mile_calc = e.target.value / 1609344;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[7].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 6; i++) {
    const common_sn = 10 ** (-5 + i);
    const common_calc = 2.54 * e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const mile_calc = e.target.value / 63360;
  units[8].value = parseFloat(mile_calc.toFixed(15));
});

units[8].addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }

  for (let i = 0; i <= 7; i++) {
    const common_sn = 10 ** (-6 + i);
    const common_calc = 1609344 * e.target.value * common_sn;
    units[i].value = parseFloat(common_calc.toFixed(15));
  }

  const inch_calc = e.target.value * 63360;
  units[7].value = parseFloat(inch_calc.toFixed(15));
});

document.querySelector("#calc-comp #clear").addEventListener("click", (_) => {
  units.forEach((el) => {
    el.value = "";
  });
});
