/**
 * @param {string} s
 * @return {number}
 */

const CLOSE_BRACKET = ")";
const OPEN_BRACKET = "(";

var minAddToMakeValid = function (s) {
  let openBrackets = 0;
  let closeBrackets = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);

    if (element === OPEN_BRACKET) {
      openBrackets++;
    } else if (element === CLOSE_BRACKET) {
      if (openBrackets >= 1) {
        openBrackets--;
      } else {
        closeBrackets++;
      }
    }
  }

  return openBrackets.length + closeBrackets.length;
};
