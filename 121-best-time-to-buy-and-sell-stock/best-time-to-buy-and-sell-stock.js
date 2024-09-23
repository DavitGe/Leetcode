/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var enterance = prices[0]; //smallest price to buy
    var profit = 0;
    var len = prices.length;
    for(var i = 0; i < len; i++){
        if(enterance > prices[i]){
            enterance = prices[i] 
        } else if((prices[i] - enterance) > profit) {
            profit = prices[i] - enterance; //geting profits $$$
        }
    }
    return profit;
    
};