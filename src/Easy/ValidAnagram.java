package Easy;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

// https://leetcode.com/problems/valid-anagram/
public class ValidAnagram {
    // using same letters only once
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;

        // HashSet<Character> originalCharacters = new HashSet<>();
        HashMap<Character, Integer> originalCharacters = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            System.out.println(s.charAt(i) + " => " + originalCharacters.get(s.charAt(i)));
            if(!originalCharacters.isEmpty() && originalCharacters.get(s.charAt(i)) != null) {
                originalCharacters.put(s.charAt(i), originalCharacters.get(s.charAt(i)) + 1);
            } else {
                originalCharacters.put(s.charAt(i), 1);
            }
        }

        for (int i = 0; i < s.length(); i++) {
            if(originalCharacters.get(t.charAt(i)) == null || originalCharacters.get(t.charAt(i)) == 0) {
                return false;
            } else {
                originalCharacters.put(s.charAt(i), originalCharacters.get(s.charAt(i)) - 1);
            }
        }
        
        return false;
    }

    // another solution 
    public boolean isAnagram2(String s, String t) {
        Map<Integer, Integer> freqs = new HashMap<>();
        s.chars().forEach(ch -> freqs.put(ch, freqs.getOrDefault(ch, 0) + 1));
        t.chars().forEach(ch -> freqs.put(ch, freqs.getOrDefault(ch, 0) - 1));
        return freqs.values().stream().allMatch(x -> x == 0);
    }
    
    // another solution that came to mind is to sort each string, then compare them, but i think this will be of higher time complexity or same
}
