/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    var res = [];
    nums.forEach((el, i) => {
        const sq = el ? el * el : 0;
        for (var index = 0; index < res.length; index++) {
            if (sq < res[index]) {
                res = [
                    ...res.slice(0, index),
                    sq,
                    ...res.slice(index)
                ]
                index = res.length;
            }
        }

        if (res.length == i) {
            res.push(sq);
        }
    })
    return res
};