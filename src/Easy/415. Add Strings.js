/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const res = (num1.length > num2.length ? num1 : num2).split("");

  let r1 = num1.length - 1;
  let r2 = num2.length - 1;

  maxCounter = res.length - 1;
  let remainder = 0;

  while ((r1 >= 0 && r2 >= 0) || (remainder > 0 && maxCounter >= 0)) {
    const d1 = r1 >= 0 ? num1[r1] : 0;
    const d2 = r2 >= 0 ? num2[r2] : 0;

    const summation = parseInt(d1) + parseInt(d2) + remainder;

    let value = summation;
    if (summation >= 10) {
      remainder = Math.floor(summation / 10);
      value = Math.floor(summation % 10);
    } else {
      remainder = 0;
    }
    res[maxCounter] = value;

    r1--;
    r2--;
    maxCounter--;
  }

  return (remainder === 0 ? "" : String(remainder)) + res.join("");
};
