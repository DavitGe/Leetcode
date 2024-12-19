/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var counter = 0;
    nums.forEach((el) => {
        if(!(el.toString()?.length % 2)){
            counter += 1;
        }
    })
    return counter;
};