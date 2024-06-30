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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(node, max, min) {
    if (node.val <= min || node.val >= max) return false;

    let output = true;

    if (node.left) {
      output &= helper(node.left, node.val, min);
    }

    if (node.right) {
      output &= helper(node.right, max, node.val);
    }

    return output;
  }

  return helper(root, Infinity, -Infinity);
};
