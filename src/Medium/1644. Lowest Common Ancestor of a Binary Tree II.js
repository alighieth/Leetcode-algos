/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!p || !q || !root) return null;

  const parentMap = new Map();
  let callQueue = [];

  callQueue.push(root);
  parentMap.set(root, null);

  let pNode = null;
  let qNode = null;

  while (callQueue.length > 0) {
    const currNode = callQueue.shift();

    if (currNode === null) continue;
    if (currNode === p) pNode = currNode;
    if (currNode === q) qNode = currNode;
    if (pNode && qNode) break;

    if (currNode.left) {
      parentMap.set(currNode.left, currNode);
      callQueue.push(currNode.left);
    }

    if (currNode.right) {
      parentMap.set(currNode.right, currNode);
      callQueue.push(currNode.right);
    }
  }

  if (pNode === null || qNode === null) return null;

  const nodeTracker = new Set();
  callQueue = [];

  callQueue.push(qNode);
  callQueue.push(pNode);

  while (callQueue.length > 0) {
    const currNode = callQueue.shift();

    if (currNode === null) continue;
    if (nodeTracker.has(currNode)) return currNode;

    nodeTracker.add(currNode);
    callQueue.push(parentMap.get(currNode));
  }

  return null;
};
