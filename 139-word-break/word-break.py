class Solution(object):
    def wordBreak(self, s, wordDict):
        dp = [False] * len(s)

        for i in range(len(s)):
            for word in wordDict:
                if i >= len(word) - 1 and (i == len(word) - 1 or dp[i - len(word)]):
                    if s[i - len(word) + 1 : i + 1] == word:
                        dp[i] = True
                        break
        
        return dp[-1]
        