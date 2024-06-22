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

  pickIndex(): number {
    const randomNumber = Math.floor(Math.random() * this.totalLength);
    const itemSearch = this.search(randomNumber);
    return itemSearch;
  }
}
