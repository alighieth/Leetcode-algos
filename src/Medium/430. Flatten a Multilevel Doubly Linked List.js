/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
  if (head == null) return null;

  function getLastChild(node) {
    let currentNode = node;
    let prevNode = null;
    while (currentNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return prevNode;
  }

  let currentNode = head;
  while (currentNode != null) {
    if (currentNode.child) {
      const childLastNode = getLastChild(currentNode.child);

      const tempNextNode = currentNode?.next ?? null;

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;

      if (tempNextNode) {
        tempNextNode.prev = childLastNode;
        childLastNode.next = tempNextNode;
      }
    }
    currentNode = currentNode.next;
  }

  return head;
};
