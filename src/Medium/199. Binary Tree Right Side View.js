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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  const res = [];

  const callStack = [];
  callStack.push(root);

  while (callStack.length > 0) {
    const callStackLen = callStack.length;
    for (let index = 0; index < callStackLen; index++) {
      const element = callStack.shift();

      if (index === 0) res.push(element.val);
      if (element.right !== null) callStack.push(element.right);
      if (element.left !== null) callStack.push(element.left);
    }
  }

  return res;
};
