/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  if (String(num).length < 1) return num;

  const splittedNums = String(num)
    .split("")
    .forEach((element) => parseInt(element));

  let l = 0;
  let r = splittedNums.length - 1;

  let sortedArr = [...splittedNums].sort((a, b) => b - a);

  while (l < r) {
    const lElement = splittedNums[l];
    const rElement = splittedNums[r];

    if (lElement === sortedArr[0]) {
      // id lElemnt is the max
      sortedArr.shift();
      l++;
    } else if (rElement === sortedArr[0]) {
      splittedNums[l] = rElement;
      splittedNums[r] = lElement;
      break;
    } else {
      r--;
    }
  }

  return parseInt(splittedNums.join(""));
};
