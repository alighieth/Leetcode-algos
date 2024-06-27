/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function (head, insertVal) {
  if (!head) {
    const createdNode = new Node(insertVal, null);
    createdNode.next = createdNode;
    return createdNode;
  }

  let callSet = new Set();
  let currNode = head.next;

  prevNode = head;
  callSet.add(head);

  while (!callSet.has(currNode)) {
    callSet.add(currNode);

    if (insertVal >= prevNode.val && insertVal <= currNode.val) {
      handleNodeInsertion(insertVal, prevNode, currNode);
      return head;
    }

    if (currNode.val < prevNode.val) {
      if (insertVal >= prevNode.val || insertVal <= currNode.val) {
        handleNodeInsertion(insertVal, prevNode, currNode);
        return head;
      }
    }

    prevNode = currNode;
    currNode = currNode.next;
  }

  handleNodeInsertion(insertVal, prevNode, currNode);
  return head;
};

function handleNodeInsertion(nodeVal, prevNode, nextNode) {
  const createdNode = new Node(nodeVal, nextNode);
  prevNode.next = createdNode;
}
