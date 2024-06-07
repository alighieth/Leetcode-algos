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
    const l1_num = helper(l1, '')
    const l2_num = helper(l2, '')

    const sum = parseInt(l1_num) + parseInt(l2_num)
    const strSum = String(sum)

    let next_node = null
    let max_length = strSum.length

    for (let index = 0; index < max_length; index++) {
        const element = strSum.charAt(index)
        
        next_node = {
            "val": element,
            "next": next_node
        }
    }

    console.log(strSum)
    while (curr_node != null && max_length > 0) {
        const element = strSum.charAt(max_length);
        console.log('element ', element)


        max_length--;

        curr_node.val = element
        curr_node = curr_node.next
    }

    return biggest_link
};

function helper(node, number) {
    // console.log(node, number)
    if (node == null) {
        return number
    }

    return helper(node.next, node.val + number)
}