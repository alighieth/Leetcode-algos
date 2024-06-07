# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        l1_list = list()
        l2_list = list()

        self.helper(l1, l1_list)
        self.helper(l2, l2_list)
        
        l1_value = " ".join(map(str, l1_list))
        l2_value = " ".join(map(str, l2_list))
        
        print(l1_value)
        print(l2_value)
        
        
    def helper(self, node: ListNode, array: list):
        if node.next is None:
            return

        array.append(node.val)
        self.helper(node=node.next, array=array)
