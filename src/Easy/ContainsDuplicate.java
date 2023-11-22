package Easy;

import java.util.Arrays;
import java.util.HashSet;

// https://leetcode.com/problems/contains-duplicate/
public class ContainsDuplicate {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> numRecorder = new HashSet<Integer>();

        for (int i = 0; i < nums.length; i++) {            
            System.out.println(numRecorder.contains(nums[i]));
            if(!numRecorder.isEmpty() && numRecorder.contains(nums[i])) {
                return true;
            } else {
                numRecorder.add(nums[i]);
            }
            
        }
        return false;
    }

    // Another solution, mine above is better 
    public boolean containsDuplicate2(int[] nums) {
        Arrays.sort(nums); 
        for (int i = 0; i < nums.length - 1; i++) {
                if (nums[i] == nums[i+1]) {
                    return true;
                }
        }
        return false;
    }
}
