class Solution {
  numStack: number[];
  totalLength: number;
  constructor(w: number[]) {
    this.totalLength = w.reduce((acc, curr) => acc + curr);

    let startIndex = -1;
    w.forEach((element, index) => {
      startIndex = startIndex + element;
      w[index] = startIndex;
    });

    this.numStack = w;
  }

  binarySearch(target: number): number {
    let left: number = 0;
    let right: number = this.numStack.length - 1;

    while (left <= right) {
      const mid: number = Math.floor(left + (right - left) / 2);
      if (target < this.numStack[mid]) {
        if (mid - 1 >= 0 && target > this.numStack[mid - 1]) return mid;
        if (mid === 0) return mid;
        right = mid - 1;
      } else if (target == this.numStack[mid]) {
        return mid;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }

  pickIndex(): number {
    const randomNumber = Math.floor(Math.random() * this.totalLength);
    const itemSearch = this.binarySearch(randomNumber);
    return itemSearch;
  }
}
