/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    var max = 0;
    var dp = Array.from({length: rows + 1}, () => Array(cols + 1).fill(0));

    if (!rows || !cols) return max;

    for (var x = 1; x <= rows; x++) {
        for (var y = 1; y <= cols; y++) {
            if (matrix[x - 1][y - 1] == 1) {
                dp[x][y] = Math.min(dp[x - 1][y], dp[x][y - 1], dp[x - 1][y - 1]) + 1;
                max = Math.max(max, dp[x][y]);
            }
        }
    }
    return max * max;
};