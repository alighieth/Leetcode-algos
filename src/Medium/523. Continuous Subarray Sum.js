/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false;

  const remainderMap = new Map();
  remainderMap.set(0, -1);

  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    sum += element;
    const remainder = sum % k;

    if (remainderMap.has(remainder)) {
      const remainderIndex = remainderMap.get(remainder);
      if (index - remainderIndex > 1) return true;
    } else {
      remainderMap.set(remainder, index);
    }
  }

  return false;
};
