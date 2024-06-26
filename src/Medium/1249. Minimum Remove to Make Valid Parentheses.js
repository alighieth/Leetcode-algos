/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let openBracketsTracker = [];
  let result = s.split("");

  // First pass: mark invalid closing parentheses and collect positions of opening parentheses
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openBracketsTracker.push(i);
    } else if (s[i] === ")") {
      if (openBracketsTracker.length === 0) {
        result[i] = ""; // Mark this closing parenthesis for removal
      } else {
        openBracketsTracker.pop();
      }
    }
  }

  // Second pass: remove any unmatched opening parentheses
  while (openBracketsTracker.length > 0) {
    result[openBracketsTracker.pop()] = ""; // Mark this opening parenthesis for removal
  }

  return result.join("");
};
