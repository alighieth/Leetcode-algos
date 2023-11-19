
class Solution {
  public int strStr(String haystack, String needle) {
      if(needle.length() == 0 || needle == "" || needle.length() > haystack.length()) return -1;

      int needleLength = needle.length();
      for (int index = 0; index <= haystack.length() - needleLength; index++) {
        int j = 0;
        while(j < needleLength && haystack.charAt(index + j) == needle.charAt(j)) {
          j++;
        }
        if (j == needleLength) {
          return index;
        }
      }

      return -1;
  }
}
