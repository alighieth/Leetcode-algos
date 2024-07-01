/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  if (!list1) return list2;
  function findLastNode(node) {
    let currNode = node;
    let prevNode = null;

    let counter = 0;
    while (currNode != null) {
      prevNode = currNode;
      currNode = currNode.next;

      counter++;
    }

    return prevNode;
  }

  let athNode = null;
  let bthNode = null;
  let currNode = list1;
  let counter = 0;

  while (currNode) {
    if (counter === a - 1) {
      athNode = currNode;
    } else if (counter === b) {
      bthNode = currNode.next;
      break;
    }

    currNode = currNode.next;
    counter++;
  }

  const lastNode1 = findLastNode(list2);

  athNode.next = list2;
  lastNode1.next = bthNode;

  return list1;
};
