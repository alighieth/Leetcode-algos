/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function getRLE(s) {
    let prevCount = 1;
    let prevNum = s.charAt(0);
    let res = "";
    for (let index = 1; index < s.length; index++) {
      const element = s.charAt(index);

      if (element === prevNum) prevCount++;
      else {
        res += prevCount + prevNum;
        prevCount = 1;
        prevNum = element;
      }
    }

    res += prevCount + prevNum;
    return res;
  }

  let rle = "1";
  while (n > 1) {
    rle = getRLE(rle);
    n--;
  }

  return rle;
};
