/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
var strStr = function (haystack, needle) {
  let returnValue = -1;
  if (!needle || needle == "" || needle.length > haystack) return returnValue;
  if (haystack === needle) return 0;
  return isPart(haystack, needle);
};

function isPart(haystack, needle) {
  const needleLength = needle.length;
  for (let index = 0; index <= haystack.length - needleLength; index++) {
    let subString = haystack.substring(index, index + needleLength);
    if (subString.includes(needle)) {
      return index;
    }
  }

  return -1;
}
