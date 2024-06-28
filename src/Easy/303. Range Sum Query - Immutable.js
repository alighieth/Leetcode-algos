/**
 * @param {number[]} nums
 */

class NumArray {
  sumTracker;
  constructor(nums) {
    this.sumTracker = new Array(nums.length + 1);
    let sum = 0;
    this.sumTracker[0] = 0;
    for (let index = 0; index < nums.length; index++) {
      sum += nums[index];
      this.sumTracker[index + 1] = sum;
    }
  }

  sumRange(left, right) {
    return this.sumTracker[right + 1] - this.sumTracker[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
