class Solution {
  elementMap = new Map<number, number[]>();

  constructor(nums: number[]) {
    nums.forEach((element, indx) => {
      const elementValue = this.elementMap.get(element) ?? [];
      elementValue.push(indx);
      this.elementMap.set(element, elementValue);
    });
  }

  pick(target: number): number {
    const elementIndxs = this.elementMap.get(target) ?? [];
    if (elementIndxs.length === 0) return -1;
    const randomIndx = Math.floor(Math.random() * elementIndxs.length);
    return elementIndxs[randomIndx];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
