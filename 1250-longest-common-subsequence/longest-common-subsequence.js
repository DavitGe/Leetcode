/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
// Initialize the memo array with -1 for unfilled values.
  const memo = Array.from({ length: text1.length + 1 }, () => 
    Array(text2.length + 1).fill(-1)
  );

  function memoSolve(p1, p2) {
    // Check if we've already solved this subproblem.
    if (memo[p1][p2] !== -1) {
      return memo[p1][p2];
    }

    // Base case: when either pointer is out of bounds.
    if (p1 === text1.length || p2 === text2.length) {
      memo[p1][p2] = 0;
      return 0;
    }

    // Option 1: Exclude text1[p1] from the solution.
    let option1 = memoSolve(p1 + 1, p2);

    // Option 2: Include text1[p1] in the solution if it has a match in text2.
    let option2 = 0;
    let firstOccurrence = text2.indexOf(text1[p1], p2);
    if (firstOccurrence !== -1) {
      option2 = 1 + memoSolve(p1 + 1, firstOccurrence + 1);
    }

    // Store the best result in memo and return it.
    memo[p1][p2] = Math.max(option1, option2);
    return memo[p1][p2];
  }

  return memoSolve(0, 0);
};