class Solution {
  numStack: number[];
  totalLength: number;
  constructor(w: number[]) {
    this.totalLength = w.reduce((acc, curr) => acc + curr);
    this.numStack = new Array<number>();

    let startIndex = -1;
    w.forEach((element, index) => {
      startIndex = startIndex + element;
      this.numStack[index] = startIndex;
    });

    console.log(this.numStack);
  }

  search(target: number): number {
    for (let index = 0; index < this.numStack.length; index++) {
      const element = this.numStack[index];
      if (target <= element) {
        return index;
      }
    }

    return -1;
  }

  binarySearch(target: number): number {
    let left: number = 0;
    let right: number = this.numStack.length - 1;

    while (left <= right) {
      const mid: number = Math.floor(left + (right - left) / 2);
      console.log("mid", mid);
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
    console.log("could not find anything ", target);

    return -1;
  }

  pickIndex(): number {
    const randomNumber = Math.floor(Math.random() * this.totalLength);
    console.log(randomNumber);
    const itemSearch = this.binarySearch(randomNumber);
    return itemSearch;
  }
}
