/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    var n = cost.length;
    var dp = [];
    for (var i = 0; i < n; i++) {
        if (i < 2) dp[i] = cost[i];
        else dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    return Math.min(dp[n - 1], dp[n - 2]);
};