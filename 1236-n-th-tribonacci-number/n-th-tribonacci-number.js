/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    var dp = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[n];
};