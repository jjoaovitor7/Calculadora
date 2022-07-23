QUnit.config.autostart = false;

window.onload = function () {
  QUnit.start();
  QUnit.module("Teste de cálculo", () => {
    QUnit.test("1+1", assert => {
      display.textContent = "";
      numbers[0].click();
      operations[4].click();
      numbers[0].click();
      assert.equal(display_result(), 2);
    });

    QUnit.test("1-1", assert => {
      display.textContent = "";
      numbers[0].click();
      operations[2].click();
      numbers[0].click();
      assert.equal(display_result(), 0);
    });

    QUnit.test("1*1", assert => {
      display.textContent = "";
      numbers[0].click();
      operations[1].click();
      numbers[0].click();
      assert.equal(display_result(), 1);
    });

    QUnit.test("1/1", assert => {
      display.textContent = "";
      numbers[0].click();
      operations[0].click();
      numbers[0].click();
      assert.equal(display_result(), 1);
    });

    QUnit.test("(1+2-3/4)*100", assert => {
      display.textContent = "";
      operations[7].click();
      numbers[0].click();
      operations[4].click();
      numbers[1].click();
      operations[2].click();
      numbers[2].click();
      operations[0].click();
      numbers[3].click();
      operations[8].click();
      operations[1].click();
      numbers[0].click();
      numbers[9].click();
      numbers[9].click();
      assert.equal(display_result(), 225);
    });
  });
};
