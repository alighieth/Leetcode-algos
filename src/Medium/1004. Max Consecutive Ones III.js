/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxOnes = 0;
  let l = 0;

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    if (num === 0) {
      k--;
    }

    if (k < 0) {
      k += 1 - nums[l];
      l++;
    } else {
      maxOnes = Math.max(maxOnes, index - l + 1);
    }
  }

  return maxOnes;
};
