/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 && !l2) return l1;
  if (l2 && !l1) return l2;

  let h1 = l1;
  let h2 = l2;

  let remainder = 0;
  let newListHead = null;
  let prevNode = null;

  while (h1 || h2) {
    const num1 = h1?.val ?? 0;
    const num2 = h2?.val ?? 0;

    const sum = num1 + num2 + remainder;

    let endValue = sum;
    if (sum >= 10) {
      remainder = Math.floor(sum / 10);
      endValue = sum % 10;
    } else {
      remainder = 0;
    }

    const newNode = new ListNode(endValue, null);
    if (newListHead === null) {
      newListHead = newNode;
    } else {
      prevNode.next = newNode;
    }
    prevNode = newNode;

    h1 = h1?.next;
    h2 = h2?.next;
  }

  if (remainder != 0) {
    const newNode = new ListNode(remainder, null);
    prevNode.next = newNode;
  }

  return newListHead;
};
