/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost.length == 1) return cost[0];
    if(cost.length == 2) return Math.min(cost[0], cost[1]);
    var dp = [];
    const tempCost = [...cost, 0];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(var i = 2; i < tempCost.length - 1; i++){
        dp[i] = Math.min(dp[i - 2] + tempCost[i], dp[i - 1] + tempCost[i], dp[i - 1] + tempCost[i + 1]);
    }
    return dp[cost.length - 1];
};