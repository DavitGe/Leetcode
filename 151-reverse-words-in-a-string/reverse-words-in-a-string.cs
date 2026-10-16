public class Solution {
    public string ReverseWords(string s) {
        string[] words = s.Split(" ", StringSplitOptions.RemoveEmptyEntries);
        var reversedAns = words.Reverse();
        var ans = string.Join(" ", reversedAns);
        return ans;
    }
}