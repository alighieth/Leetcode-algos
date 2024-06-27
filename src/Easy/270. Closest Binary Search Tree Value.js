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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  const callQueue = [];
  callQueue.push(root);

  let closestVal = [root.val, Math.abs(target - root.val)];
  while (callQueue.length > 0) {
    const node = callQueue.shift();
    if (node === null) continue;

    let [val, diff] = closestVal;
    const diffr = Math.abs(target - node.val);

    if (diff === diffr) {
      closestVal = [Math.min(val, node.val), diff];
    } else if (diffr < diff) {
      closestVal = [node.val, diffr];
    }

    callQueue.push(node.left);
    callQueue.push(node.right);
  }

  return closestVal[0];
};
