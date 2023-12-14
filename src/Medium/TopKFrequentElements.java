// /**
//  * TopKFrequentElements
//  */

import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

public class TopKFrequentElements {
    public int[] topKFrequent(int[] nums, int k) {
        int[] returnResult = new int[k];
        HashMap<Integer, String> numIterations = new HashMap<>(); 
        HashMap<Integer, Integer> numValues = getIterations(nums);
        System.out.println("'out '" + numValues.toString());

        numValues.forEach((key, value) -> numIterations.put(value, numIterations.get(value) == null ? String.valueOf(key) : (numIterations.get(value) + '-' + key)));
        Stream<Integer> sortedIterations =  numIterations.keySet().stream().sorted();
        // sortedIterations.forEachOrdered((t -> ));
        System.out.println("'out '" + numIterations.toString());        

        return returnResult;
    }

    public HashMap<Integer, Integer> getIterations(int[] nums) {
        int leftPointer = 0;
        int rightPointer = nums.length -1;
        HashMap<Integer, Integer> numValues = new HashMap<>();

        while (leftPointer <= rightPointer) {
            int mapValueLeft = numValues.get(nums[leftPointer]) == null ? 0 : numValues.get(nums[leftPointer]);  
            int mapValueRight = numValues.get(nums[rightPointer]) == null ? 0 : numValues.get(nums[rightPointer]);

            numValues.put(nums[leftPointer], mapValueLeft + 1);
            if(leftPointer != rightPointer) {
                numValues.put(nums[rightPointer], mapValueRight + 1);
            }
            leftPointer++;
            rightPointer--;
        }
        return numValues;
    }
    
    public static void main(String[] args) {
        TopKFrequentElements x = new TopKFrequentElements();
        int[] xr = {
            1,1,1,2,2,2,3
        };
        x.topKFrequent(xr, 0);
    }
}