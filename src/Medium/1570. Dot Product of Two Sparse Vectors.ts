class SparseVector {
  dotProductArr: number[];
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.dotProductArr = new Array<number>();

    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if (element != 0) this.dotProductArr.push(index);
    }

    console.log(this.dotProductArr);
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    const arr =
      vec.dotProductArr.length > this.dotProductArr.length
        ? this.dotProductArr
        : vec.dotProductArr;

    let sum = 0;
    arr.forEach((index) => {
      sum += this.nums[index] * vec.nums[index];
    });

    return sum;
  }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */
