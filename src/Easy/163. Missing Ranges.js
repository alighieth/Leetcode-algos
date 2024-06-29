/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0) return [[lower, upper]];
  const res = [];

  if (lower < nums[0]) res.push([lower, nums[0] - 1]);

  for (let index = 0; index < nums.length - 1; index++) {
    const element = nums[index];
    const nextElement = nums[index + 1];

    if (element < lower) continue;
    if (nextElement - element <= 1) continue;

    res.push([element + 1, nextElement - 1]);
  }

  if (upper > nums[nums.length - 1])
    res.push([nums[nums.length - 1] + 1, upper]);

  return res;
};
