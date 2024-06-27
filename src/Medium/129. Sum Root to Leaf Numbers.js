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
var sumNumbers = function (root) {
  const callQueue = [];
  callQueue.push([root, 0]);
  let res = 0;

  while (callQueue.length > 0) {
    const [node, value] = callQueue.shift();

    let val = value * 10 + node.val;
    if (node.left === null && node.right === null) {
      res += val;
      continue;
    }

    if (node.left) {
      callQueue.push([node.left, val]);
    }
    if (node.right) {
      callQueue.push([node.right, val]);
    }
  }

  return res;
};
