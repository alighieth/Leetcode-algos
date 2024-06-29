/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  function helper(node, res) {
    if (node === null) return 0;

    let left = helper(node.left, res);
    let right = helper(node.right, res);

    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.Math(left, right) + 1;
  }

  helper(root, 0);

  return Math.abs(maxCol - minCol);
};
