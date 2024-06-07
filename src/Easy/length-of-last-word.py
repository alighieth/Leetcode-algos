import re


class Solution(object):
    def lengthOfLastWord(self, inputSentence: str):
        sentenceLength = len(inputSentence)
        if(sentenceLength == 0):
            return sentenceLength
        
        my_string_stripped = inputSentence.strip()
        splittedSentenceArr = re.split(r'\s+', my_string_stripped)
        lastWord = splittedSentenceArr[len(splittedSentenceArr) - 1];
        
        return len(lastWord)       
        

Solution().lengthOfLastWord('   fly me   to   the moon  ')