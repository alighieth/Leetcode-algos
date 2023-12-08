// https://leetcode.com/problems/group-anagrams/

/**
 * GroupAnagrams
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
  * GroupAnagrams
  */
 public class GroupAnagrams {
  public static List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> returnList = new ArrayList<>();

        for (int index = 0; index < strs.length; index++) {
          String element = strs[index];
          String[] newList = {element};

          if (returnList.size() == 0) {
            List<String> listOfStrings = new ArrayList<String>(Arrays.asList(newList));
            returnList.add(listOfStrings);
          } 
          
          else {
            int beforeUpdateSize = returnList.size();
            for (int j = 0; j < beforeUpdateSize; j++) {
              String innerElement = returnList.get(j).get(0);
              System.out.println(returnList.get(j));
              if (isAnagram(innerElement, element)) {
                returnList.get(j).add(element);
                break;
              } else {
                if (j == beforeUpdateSize - 1) {
                  List<String> listOfStrings = new ArrayList<String>(Arrays.asList(newList));
                  returnList.add(listOfStrings);
                }
              }
            }
          }
        }

        return returnList;
    }

    public static boolean isAnagram(String s1, String s2) {
      if (s1.length() != s2.length()) return false;
      HashMap<Character, Integer> sMap = new HashMap<Character, Integer>();

      for (int index = 0; index < s1.length(); index++) {
        Character element = s1.charAt(index);
        int newValue = sMap.get(element) == null ? 0 : sMap.get(element);
        sMap.put(element, newValue + 1);
      }

      for (int index = 0; index < s2.length(); index++) {
        Character element = s2.charAt(index);
        if (sMap.get(element) == null|| sMap.get(element) == 0) return false;
        int newValue = sMap.get(element) == null ? 0 : sMap.get(element);
        sMap.put(element, newValue - 1);
      }

      return true;
    }
  

    public static void main(String[] args) {
      String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
      List<List<String>> result = GroupAnagrams.groupAnagrams(strs);

      System.out.println(result.toString());
    }
 }


// class Solution {
//     public List<List<String>> groupAnagrams(String[] strs) {
//         Map<String, List<String>> map = new HashMap<>();
        
//         for (String word : strs) {
//             char[] chars = word.toCharArray();
//             Arrays.sort(chars);
//             String sortedWord = new String(chars);
            
//             if (!map.containsKey(sortedWord)) {
//                 map.put(sortedWord, new ArrayList<>());
//             }
            
//             map.get(sortedWord).add(word);
//         }
        
//         return new ArrayList<>(map.values());
//     }
// }