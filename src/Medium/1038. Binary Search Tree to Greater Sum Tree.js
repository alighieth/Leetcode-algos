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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  function helper(node, maxValue) {
    if (node === null) return maxValue;

    node.val += maxValue + helper(node.right, 0);
    const lhs = helper(node.left, node.val);

    return lhs;
  }

  helper(root);
};
