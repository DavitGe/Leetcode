/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var maxConsecutive = 0;
    var consecutive = 0;
    var len = nums.length;
    var i = 0;
    while(i < len){
        if(nums[i] == 1){
            consecutive += 1;
            if(maxConsecutive < consecutive){
                maxConsecutive = consecutive;
            }
        }else{
            consecutive = 0;
        }
        i += 1;
    }
    return maxConsecutive
};