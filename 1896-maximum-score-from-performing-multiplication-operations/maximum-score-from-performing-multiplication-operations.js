/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */

var maximumScore = function (nums, multipliers) {
    var score = 0;
    var n = nums.length;
    var m = multipliers.length;
    var memo = Array.from({ length: m }, () => Array(m + 1).fill(undefined));

    function dp(i, left) {
        if (i == m) {
            return 0;
        }
        var mult = multipliers[i];
        var right = n - 1 - (i - left);
        if (memo[i][left] === undefined) {
            memo[i][left] = Math.max(mult * nums[left] + dp(i + 1, left + 1),
                mult * nums[right] + dp(i + 1, left));
        }
        return memo[i][left];
    }
    return dp(0, 0);


};

