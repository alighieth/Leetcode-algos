/**
 * @param {string} s
 * @return {boolean}
 */

const isExponent = (e) => ["e", "E"].includes(e);
const isSign = (sign) => ["+", "-"].includes(sign);
function isDigit(str) {
  const digitPattern = /^\d+$/;
  return digitPattern.test(str);
}

var isNumber = function (s) {
  if (s.length === 0) return false;

  let numSeen = false;
  let numOfDecimals = 1;

  if (isSign(s.charAt(0))) s = s.substring(1);

  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);

    if (isExponent(element))
      return numSeen && isInteger(s.substring(index + 1));
    else if (isSign(element)) return false;
    else if (isDigit(element)) numSeen = true;
    else if (element === ".") {
      if (numOfDecimals <= 0) return false;
      numOfDecimals--;
    } else return false;
  }

  function isInteger(s) {
    if (s.length === 0) return false;

    let innerNumSeen = false;

    if (isSign(s.charAt(0))) s = s.substring(1);

    for (let index = 0; index < s.length; index++) {
      const element = s.charAt(index);

      if (isSign(element)) return false;
      else if (isExponent(element)) return false;
      else if (element === ".") return false;
      else if (isDigit(element)) innerNumSeen = true;
      else return false;
    }
    return innerNumSeen;
  }

  return numSeen;
};
