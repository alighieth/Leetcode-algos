/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const letterOrderMap = new Map();
  const split = order.split("");
  letterOrderMap.set("", -1);
  split.forEach((letter, index) => letterOrderMap.set(letter, index));

  function isLexiOrder(w1, w2) {
    const maxSize = Math.max(w1.length, w2.length);

    for (let index = 0; index < maxSize; index++) {
      const letter1 = w1[index] ?? "";
      const letter2 = w2[index] ?? "";

      const letterDiff =
        letterOrderMap.get(letter2) - letterOrderMap.get(letter1);

      if (letterDiff === 0) continue;
      if (letterDiff < 0) return false;
      else return true;
    }
  }

  for (let index = 0; index < words.length - 1; index++) {
    const word = words[index];
    const nextWord = words[index + 1];

    const wordSplit = word.split("");
    const nextWordSplit = nextWord.split("");

    const isLexiOrderFlag = isLexiOrder(wordSplit, nextWordSplit);

    if (isLexiOrderFlag === false) return false;
  }

  return true;
};
