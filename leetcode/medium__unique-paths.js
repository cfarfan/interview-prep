/**
 * URL:
 *
 * Unique Paths
 *
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner
 * (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
 * The robot can only move either down or right at any point in time.
 *
 * Given the two integers m and n, return the number of possible unique paths that the robot can
 * take to reach the bottom-right corner. The test cases are generated so that the answer will be
 * less than or equal to 2 * 109.
 *
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 *
 * Constraints:
 * 1 <= m, n <= 100
 *
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const traverse = function (i, j, memo = {}) {
    if (i === 1 && j === 1) return 1;
    if (i === 0 || j === 0) return 0;

    const grid = `${i},${j}`;
    if (grid in memo) return memo[grid];
    memo[grid] = traverse(i - 1, j, memo) + traverse(i, j - 1, memo);
    return memo[grid];
  };

  return traverse(m, n);
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(23, 13)); // 548354040
