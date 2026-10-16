public class Solution {
    public string ReverseWords(string s) {
        string[] words = s.Split(' ');
        string ans = "";

        for(int i = words.Length - 1; i >= 0; i--){
            string cur = words[i];
            if(cur.Length > 0){
                if(ans.Length == 0){
                    ans += cur;
                }else{
                    ans = ans + ' ' + cur;
                }
            }
        }

        return ans;
    }
}