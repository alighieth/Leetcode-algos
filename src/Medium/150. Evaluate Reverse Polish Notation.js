/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const callStack = [];

  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];

    if (["*", "-", "/", "+"].includes(element)) {
      const num1 = callStack.pop();
      const num2 = callStack.pop();

      if (element === "+") callStack.push(sum(num2, num1));
      if (element === "-") callStack.push(subtract(num2, num1));
      if (element === "/") callStack.push(Math.trunc(div(num2, num1)));
      if (element === "*") callStack.push(mul(num2, num1));
    } else {
      callStack.push(parseInt(element));
    }
  }

  return callStack.pop();
};
