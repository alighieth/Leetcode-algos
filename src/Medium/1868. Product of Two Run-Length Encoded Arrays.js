/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  const maxArrayLen = Math.max(encoded1.length, encoded2.length);
  const res = [];

  let l = 0;
  let r = 0;
  let prevVal = null;

  while (l < maxArrayLen && r < maxArrayLen) {
    const [val1, freq1] = encoded1[l];
    const [val2, freq2] = encoded2[r];

    const freq = Math.min(freq1, freq2);
    const val = val1 * val2;

    let innerRes = [val, freq];
    if (prevVal && val === prevVal) {
      const [_, oldFreq] = res.pop();
      innerRes = [val, oldFreq + freq];
    }

    prevVal = val;

    encoded1[l] = [val1, freq1 - freq];
    encoded2[r] = [val2, freq2 - freq];

    res.push(innerRes);
    // at this point one of them has to be a 0
    if (encoded1[l][1] <= 0) l++;
    if (encoded2[r][1] <= 0) r++;
  }

  return res;
};
