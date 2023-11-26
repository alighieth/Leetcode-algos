package Easy;

import java.util.HashMap;
import java.util.LinkedList;

// https://leetcode.com/problems/two-sum/
public class TwoSum {
    
    public int[] twoSum(int[] nums, int target) {
        int[] returnList = new int[nums.length];
        HashMap<Integer, LinkedList<Integer>> valueSet = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            LinkedList<Integer> newList;
            if(valueSet.get(nums[i]) != null) {
                newList = valueSet.get(nums[i]);
                newList.add(i);
            } else {
                newList = new LinkedList<>();
                newList.add(i);
            }
            valueSet.put(nums[i], newList);
        }
        return returnList;
    }

    
}
