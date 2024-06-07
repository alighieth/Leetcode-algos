# https://leetcode.com/problems/longest-consecutive-sequence/description/

class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        
# to be consecutive, it needs to have x-1 and x+1
# i will be at x=100, i i will check if there is x-1=99 or x+1 = 101, they will be stored in a map 
# at each if, if there is that number i will create a node x-1 and the next will be the 100, 
# and if i have x+1, then next of 100 will be it
# after arr is empty, get each from map and get the length, this will be o(n^2), 
# it can be o(n) if when i make an entry in the map, i save also the length 