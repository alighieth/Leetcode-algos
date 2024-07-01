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
 * @param {number} targetSum
 * @return {number}
 */

// test node and child val, or node and child sum
var pathSum = function (root, targetSum) {
  let counter = 0;
  function dfs(node, parent) {
    if (node === null) return [];

    const leftSum = dfs(node.left, node.val);
    const rightSum = dfs(node.right, node.val);

    let res = [];
    if (node.val === targetSum) counter++;
    if (parent === null) return [];
    const mainSum = node.val + parent;
    res.push(mainSum);

    if (mainSum === targetSum) counter++;

    const fullArr = [...leftSum, ...rightSum];

    for (const sum of fullArr) {
      let innerSum = parent + sum;
      if (innerSum === targetSum) counter++;
      res.push(innerSum);
    }

    return res;
  }

  dfs(root, null);

  return counter;
};
