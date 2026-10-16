public class Solution {
    public bool CanPlaceFlowers(int[] flowerbed, int n) {
        int len = flowerbed.Length;
        int emptySpace = 0;
        int lastPlantIndex = -10;

        for(int i = 0; i < len; i++){
            if(flowerbed[i] == 0 && (lastPlantIndex + 1) != i){
                if(i == len - 1){
                    emptySpace +=1;
                }else if(flowerbed[i + 1] == 0){
                    lastPlantIndex = i;
                    emptySpace +=1;
                }
            }else if(flowerbed[i] == 1){
                lastPlantIndex = i;
            }
        }

        return emptySpace >= n;

    }
}