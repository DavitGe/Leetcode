public class Solution {
    public string ReverseVowels(string s) {
        char[] vowels = { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };
        List<int> vowelIndexes = new List<int>();
        List<char> sVowels = new List<char>();
        char[] ans = s.ToCharArray();

        for(int i = 0; i < s.Length; i++){
            bool isVowel = vowels.Contains(s[i]);
            if(isVowel){
                vowelIndexes.Add(i);
                sVowels.Add(s[i]);
            }
        }

        for(int i = 0; i < vowelIndexes.Count; i++){
            ans[vowelIndexes[i]] = sVowels[^1];
            sVowels.RemoveAt(sVowels.Count- 1);
        }

        return new string(ans);
    }
}