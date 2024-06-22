class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  function helper(node: TreeNode | null): number {
    if (node === null) return 0;

    let sum = 0;
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    if (node.val < low) {
      sum += helper(node.right);
    }

    if (node.val > high) {
      sum += helper(node.left);
    }

    return sum;
  }

  return helper(root);
}
