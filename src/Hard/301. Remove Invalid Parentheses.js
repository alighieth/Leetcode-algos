/**
 * @param {string} s
 * @return {string[]}
 */
var isValid = (string) => {
  let open = 0;
  for (const c of string) {
    if (c === "(") open++;
    // Increment open brackets
    else if (c === ")") {
      if (open === 0) return false; // If closing bracket, but no open bracket, this is invalid
      open--;
    }
  }

  return open === 0; // Open brackets should be zero for valid string
};

var removeInvalidParentheses = function (s) {
  if (!s || s.length === 0) return [""];

  const queue = [s],
    seen = new Set(),
    result = [];
  seen.add(s);

  let validFound = false;

  while (queue.length > 0) {
    let expression = queue.shift();

    // If expression is valid
    if (isValid(expression)) {
      result.push(expression); // Push to result
      validFound = true;
    }

    if (validFound) continue; // If atleast one valid string found, don't do anything

    for (let i = 0; i < expression.length; i++) {
      if (expression[i] !== "(" && expression[i] !== ")") {
        continue; // If expression's i-th character is anything but one of ( or ), continue
      }

      // Calculate next string for consideration
      // Characters 0 to i-th (not including) + Characters (i + 1)th (including) to end
      let next = expression.substring(0, i) + expression.substring(i + 1);
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }

  return result;
};
