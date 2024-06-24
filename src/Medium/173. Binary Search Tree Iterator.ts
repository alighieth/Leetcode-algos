/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
  callStack: any[];
  constructor(root: TreeNode | null) {
    this.callStack = [];

    this.helper(root);
  }

  helper(node) {
    if (node === null) return;

    this.helper(node.left);
    this.callStack.push(node.val);
    this.helper(node.right);
  }

  next(): number {
    return this.callStack.shift();
  }

  hasNext(): boolean {
    return this.callStack.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
