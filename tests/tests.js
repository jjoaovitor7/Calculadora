QUnit.config.autostart = false;

window.onload = function () {
  QUnit.start();
  QUnit.module("Teste de cálculo", () => {
    QUnit.test("1+1", assert => {
      display.textContent = "";
      digits[0].click();
      operations[4].click();
      digits[0].click();
      operations[3].click();
      assert.equal(parseInt(display.textContent), 2);
    });

    QUnit.test("1-1", assert => {
      display.textContent = "";
      digits[0].click();
      operations[2].click();
      digits[0].click();
      operations[3].click();
      assert.equal(parseInt(display.textContent), 0);
    });

    QUnit.test("1*1", assert => {
      display.textContent = "";
      digits[0].click();
      operations[1].click();
      digits[0].click();
      operations[3].click();
      assert.equal(parseInt(display.textContent), 1);
    });

    QUnit.test("1/1", assert => {
      display.textContent = "";
      digits[0].click();
      operations[1].click();
      digits[0].click();
      operations[3].click();
      assert.equal(parseInt(display.textContent), 1);
    });

    QUnit.test("(1+2-3/4)*100", assert => {
      display.textContent = "";
      digits[11].click();
      digits[0].click();
      operations[4].click();
      digits[1].click();
      operations[2].click();
      digits[2].click();
      operations[0].click();
      digits[3].click();
      digits[12].click();
      operations[1].click();
      digits[0].click();
      digits[9].click();
      digits[9].click();
      operations[3].click();
      assert.equal(parseInt(display.textContent), 225);
    });
  });
};
