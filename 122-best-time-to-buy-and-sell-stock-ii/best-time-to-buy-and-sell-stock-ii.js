/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    var profit = 0;
    for(var i = 0; i < len; i++){
        if(prices[i] > prices[i - 1]){
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};