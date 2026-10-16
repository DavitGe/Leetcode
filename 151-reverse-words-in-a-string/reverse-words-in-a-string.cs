public class Solution {
    public string ReverseWords(string s) {
        string[] words = s.Split(' ');
        StringBuilder ans = new StringBuilder("");

        for(int i = words.Length - 1; i >= 0; i--){
            string cur = words[i];
            if(cur.Length > 0){
                if(ans.Length != 0){
                    ans.Append(" ");
                }
                ans.Append(cur);
            }
        }

        return ans.ToString();
    }
}