class UnionFind {
  parent: number[];
  size: number[];

  constructor(size: number) {
    this.parent = new Array(size).map((_, index) => index);
    this.size = new Array(size).fill(1);
  }

  find(index: number) {
    if (index === this.parent[index]) {
      return index;
    } else {
      return this.find(this.parent[index]);
    }
  }

  union(i1: number, i2: number) {
    const f1 = this.find(i1);
    const f2 = this.find(i2);

    if (f1 === f2) return false;

    if (this.size[f1] > this.size[f2]) {
      this.parent[f2] = f1;
      this.size[f1] += this.size[f2];
    } else {
      this.parent[f1] = f2;
      this.size[f2] += this.size[f1];
    }

    return true;
  }
}
