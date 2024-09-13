/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    var p = k;
    if(len < k){
        p = k % len;
    }
    if(p <= 0)return;
    nums.unshift(...nums.slice(-p));
    nums.splice(len, p);
};