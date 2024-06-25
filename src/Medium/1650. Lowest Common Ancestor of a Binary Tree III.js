/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var lowestCommonAncestor = function (p, q) {
  const nodeSet = new Set();

  // p handler
  let currNode = p;
  while (currNode !== null) {
    nodeSet.add(currNode.val);
    currNode = currNode.parent;
  }

  currNode = q;
  while (currNode !== null) {
    if (nodeSet.has(currNode.val)) return currNode.val;
    currNode = currNode.parent;
  }

  return -1;
};
