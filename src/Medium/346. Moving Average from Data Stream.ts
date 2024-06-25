class MovingAverage {
  sumPrefixArr: number[];
  sum: number;
  windowSize: number;
  constructor(size: number) {
    this.sum = 0;
    this.sumPrefixArr = [0];
    this.windowSize = size;
  }

  next(val: number): number {
    const sumPrefixValue = this.sumPrefixArr[this.sumPrefixArr.length - 1];

    this.sumPrefixArr.push(sumPrefixValue + val);
    const windowSizeValue = Math.min(
      this.sumPrefixArr.length - 1,
      this.windowSize
    );

    const currValue =
      this.sumPrefixArr[this.sumPrefixArr.length - 1] -
      this.sumPrefixArr[this.sumPrefixArr.length - windowSizeValue];

    return currValue / windowSizeValue;
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
