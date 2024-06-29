/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s/g, "");
  const sSplit = s.split("");
  let globalPointer = 0;

  return handleIsolation();

  function handleIsolation() {
    const res = [];

    let preOperator = "+";
    let num = "";

    while (sSplit[globalPointer] != ")" && globalPointer < sSplit.length) {
      const element = sSplit[globalPointer];

      const parsedElement = parseInt(element);
      if (!isNaN(parsedElement)) num += element;
      else if (["+", "-"].includes(element)) {
        const parsedNum = parseInt(num);
        if (preOperator === "+" && String(num).length > 0)
          res.push(1 * parsedNum);
        if (preOperator === "-" && String(num).length > 0)
          res.push(-1 * parsedNum);
        preOperator = element;
        num = "";
      } else {
        // ( only left sol
        globalPointer++;
        num = String(handleIsolation());
      }

      globalPointer++;
    }
    if (num.length > 0) {
      const parsedNum = parseInt(num);
      res.push((preOperator === "-" ? -1 : 1) * parsedNum);
    }
    return res.reduce((acc, curr) => acc + parseInt(curr), 0);
  }
};
