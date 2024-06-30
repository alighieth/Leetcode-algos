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
  let output = true;
  function helper(node, max, min) {
    if (node.val <= min || node.val >= max) {
      output = false;
      return;
    }

    if (node.left) helper(node.left, node.val, min);
    if (node.right) helper(node.right, max, node.val);
  }

  helper(root, Infinity, -Infinity);
  return output;
};
