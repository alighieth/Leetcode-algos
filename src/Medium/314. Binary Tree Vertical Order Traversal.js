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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (root === null) return [];
  const colMap = new Map();

  let minIndex = Infinity;
  let maxIndex = -Infinity;

  const callQueue = [];
  callQueue.push([root, 0, 0]);

  while (callQueue.length > 0) {
    const [node, col, row] = callQueue.shift();

    if (node === null) continue;
    minIndex = Math.min(minIndex, col);
    maxIndex = Math.max(maxIndex, col);

    const colArr = colMap.get(col) ?? [];
    colArr.push(node.val);
    colMap.set(col, colArr);

    if (node.left) callQueue.push([node.left, col - 1, row + 1]);
    if (node.right) callQueue.push([node.right, col + 1, row + 1]);
  }

  const res = [];
  for (let index = minIndex; index <= maxIndex; index++) {
    const element = colMap.get(index) ?? [];
    res.push(element);
  }

  return res;
};
