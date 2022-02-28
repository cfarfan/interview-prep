/**
 * URL: https://leetcode.com/problems/coin-change/
 *
 * Coin Change
 *
 * You are given an integer array coins representing coins of different denominations and an integer
 * amount representing a total amount of money. Return the fewest number of coins that you need to
 * make up that amount. If that amount of money cannot be made up by any combination of the coins,
 * return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Example 1:
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 * Constraints:
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 231 - 1
 * 0 <= amount <= 10^4
 *
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const getChange = function (coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const remain = amount - coins[i];
      if (remain >= 0) {
        min = Math.min(min, 1 + getChange(coins, remain, memo));
      }
    }
    memo[amount] = min;
    return min;
  };

  const result = getChange(coins, amount);
  return result === Infinity ? -1 : result;
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 11)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1, 2, 5], 100)); // 20
console.log(coinChange([2, 5, 10, 1], 27)); // 4
console.log(coinChange([1, 2, 5, 10], 18)); // 4
