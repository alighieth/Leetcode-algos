/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let l = 0; // pointer for word
  let r = 0; // pointer for abbr
  let number = 0; // to accumulate the number in abbreviation

  while (l < word.length && r < abbr.length) {
    const rElement = abbr.charAt(r);

    if (!isNaN(rElement)) {
      // if it's a digit
      if (rElement == "0" && number === 0) return false; // leading zero check
      number = number * 10 + parseInt(rElement);
      r++;
    } else {
      // if it's a letter
      l += number; // move the l pointer by the accumulated number
      number = 0; // reset the number
      if (l >= word.length || word.charAt(l) !== rElement) return false;
      l++;
      r++;
    }
  }

  l += number; // in case there is any remaining number to add
  return l === word.length && r === abbr.length;
};
