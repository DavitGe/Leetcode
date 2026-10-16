public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
        int len = candies.Length;
        bool[] ans = new bool[len];
        int biggest = 0;

        for (int i = 0; i < len; i++){
            if(candies[i] > biggest){
                biggest = candies[i];
            }
        }

        for(int i = 0; i < candies.Length; i++){
            ans[i] = (candies[i] + extraCandies) >= biggest; 
        }

        return ans;
    }
}