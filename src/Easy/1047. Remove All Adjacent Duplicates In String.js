/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  if (s.length <= 1) return s;
  const split = s.split("");

  const wordStack = [];
  wordStack.push(s[0]);

  for (let index = 1; index < split.length; index++) {
    const element = split[index];

    const prevElement = wordStack.pop();

    if (prevElement === element) continue;
    wordStack.push(element);
  }

  return wordStack.join("");
};
