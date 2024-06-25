/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  const callQueue = [];

  function helper(node) {
    if (node === null) return;

    helper(node.left);
    callQueue.push(node);
    helper(node.right);
  }

  helper(root);

  let head = null;
  let counter = 0;

  let prevNode = null;
  const callQueueLen = callQueue.length;
  while (callQueue.length > 0) {
    const node = callQueue.shift();

    node.right = callQueue[0] ?? null;
    node.left = prevNode;

    if (counter === 0) {
      head = node;
      counter++;
    }

    prevNode = node;
  }

  head.left = prevNode;
  prevNode.right = head;

  return head;
};
