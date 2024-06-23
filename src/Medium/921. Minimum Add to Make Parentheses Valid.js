/**
 * @param {string} s
 * @return {number}
 */

const CLOSE_BRACKET = ")";
const OPEN_BRACKET = "(";

var minAddToMakeValid = function (s) {
  const openBracketsStack = [];
  const closeBracketsStack = [];

  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);

    if (element === OPEN_BRACKET) {
      openBracketsStack.push(OPEN_BRACKET);
    } else if (element === CLOSE_BRACKET) {
      if (openBracketsStack.length >= 1) {
        openBracketsStack.pop();
      } else {
        closeBracketsStack.push(CLOSE_BRACKET);
      }
    }
  }

  return openBracketsStack.length + closeBracketsStack.length;
};
