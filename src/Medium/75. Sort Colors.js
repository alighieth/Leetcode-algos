/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;

  function toAdd() {
    if (zeros > 0) {
      zeros--;
      return 0;
    } else if (ones > 0) {
      ones--;
      return 1;
    } else {
      twos--;
      return 2;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === 0) zeros++;
    if (element === 1) ones++;
    if (element === 2) twos++;
  }

  let l = 0;

  while (l < nums.length) {
    const toAddVal = toAdd();
    nums[l] = toAddVal;
    l++;
  }

  return nums;
};
