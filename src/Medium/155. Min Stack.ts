class MinStack {
  min: number | null;
  stack : Array<number>;
  minStack: Array<number>

  constructor() {
    this.min = null;
    this.stack = new Array<number>
    this.minStack = new Array<number>
  }

  push(val: number): void {
    this.stack.push(val)

    if(this.min === null){
        this.minStack.push(val)
        this.min = val
        return;
    } 

    if(val <= this.min) {
        this.min = val
        this.minStack.push(val)
    } else {
        this.minStack.push(this.min)
    }
  }

  pop(): void {
    this.minStack.pop()
    this.stack.pop()
    if(this.minStack.length === 0){
        this.min = null
    } else {
        this.min = this.minStack[this.minStack.length - 1]
    }

  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
