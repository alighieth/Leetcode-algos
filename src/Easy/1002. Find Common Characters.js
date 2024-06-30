/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  if (words.length === 0) return [];

  const firstWordLetters = words[0].split("");
  let commonChars = [];

  for (let char of firstWordLetters) {
    let isCommon = true;
    for (let i = 1; i < words.length; i++) {
      if (!words[i].includes(char)) {
        isCommon = false;
        break;
      }
      words[i] = words[i].replace(char, "");
    }
    if (isCommon) {
      commonChars.push(char);
    }
  }

  return commonChars;
};
